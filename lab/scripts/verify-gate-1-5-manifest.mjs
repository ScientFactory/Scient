#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const manifestPath = resolve(
  repoRoot,
  "lab/notes/gate-1-5-evidence-manifest-2026-07-11.json",
);
const args = process.argv.slice(2);

function fail(message) {
  throw new Error(`Gate 1.5 evidence manifest invalid: ${message}`);
}

function option(name) {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function verifyArtifact(artifact, local) {
  if (!artifact || typeof artifact.path !== "string") fail("artifact path is missing");
  if (!/^[a-f0-9]{64}$/.test(artifact.sha256 ?? "")) {
    fail(`${artifact.path} has an invalid SHA-256 digest`);
  }
  const path = isAbsolute(artifact.path) ? artifact.path : resolve(repoRoot, artifact.path);
  if (!existsSync(path)) fail(`${local ? "local" : "committed"} artifact is missing: ${artifact.path}`);
  const size = statSync(path).size;
  if (size !== artifact.size) fail(`${artifact.path} size expected ${artifact.size}, received ${size}`);
  const digest = sha256(path);
  if (digest !== artifact.sha256) {
    fail(`${artifact.path} SHA-256 expected ${artifact.sha256}, received ${digest}`);
  }
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
if (manifest.schema !== "litrev.gate-evidence-manifest/v1" || manifest.gate !== "1.5") {
  fail("schema or gate identifier is incorrect");
}

for (const [label, commit] of Object.entries(manifest.sourceHeads ?? {})) {
  if (!/^[a-f0-9]{40}$/.test(String(commit))) fail(`${label} source head is not a full commit`);
}
for (const artifact of manifest.committedArtifacts ?? []) verifyArtifact(artifact, false);

const evidencePath = resolve(
  repoRoot,
  "lab/notes/gate-1-5-smoke-evidence-2026-07-11.json",
);
const evidence = JSON.parse(readFileSync(evidencePath, "utf8"));
if (
  evidence.schema !== "litrev.gate-smoke-evidence/v1" ||
  evidence.transcripts?.length !== 2 ||
  evidence.runtimeProjection?.stoppedSessions !== 2 ||
  evidence.runtimeProjection?.resolvedApproval?.decision !== "acceptForSession"
) {
  fail("committed smoke extract is incomplete");
}

const expectedSynaraHead = option("--synara-head");
const expectedOpenCodeHead = option("--opencode-head");
if (expectedSynaraHead && expectedSynaraHead !== manifest.sourceHeads.synara) {
  fail(`Synara head expected ${manifest.sourceHeads.synara}, received ${expectedSynaraHead}`);
}
if (expectedOpenCodeHead && expectedOpenCodeHead !== manifest.sourceHeads.opencode) {
  fail(`OpenCode head expected ${manifest.sourceHeads.opencode}, received ${expectedOpenCodeHead}`);
}

if (args.includes("--local-evidence")) {
  for (const artifact of manifest.localArtifacts ?? []) verifyArtifact(artifact, true);
}

console.log(
  `Gate 1.5 evidence manifest passed (${manifest.committedArtifacts.length} committed artifacts${
    args.includes("--local-evidence") ? `, ${manifest.localArtifacts.length} local artifacts` : ""
  }).`,
);
