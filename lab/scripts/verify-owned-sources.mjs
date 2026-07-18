#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SHA = /^[0-9a-f]{40}$/;
const REPOSITORY = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/;
const MAINTAINED_SOURCES = new Map([
  ["scientfactory/scient-desktop", "main"],
  ["scientfactory/scient-agent", "dev"],
]);
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const defaultManifestPath = resolve(repoRoot, "lab/external/owned-sources.json");

function fail(message) {
  throw new Error(`Owned source evidence invalid: ${message}`);
}

function requiredString(record, field, label) {
  const value = record?.[field];
  if (typeof value !== "string" || value.length === 0) fail(`${label}.${field} must be a non-empty string`);
  return value;
}

export function validateOwnedSourcesManifest(
  manifest,
  root = repoRoot,
  maintainedSources = MAINTAINED_SOURCES,
) {
  if (manifest?.schema !== "scient.owned-sources/v1") fail("schema must be scient.owned-sources/v1");
  if (!Array.isArray(manifest.sources) || manifest.sources.length === 0) fail("sources must be a non-empty array");

  const repositories = new Set();
  const sourceLockPath = resolve(root, "lab/external/sources.lock.md");
  if (!existsSync(sourceLockPath)) fail("lab/external/sources.lock.md is missing");
  const sourceLockLines = readFileSync(sourceLockPath, "utf8").split("\n");
  for (const [index, source] of manifest.sources.entries()) {
    const label = `sources[${index}]`;
    const repository = requiredString(source, "ownedRepository", label);
    if (!REPOSITORY.test(repository)) fail(`${label}.ownedRepository is not an owner/repository pair`);
    const normalizedRepository = repository.toLowerCase();
    if (repositories.has(normalizedRepository)) fail(`duplicate owned repository: ${repository}`);
    const expectedDefaultBranch = maintainedSources.get(normalizedRepository);
    if (!expectedDefaultBranch) fail(`unexpected maintained repository: ${repository}`);
    repositories.add(normalizedRepository);

    for (const field of ["testedHead", "reviewedThrough", "integrationBase"]) {
      if (!SHA.test(requiredString(source, field, label))) fail(`${label}.${field} must be a full commit SHA`);
    }
    for (const field of [
      "ownedDefaultBranch",
      "sourceLockLabel",
      "officialRepository",
      "officialDefaultBranch",
      "reviewedAt",
      "updateMode",
      "reviewRecord",
    ]) requiredString(source, field, label);
    if (source.ownedDefaultBranch !== expectedDefaultBranch) {
      fail(
        `${label}.ownedDefaultBranch expected ${expectedDefaultBranch}, received ${source.ownedDefaultBranch}`,
      );
    }
    if (!REPOSITORY.test(source.officialRepository)) fail(`${label}.officialRepository is not an owner/repository pair`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(source.reviewedAt)) fail(`${label}.reviewedAt must use YYYY-MM-DD`);

    const reviewPath = resolve(root, source.reviewRecord);
    if (!reviewPath.startsWith(`${resolve(root)}/`) || !existsSync(reviewPath)) {
      fail(`${label}.reviewRecord is missing or outside the repository: ${source.reviewRecord}`);
    }
    const review = readFileSync(reviewPath, "utf8");
    if (!review.includes(source.reviewedThrough)) {
      fail(`${label}.reviewRecord does not contain reviewedThrough ${source.reviewedThrough}`);
    }
    const lockRows = sourceLockLines.filter((line) => line.startsWith(`| ${source.sourceLockLabel}`));
    if (lockRows.length < 2 || lockRows.some((line) => !line.includes(source.testedHead))) {
      fail(`${label}.testedHead is not aligned across sources.lock.md rows for ${source.sourceLockLabel}`);
    }
    for (const field of ["reviewedThrough", "reviewedAt", "integrationBase", "updateMode"]) {
      if (!lockRows.some((line) => line.includes(source[field]))) {
        fail(`${label}.${field} is not aligned across sources.lock.md rows for ${source.sourceLockLabel}`);
      }
    }
  }
  const omittedRepositories = [...maintainedSources.keys()].filter(
    (repository) => !repositories.has(repository),
  );
  if (omittedRepositories.length > 0) {
    fail(`maintained repositories omitted from manifest: ${omittedRepositories.join(", ")}`);
  }
  return manifest.sources;
}

// The maintained sources are public. Keep cross-repository requests
// unauthenticated because the parent repository's scoped Actions token is not
// granted to those repositories and can turn public requests into 404s.
async function fetchJson(url, fetchImpl) {
  const response = await fetchImpl(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!response.ok) fail(`request failed (${response.status}) for ${url}`);
  return response.json();
}

export async function verifyOwnedSources(manifest, options = {}) {
  const root = options.root ?? repoRoot;
  const fetchImpl = options.fetchImpl ?? fetch;
  const sources = validateOwnedSourcesManifest(manifest, root, options.maintainedSources);

  for (const source of sources) {
    const rawUrl = `https://raw.githubusercontent.com/${source.ownedRepository}/${source.testedHead}/upstream-state.json`;
    const state = await fetchJson(rawUrl, fetchImpl);
    const expectedState = {
      ownedRepository: source.ownedRepository,
      ownedDefaultBranch: source.ownedDefaultBranch,
      officialRepository: source.officialRepository,
      officialDefaultBranch: source.officialDefaultBranch,
      updateMode: source.updateMode,
      reviewedThrough: source.reviewedThrough,
      reviewedAt: source.reviewedAt,
      integrationBase: source.integrationBase,
      reviewRecord: `ScientFactory/Scient:${source.reviewRecord}`,
    };
    for (const [field, expected] of Object.entries(expectedState)) {
      if (state?.[field] !== expected) {
        fail(`${source.ownedRepository} upstream-state.json ${field} expected ${expected}, received ${state?.[field]}`);
      }
    }

    const repositoryUrl = `https://api.github.com/repos/${source.ownedRepository}`;
    const repository = await fetchJson(repositoryUrl, fetchImpl);
    if (repository?.default_branch !== source.ownedDefaultBranch) {
      fail(
        `${source.ownedRepository} default branch expected ${source.ownedDefaultBranch}, received ${repository?.default_branch}`,
      );
    }
    const refUrl = `${repositoryUrl}/git/ref/heads/${encodeURIComponent(source.ownedDefaultBranch)}`;
    const ref = await fetchJson(refUrl, fetchImpl);
    if (ref?.object?.sha !== source.testedHead) {
      fail(`${source.ownedRepository} ${source.ownedDefaultBranch} expected ${source.testedHead}, received ${ref?.object?.sha}`);
    }
  }
  return sources.length;
}

async function main() {
  const manifest = JSON.parse(readFileSync(defaultManifestPath, "utf8"));
  const count = await verifyOwnedSources(manifest);
  console.log(`Owned source evidence passed (${count} repositories).`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
