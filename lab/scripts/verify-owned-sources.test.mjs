import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  collectOwnedSourceFreshness,
  formatOwnedSourceFreshnessReport,
  requireCurrentOwnedSourceHeads,
  requireKnownOwnedSourceFreshness,
  validateOwnedSourcesManifest,
  verifyOwnedSources,
  verifyPinnedOwnedSourceEvidence,
} from "./verify-owned-sources.mjs";

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

function remoteFetch(source, options = {}) {
  return async (url, requestOptions) => {
    options.requests?.push({
      url,
      authorization: new Headers(requestOptions?.headers).get("Authorization"),
    });
    if (options.failRef && url.includes("/git/ref/heads/")) {
      return new Response("unavailable", { status: 503 });
    }
    return new Response(
      JSON.stringify(
        url.includes("raw.githubusercontent.com")
          ? options.state ?? remoteState(source)
          : url.endsWith(source.ownedRepository)
            ? { default_branch: options.defaultBranch ?? source.ownedDefaultBranch }
            : { object: { sha: options.observedHead ?? head } },
      ),
    );
  };
}

test("local consistency validation does not require a network request", () => {
  const { root, manifest, maintainedSources } = fixture();
  assert.equal(validateOwnedSourcesManifest(manifest, root, maintainedSources).length, 1);
});

test("accepts matching pinned state and current default-branch head", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const requests = [];
  assert.equal(
    await verifyOwnedSources(manifest, {
      root,
      fetchImpl: remoteFetch(source, { requests }),
      maintainedSources,
    }),
    1,
  );
  assert.equal(requests[0].authorization, null);
  assert.equal(requests[1].authorization, null);
  assert.equal(requests[2].authorization, null);
});

test("pinned evidence remains valid when the live default branch advances", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const requests = [];
  assert.equal(
    (
      await verifyPinnedOwnedSourceEvidence(manifest, {
        root,
        fetchImpl: remoteFetch(source, { observedHead: "d".repeat(40), requests }),
        maintainedSources,
      })
    ).length,
    1,
  );
  assert.equal(requests.length, 2);
  assert.equal(requests.some(({ url }) => url.includes("/git/ref/heads/")), false);
});

test("strict verification rejects a default branch beyond the recorded tested head", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  await assert.rejects(
    () =>
      verifyOwnedSources(manifest, {
        root,
        fetchImpl: remoteFetch(source, { observedHead: "d".repeat(40) }),
        maintainedSources,
      }),
    /expected a{40}, received d{40}/,
  );
});

test("rejects pinned upstream state that drifts from the parent evidence", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  await assert.rejects(
    () =>
      verifyPinnedOwnedSourceEvidence(manifest, {
        root,
        fetchImpl: remoteFetch(source, {
          state: { ...remoteState(source), reviewedThrough: "d".repeat(40) },
        }),
        maintainedSources,
      }),
    /upstream-state\.json reviewedThrough expected b{40}, received d{40}/,
  );
});

test("collects current and stale freshness without treating staleness as unknown", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const current = await collectOwnedSourceFreshness(manifest, {
    root,
    fetchImpl: remoteFetch(source),
    maintainedSources,
  });
  assert.deepEqual(current.map(({ status, observedHead }) => ({ status, observedHead })), [
    { status: "current", observedHead: head },
  ]);

  const staleHead = "d".repeat(40);
  const stale = await collectOwnedSourceFreshness(manifest, {
    root,
    fetchImpl: remoteFetch(source, { observedHead: staleHead }),
    maintainedSources,
  });
  assert.deepEqual(stale.map(({ status, observedHead }) => ({ status, observedHead })), [
    { status: "stale", observedHead: staleHead },
  ]);
  assert.doesNotThrow(() => requireKnownOwnedSourceFreshness(stale));
  assert.throws(() => requireCurrentOwnedSourceHeads(stale), /expected a{40}, received d{40}/);
});

test("reports live lookup failures as unknown and fails closed when knowledge is required", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const results = await collectOwnedSourceFreshness(manifest, {
    root,
    fetchImpl: remoteFetch(source, { failRef: true }),
    maintainedSources,
  });
  assert.equal(results[0].status, "unknown");
  assert.match(results[0].detail, /request failed \(503\)/);
  assert.throws(() => requireKnownOwnedSourceFreshness(results), /live freshness is unknown/);
  assert.throws(() => requireCurrentOwnedSourceHeads(results), /live freshness is unknown/);
});

test("formats current, stale, and unknown results for a workflow summary", () => {
  const report = formatOwnedSourceFreshnessReport([
    {
      repository: "ScientFactory/current",
      branch: "main",
      testedHead: head,
      observedHead: head,
      status: "current",
    },
    {
      repository: "ScientFactory/stale",
      branch: "dev",
      testedHead: head,
      observedHead: "d".repeat(40),
      status: "stale",
    },
    {
      repository: "ScientFactory/unknown",
      branch: "main",
      testedHead: head,
      observedHead: undefined,
      status: "unknown",
      detail: "request failed (503)",
    },
  ]);
  assert.match(report, /ScientFactory\/current.*Current/);
  assert.match(report, /ScientFactory\/stale.*Stale/);
  assert.match(report, /ScientFactory\/unknown.*Unknown/);
  assert.match(report, /stale tested head is informational/i);
});

test("rejects a configured branch that is no longer the repository default", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  await assert.rejects(
    () =>
      verifyPinnedOwnedSourceEvidence(manifest, {
        root,
        fetchImpl: remoteFetch(source, { defaultBranch: "renamed-default" }),
        maintainedSources,
      }),
    /default branch expected main, received renamed-default/,
  );

  const results = await collectOwnedSourceFreshness(manifest, {
    root,
    fetchImpl: remoteFetch(source, { defaultBranch: "renamed-default" }),
    maintainedSources,
  });
  assert.equal(results[0].status, "unknown");
  assert.match(results[0].detail, /default branch expected main, received renamed-default/);
});

test("rejects an invalid live head as unknown rather than current", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  const results = await collectOwnedSourceFreshness(manifest, {
    root,
    fetchImpl: remoteFetch(source, { observedHead: "not-a-sha" }),
    maintainedSources,
  });
  assert.equal(results[0].status, "unknown");
  assert.match(results[0].detail, /invalid head received/);
});

test("strict verification fails when current head lookup is unavailable", async () => {
  const { root, source, manifest, maintainedSources } = fixture();
  await assert.rejects(
    () =>
      verifyOwnedSources(manifest, {
        root,
        fetchImpl: remoteFetch(source, { failRef: true }),
        maintainedSources,
      }),
    /live freshness is unknown/,
  );
});

test("rejects review evidence that does not contain the checkpoint", () => {
  const { root, manifest, maintainedSources } = fixture();
  writeFileSync(join(root, manifest.sources[0].reviewRecord), "No checkpoint here.\n");
  assert.throws(
    () => validateOwnedSourcesManifest(manifest, root, maintainedSources),
    /does not contain reviewedThrough/,
  );
});

test("rejects human-readable source rows that drift from the manifest", () => {
  const { root, manifest, maintainedSources } = fixture();
  writeFileSync(
    join(root, "lab/external/sources.lock.md"),
    `| Scient source | inventory ${"e".repeat(40)} |\n| Scient source | review ${"e".repeat(40)} |\n`,
  );
  assert.throws(
    () => validateOwnedSourcesManifest(manifest, root, maintainedSources),
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
