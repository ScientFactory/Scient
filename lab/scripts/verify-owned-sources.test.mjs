import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { validateOwnedSourcesManifest, verifyOwnedSources } from "./verify-owned-sources.mjs";

const head = "a".repeat(40);
const reviewed = "b".repeat(40);
const base = "c".repeat(40);

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "scient-owned-sources-"));
  const reviewRecord = "lab/external/upstream-reviews/review.md";
  mkdirSync(join(root, "lab/external/upstream-reviews"), { recursive: true });
  writeFileSync(join(root, reviewRecord), `Reviewed through: ${reviewed}\n`);
  writeFileSync(
    join(root, "lab/external/sources.lock.md"),
    `| Scient source | inventory ${head} ${base} adapter-maintained |\n| Scient source | review ${head} ${reviewed} 2026-07-18 ${base} adapter-maintained |\n`,
  );
  const source = {
    ownedRepository: "ScientFactory/source",
    sourceLockLabel: "Scient source",
    ownedDefaultBranch: "main",
    testedHead: head,
    officialRepository: "Original/source",
    officialDefaultBranch: "main",
    reviewedThrough: reviewed,
    reviewedAt: "2026-07-18",
    integrationBase: base,
    updateMode: "adapter-maintained",
    reviewRecord,
  };
  return {
    root,
    source,
    manifest: { schema: "scient.owned-sources/v1", sources: [source] },
    maintainedSources: new Map([["scientfactory/source", "main"]]),
  };
}

function remoteState(source) {
  const { testedHead: _testedHead, ...state } = source;
  return {
    schemaVersion: 1,
    ...state,
    reviewRecord: `ScientFactory/Scient:${source.reviewRecord}`,
  };
}

test("accepts matching source state and default-branch head", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const requests = [];
  const fetchImpl = async (url, options) => {
    requests.push({ url, authorization: new Headers(options.headers).get("Authorization") });
    return new Response(
      JSON.stringify(
        url.includes("raw.githubusercontent.com")
          ? remoteState(source)
          : url.endsWith(source.ownedRepository)
            ? { default_branch: source.ownedDefaultBranch }
            : { object: { sha: head } },
      ),
    );
  };
  assert.equal(
    await verifyOwnedSources(manifest, { root, fetchImpl, maintainedSources }),
    1,
  );
  assert.equal(requests[0].authorization, null);
  assert.equal(requests[1].authorization, null);
  assert.equal(requests[2].authorization, null);
});

test("rejects a default branch that moved beyond the recorded tested head", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const fetchImpl = async (url) =>
    new Response(
      JSON.stringify(
        url.includes("raw.githubusercontent.com")
          ? remoteState(source)
          : url.endsWith(source.ownedRepository)
            ? { default_branch: source.ownedDefaultBranch }
            : { object: { sha: "d".repeat(40) } },
      ),
    );
  await assert.rejects(
    () => verifyOwnedSources(manifest, { root, fetchImpl, maintainedSources }),
    /expected a{40}, received d{40}/,
  );
});

test("rejects a configured branch that is no longer the repository default", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const fetchImpl = async (url) =>
    new Response(
      JSON.stringify(
        url.includes("raw.githubusercontent.com")
          ? remoteState(source)
          : url.endsWith(source.ownedRepository)
            ? { default_branch: "renamed-default" }
            : { object: { sha: head } },
      ),
    );
  await assert.rejects(
    () => verifyOwnedSources(manifest, { root, fetchImpl, maintainedSources }),
    /default branch expected main, received renamed-default/,
  );
});

test("rejects review evidence that does not contain the checkpoint", async () => {
  const { root, manifest, maintainedSources } = fixture();
  writeFileSync(join(root, manifest.sources[0].reviewRecord), "No checkpoint here.\n");
  await assert.rejects(
    () => verifyOwnedSources(manifest, { root, fetchImpl: fetch, maintainedSources }),
    /does not contain reviewedThrough/,
  );
});

test("rejects human-readable source rows that drift from the manifest", async () => {
  const { root, manifest, maintainedSources } = fixture();
  writeFileSync(
    join(root, "lab/external/sources.lock.md"),
    `| Scient source | inventory ${"e".repeat(40)} |\n| Scient source | review ${"e".repeat(40)} |\n`,
  );
  await assert.rejects(
    () => verifyOwnedSources(manifest, { root, fetchImpl: fetch, maintainedSources }),
    /not aligned across sources.lock.md/,
  );
});

test("rejects stale non-head checkpoint fields in the source lock", () => {
  const { root, manifest, maintainedSources } = fixture();
  writeFileSync(
    join(root, "lab/external/sources.lock.md"),
    `| Scient source | inventory ${head} ${base} adapter-maintained |\n| Scient source | review ${head} ${"d".repeat(40)} 2026-07-18 ${base} adapter-maintained |\n`,
  );
  assert.throws(
    () => validateOwnedSourcesManifest(manifest, root, maintainedSources),
    /reviewedThrough is not aligned/,
  );
});

test("rejects omission of any explicitly maintained repository", () => {
  const { root, manifest, maintainedSources } = fixture();
  maintainedSources.set("scientfactory/second-source", "dev");
  assert.throws(
    () => validateOwnedSourcesManifest(manifest, root, maintainedSources),
    /maintained repositories omitted.*scientfactory\/second-source/,
  );
});
