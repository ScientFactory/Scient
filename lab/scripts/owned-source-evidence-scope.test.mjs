import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";

import {
  classifyOwnedSourceEvidencePaths,
  detectOwnedSourceEvidenceScope,
  ownedSourceEvidenceDiffRange,
} from "./owned-source-evidence-scope.mjs";

function git(root, ...args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
}

function write(root, path, contents) {
  mkdirSync(dirname(join(root, path)), { recursive: true });
  writeFileSync(join(root, path), contents);
}

function commit(root, message) {
  git(root, "add", "-A");
  git(root, "commit", "-m", message);
  return git(root, "rev-parse", "HEAD");
}

function repository() {
  const root = mkdtempSync(join(tmpdir(), "scient-evidence-scope-"));
  git(root, "init", "--initial-branch=main");
  git(root, "config", "user.name", "Scient Evidence Test");
  git(root, "config", "user.email", "scient-evidence@example.invalid");
  write(root, "lab/external/owned-sources.json", "{}\n");
  write(root, "lab/scripts/verify-owned-sources.mjs", "export {};\n");
  write(root, "lab/external/upstream-reviews/existing.md", "review\n");
  write(root, "docs/ordinary.md", "ordinary\n");
  const initial = commit(root, "initial");
  return { root, initial };
}

function pushScope(root, before, after) {
  return detectOwnedSourceEvidenceScope({
    eventName: "push",
    baseSha: before,
    headSha: after,
    root,
  });
}

test("pull request scope excludes snapshot changes made only on the advanced base", (t) => {
  const { root, initial } = repository();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  git(root, "checkout", "-q", "-b", "feature", initial);
  write(root, "docs/feature.md", "feature only\n");
  const featureHead = commit(root, "feature");

  git(root, "checkout", "-q", "main");
  write(root, "lab/external/owned-sources.json", '{"base":"advanced"}\n');
  const baseHead = commit(root, "advance base snapshot");

  const result = detectOwnedSourceEvidenceScope({
    eventName: "pull_request",
    baseSha: baseHead,
    headSha: featureHead,
    root,
  });
  assert.equal(result.range, `${baseHead}...${featureHead}`);
  assert.deepEqual(
    { evidenceChanged: result.evidenceChanged, snapshotChanged: result.snapshotChanged },
    { evidenceChanged: false, snapshotChanged: false },
  );
  assert.deepEqual(result.paths, ["docs/feature.md"]);

  const push = pushScope(root, initial, baseHead);
  assert.deepEqual(
    { evidenceChanged: push.evidenceChanged, snapshotChanged: push.snapshotChanged },
    { evidenceChanged: true, snapshotChanged: true },
  );
});

test("push scope classifies ordinary and evidence add, modify, delete, and rename operations", (t) => {
  const { root } = repository();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const cases = [];

  let before = git(root, "rev-parse", "HEAD");
  write(root, "docs/new.md", "new\n");
  let after = commit(root, "ordinary add");
  cases.push(["ordinary add", pushScope(root, before, after), false, false]);

  before = after;
  write(root, "docs/new.md", "modified\n");
  after = commit(root, "ordinary modify");
  cases.push(["ordinary modify", pushScope(root, before, after), false, false]);

  before = after;
  renameSync(join(root, "docs/new.md"), join(root, "docs/renamed.md"));
  after = commit(root, "ordinary rename");
  cases.push(["ordinary rename", pushScope(root, before, after), false, false]);

  before = after;
  rmSync(join(root, "docs/renamed.md"));
  after = commit(root, "ordinary delete");
  cases.push(["ordinary delete", pushScope(root, before, after), false, false]);

  before = after;
  write(root, "lab/external/upstream-reviews/new.md", "new review\n");
  after = commit(root, "evidence add");
  cases.push(["evidence add", pushScope(root, before, after), true, false]);

  before = after;
  write(root, "lab/scripts/verify-owned-sources.mjs", "export const changed = true;\n");
  after = commit(root, "evidence modify");
  cases.push(["evidence modify", pushScope(root, before, after), true, false]);

  before = after;
  rmSync(join(root, "lab/external/upstream-reviews/new.md"));
  after = commit(root, "evidence delete");
  cases.push(["evidence delete", pushScope(root, before, after), true, false]);

  before = after;
  renameSync(
    join(root, "lab/scripts/verify-owned-sources.mjs"),
    join(root, "lab/scripts/retired-verifier.mjs"),
  );
  after = commit(root, "evidence rename");
  cases.push(["evidence rename", pushScope(root, before, after), true, false]);

  for (const [label, result, evidenceChanged, snapshotChanged] of cases) {
    assert.deepEqual(
      { evidenceChanged: result.evidenceChanged, snapshotChanged: result.snapshotChanged },
      { evidenceChanged, snapshotChanged },
      label,
    );
  }
});

test("push scope classifies snapshot add, modify, delete, and rename as strict", (t) => {
  const { root } = repository();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const cases = [];

  let before = git(root, "rev-parse", "HEAD");
  write(root, "lab/external/sources.lock.md", "lock\n");
  let after = commit(root, "snapshot add");
  cases.push(["snapshot add", pushScope(root, before, after)]);

  before = after;
  write(root, "lab/external/owned-sources.json", '{"modified":true}\n');
  after = commit(root, "snapshot modify");
  cases.push(["snapshot modify", pushScope(root, before, after)]);

  before = after;
  rmSync(join(root, "lab/external/sources.lock.md"));
  after = commit(root, "snapshot delete");
  cases.push(["snapshot delete", pushScope(root, before, after)]);

  before = after;
  renameSync(
    join(root, "lab/external/owned-sources.json"),
    join(root, "lab/external/retired-owned-sources.json"),
  );
  after = commit(root, "snapshot rename");
  cases.push(["snapshot rename", pushScope(root, before, after)]);

  for (const [label, result] of cases) {
    assert.deepEqual(
      { evidenceChanged: result.evidenceChanged, snapshotChanged: result.snapshotChanged },
      { evidenceChanged: true, snapshotChanged: true },
      label,
    );
  }
});

test("verifier, scope-helper, and workflow paths route to pinned validation only", () => {
  assert.deepEqual(
    classifyOwnedSourceEvidencePaths([
      "lab/scripts/verify-owned-sources.mjs",
      "lab/scripts/verify-owned-sources.test.mjs",
      "lab/scripts/owned-source-evidence-scope.mjs",
      "lab/scripts/owned-source-evidence-scope.test.mjs",
      ".github/workflows/gate-1-5-evidence.yml",
    ]),
    { evidenceChanged: true, snapshotChanged: false },
  );
  assert.deepEqual(classifyOwnedSourceEvidencePaths(["docs/operations/upstream-intake.md"]), {
    evidenceChanged: false,
    snapshotChanged: false,
  });
});

test("diff ranges use triple-dot for pull requests and two-dot for pushes", () => {
  const base = "a".repeat(40);
  const head = "b".repeat(40);
  assert.equal(ownedSourceEvidenceDiffRange("pull_request", base, head), `${base}...${head}`);
  assert.equal(ownedSourceEvidenceDiffRange("push", base, head), `${base}..${head}`);
  assert.throws(() => ownedSourceEvidenceDiffRange("schedule", base, head), /unsupported event/);
  assert.throws(() => ownedSourceEvidenceDiffRange("push", "bad", head), /base SHA is invalid/);
});
