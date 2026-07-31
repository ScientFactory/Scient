#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { appendFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const SHA = /^[0-9a-f]{40}$/;
const SNAPSHOT_PATHS = new Set([
  "lab/external/owned-sources.json",
  "lab/external/sources.lock.md",
]);
const EVIDENCE_PATHS = new Set([
  ...SNAPSHOT_PATHS,
  "lab/scripts/owned-source-evidence-scope.mjs",
  "lab/scripts/owned-source-evidence-scope.test.mjs",
  "lab/scripts/verify-owned-sources.mjs",
  "lab/scripts/verify-owned-sources.test.mjs",
  ".github/workflows/gate-1-5-evidence.yml",
]);
const EVIDENCE_PREFIXES = ["lab/external/upstream-reviews/"];

function fail(message) {
  throw new Error(`Owned source evidence scope invalid: ${message}`);
}

export function classifyOwnedSourceEvidencePaths(paths) {
  const evidenceChanged = paths.some(
    (path) => EVIDENCE_PATHS.has(path) || EVIDENCE_PREFIXES.some((prefix) => path.startsWith(prefix)),
  );
  const snapshotChanged = paths.some((path) => SNAPSHOT_PATHS.has(path));
  return { evidenceChanged, snapshotChanged };
}

export function ownedSourceEvidenceDiffRange(eventName, baseSha, headSha) {
  if (!SHA.test(baseSha ?? "")) fail(`base SHA is invalid: ${baseSha}`);
  if (!SHA.test(headSha ?? "")) fail(`head SHA is invalid: ${headSha}`);
  if (eventName === "pull_request") return `${baseSha}...${headSha}`;
  if (eventName === "push") return `${baseSha}..${headSha}`;
  fail(`unsupported event: ${eventName}`);
}

export function detectOwnedSourceEvidenceScope({
  eventName,
  baseSha,
  headSha,
  root = repoRoot,
}) {
  const range = ownedSourceEvidenceDiffRange(eventName, baseSha, headSha);
  const output = execFileSync(
    "git",
    ["diff", "--no-renames", "--name-only", "-z", range, "--"],
    { cwd: root, encoding: "utf8", maxBuffer: 1024 * 1024 },
  );
  const paths = output.split("\0").filter(Boolean);
  return { ...classifyOwnedSourceEvidencePaths(paths), paths, range };
}

function main() {
  const result = detectOwnedSourceEvidenceScope({
    eventName: process.env.GITHUB_EVENT_NAME,
    baseSha: process.env.BASE_SHA,
    headSha: process.env.HEAD_SHA,
  });
  if (!process.env.GITHUB_OUTPUT) fail("GITHUB_OUTPUT is missing");
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `evidence_changed=${result.evidenceChanged}\nsnapshot_changed=${result.snapshotChanged}\n`,
  );
  console.log(
    `Owned source evidence scope: evidence=${result.evidenceChanged}, snapshot=${result.snapshotChanged}, range=${result.range}.`,
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
