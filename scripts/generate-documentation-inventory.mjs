#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const REPOSITORY_NAMES = ["Scient", "scient-desktop", "website"];

function runGit(repositoryRoot, args) {
  return execFileSync("git", ["-C", repositoryRoot, ...args], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  }).trimEnd();
}

function rootRole(path) {
  if (path === "AGENTS.md") return ["agent-protocol", "governance", "retain"];
  if (path === "CLAUDE.md") return ["tool-compatibility-router", "governance", "retain"];
  if (path === "CONTRIBUTING.md") return ["contribution", "governance", "retain"];
  if (path === "README.md") return ["orientation", "governance", "retain"];
  if (path === "UPSTREAM.md") return ["upstream", "upstream", "retain"];
  if (path.endsWith("SKILL.md")) return ["project-skill", "workflow", "retain"];
  return null;
}

export function classifyPath(repository, path) {
  if (repository === "scient-desktop" && path.startsWith(".repos/")) {
    return {
      documentKind: "vendored-source-documentation",
      logicalRole: "donor-reference",
      disposition: "retain-structurally-excluded",
      sourceBoundary: "vendored-read-only",
    };
  }

  const root = rootRole(path);
  if (root) {
    return {
      documentKind: root[0],
      logicalRole: root[1],
      disposition: root[2],
      sourceBoundary: "repository-owned-or-adapted",
    };
  }

  if (path.endsWith("/SKILL.md")) {
    return {
      documentKind: "project-skill",
      logicalRole: "workflow",
      disposition: "retain",
      sourceBoundary: "repository-owned-or-adapted",
    };
  }

  if (path.endsWith("THIRD_PARTY_NOTICES.md")) {
    return {
      documentKind: "third-party-notice",
      logicalRole: "development-reference",
      disposition: "retain-beside-source",
      sourceBoundary: "repository-owned-or-adapted",
    };
  }

  if (repository === "Scient") {
    if (path === "docs/documentation-policy.md") {
      return {
        documentKind: "documentation-policy",
        logicalRole: "governance",
        disposition: "retain",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path === "docs/onboarding.md") {
      return {
        documentKind: "collaborator-onboarding",
        logicalRole: "development",
        disposition: "retain",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    const routes = [
      ["docs/product/", "product"],
      ["docs/architecture/", "architecture"],
      ["docs/planning/", "planning"],
      ["docs/research/", "research"],
      ["docs/quality/", "quality"],
      ["docs/development/", "development"],
      ["docs/operations/", "operations"],
      ["docs/design/", "design"],
      ["lab/external/", "research"],
      ["lab/notes/", "records"],
      ["skills/", "workflow"],
    ];
    const route = routes.find(([prefix]) => path.startsWith(prefix));
    if (route) {
      return {
        documentKind: path.endsWith("/README.md") ? "area-index" : "durable-documentation",
        logicalRole: route[1],
        disposition: route[1] === "records" ? "retain-record" : "retain",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
  }

  if (repository === "scient-desktop") {
    if (path.startsWith("docs/architecture/")) {
      return {
        documentKind: "architecture-documentation",
        logicalRole: "architecture",
        disposition: "retain",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith(".agents/skills/")) {
      return {
        documentKind: "project-skill-support",
        logicalRole: "workflow",
        disposition: "retain-beside-skill",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith(".macroscope/")) {
      return {
        documentKind: "development-tooling-reference",
        logicalRole: "development",
        disposition: "retain-beside-tooling",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path === "apps/marketing/tweets.md") {
      return {
        documentKind: "product-communication-record",
        logicalRole: "records",
        disposition: "retain-record",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.endsWith("/UPSTREAM.md")) {
      return {
        documentKind: "nested-upstream-record",
        logicalRole: "upstream",
        disposition: "retain-beside-adaptation",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith("docs/user/")) {
      return {
        documentKind: "public-help-source",
        logicalRole: "help",
        disposition: "retain-and-qualify-for-publication",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith("docs/operations/")) {
      return {
        documentKind: "durable-documentation",
        logicalRole: "operations",
        disposition: "retain",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith("docs/reports/")) {
      return {
        documentKind: "dated-record",
        logicalRole: "records",
        disposition: "retain-record",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith("docs/internals/")) {
      return {
        documentKind: "mixed-maintainer-documentation",
        logicalRole: "capability-architecture-development-upstream-or-records",
        disposition: "review-logically-before-any-move",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith("docs/fixtures/")) {
      return {
        documentKind: "test-fixture",
        logicalRole: "fixture",
        disposition: "retain-structurally-excluded",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
  }

  if (repository === "website") {
    if (path.startsWith("docs/architecture/")) {
      return {
        documentKind: "architecture-documentation",
        logicalRole: "architecture",
        disposition: "retain",
        sourceBoundary: "repository-owned-or-adapted",
      };
    }
    if (path.startsWith("src/content/docs/")) {
      return {
        documentKind: "website-docs-view",
        logicalRole: "help-rendering",
        disposition: "generated-or-source-linked-only",
        sourceBoundary: "website-owned-view",
      };
    }
  }

  if (path.endsWith("README.md")) {
    return {
      documentKind: "package-or-source-readme",
      logicalRole: "development-reference",
      disposition: "retain-beside-source",
      sourceBoundary: "repository-owned-or-adapted",
    };
  }

  if (path.startsWith(".github/")) {
    return {
      documentKind: "github-workflow-documentation",
      logicalRole: "development",
      disposition: "retain-beside-workflow",
      sourceBoundary: "repository-owned-or-adapted",
    };
  }

  return {
    documentKind: "other-markdown",
    logicalRole: "review",
    disposition: "review-in-owning-context",
    sourceBoundary: "repository-owned-or-adapted",
  };
}

function firstHeading(repositoryRoot, path) {
  const content = readFileSync(resolve(repositoryRoot, path), "utf8");
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? null;
}

export function collectRepository(name, inputPath) {
  if (!REPOSITORY_NAMES.includes(name)) throw new Error(`Unsupported repository name: ${name}`);
  const repositoryRoot = realpathSync(inputPath);
  const gitRoot = realpathSync(runGit(repositoryRoot, ["rev-parse", "--show-toplevel"]));
  if (gitRoot !== repositoryRoot) {
    throw new Error(`${name} path must be its Git root: ${repositoryRoot}`);
  }

  const status = runGit(repositoryRoot, ["status", "--porcelain=v1", "--untracked-files=all"]);
  if (status !== "") {
    throw new Error(`${name} worktree must be clean before inventory generation:\n${status}`);
  }

  const rawEntries = execFileSync(
    "git",
    ["-C", repositoryRoot, "ls-files", "-s", "-z", "--", "*.md"],
    { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
  );
  const entries = rawEntries
    .split("\0")
    .filter(Boolean)
    .map((record) => {
      const match = record.match(/^(\d+) ([0-9a-f]+) (\d+)\t(.+)$/);
      if (!match) throw new Error(`Could not parse git ls-files record: ${record}`);
      const [, mode, blob, stage, path] = match;
      return {
        path,
        title: firstHeading(repositoryRoot, path),
        mode,
        blob,
        stage: Number(stage),
        ...classifyPath(name, path),
      };
    })
    .sort((left, right) => left.path.localeCompare(right.path));

  const byLogicalRole = Object.fromEntries(
    [...new Set(entries.map((entry) => entry.logicalRole))]
      .sort()
      .map((role) => [role, entries.filter((entry) => entry.logicalRole === role).length]),
  );

  return {
    name,
    revision: runGit(repositoryRoot, ["rev-parse", "HEAD"]),
    branch: runGit(repositoryRoot, ["branch", "--show-current"]),
    remote: runGit(repositoryRoot, ["remote", "get-url", "origin"]),
    worktreeClean: true,
    markdownCount: entries.length,
    byLogicalRole,
    entries,
  };
}

function parseArgs(argv) {
  const values = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!key?.startsWith("--") || value === undefined) {
      throw new Error("Arguments must be --name value pairs");
    }
    values.set(key.slice(2), value);
  }
  for (const required of ["scient", "desktop", "website", "output", "generated-at"]) {
    if (!values.has(required)) throw new Error(`Missing --${required}`);
  }
  return values;
}

export function generateInventory(argv) {
  const args = parseArgs(argv);
  const repositories = [
    collectRepository("Scient", args.get("scient")),
    collectRepository("scient-desktop", args.get("desktop")),
    collectRepository("website", args.get("website")),
  ];
  const output = resolve(args.get("output"));
  const totalMarkdown = repositories.reduce((sum, repository) => sum + repository.markdownCount, 0);
  const inventory = {
    schemaVersion: 1,
    generatedAt: args.get("generated-at"),
    authority:
      "Generated path inventory; dispositions are routing defaults, not migration authorization",
    includedRepositories: REPOSITORY_NAMES,
    excludedRepositories: [
      {
        name: "scient-agent",
        reason:
          "Explicitly excluded until native Scient-agent implementation begins; inherited OpenCode Markdown was not inspected",
      },
    ],
    totalMarkdown,
    repositories,
  };
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, `${JSON.stringify(inventory, null, 2)}\n`, "utf8");
  return { output, totalMarkdown, repositories };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const result = generateInventory(process.argv.slice(2));
    const summary = result.repositories
      .map((repository) => `${repository.name}=${repository.markdownCount}`)
      .join(", ");
    process.stdout.write(
      `Wrote ${result.output} (${result.totalMarkdown} Markdown files; ${summary})\n`,
    );
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
