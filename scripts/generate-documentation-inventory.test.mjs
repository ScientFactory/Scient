import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { classifyPath, collectRepository } from "./generate-documentation-inventory.mjs";

test("classifies desktop Help, records, internals, and vendored Markdown", () => {
  assert.equal(classifyPath("scient-desktop", "docs/user/projects.md").logicalRole, "help");
  assert.equal(classifyPath("scient-desktop", "docs/reports/audit.md").logicalRole, "records");
  assert.equal(
    classifyPath("scient-desktop", "docs/internals/provider.md").disposition,
    "review-logically-before-any-move",
  );
  assert.equal(
    classifyPath("scient-desktop", ".repos/donor/README.md").sourceBoundary,
    "vendored-read-only",
  );
  assert.equal(
    classifyPath("scient-desktop", ".repos/donor/skills/example/SKILL.md").logicalRole,
    "donor-reference",
  );
  assert.equal(
    classifyPath("scient-desktop", "apps/mobile/modules/t3-markdown-text/UPSTREAM.md").logicalRole,
    "upstream",
  );
  assert.equal(
    classifyPath("scient-desktop", "apps/web/THIRD_PARTY_NOTICES.md").logicalRole,
    "development-reference",
  );
  assert.equal(
    classifyPath("website", "docs/architecture/terminal-renderers.md").logicalRole,
    "architecture",
  );
  assert.equal(
    classifyPath("scient-desktop", "docs/architecture/terminal-renderers.md").logicalRole,
    "architecture",
  );
});

test("collects only tracked Markdown from a clean exact Git root", () => {
  const root = mkdtempSync(join(tmpdir(), "scient-doc-inventory-"));
  try {
    execFileSync("git", ["init", "-q", root]);
    execFileSync("git", ["-C", root, "config", "user.email", "test@example.com"]);
    execFileSync("git", ["-C", root, "config", "user.name", "Inventory Test"]);
    execFileSync("git", [
      "-C",
      root,
      "remote",
      "add",
      "origin",
      "https://example.com/ScientFactory/scient-desktop.git",
    ]);
    mkdirSync(join(root, "docs", "user"), { recursive: true });
    writeFileSync(join(root, "README.md"), "# Repository\n", "utf8");
    writeFileSync(join(root, "docs", "user", "projects.md"), "# Projects\n", "utf8");
    writeFileSync(join(root, "ignored.txt"), "not Markdown\n", "utf8");
    execFileSync("git", ["-C", root, "add", "."]);
    execFileSync("git", ["-C", root, "commit", "-qm", "fixture"]);

    const result = collectRepository("scient-desktop", root);
    assert.equal(result.worktreeClean, true);
    assert.equal(result.markdownCount, 2);
    assert.deepEqual(
      result.entries.map((entry) => [entry.path, entry.title]),
      [
        ["docs/user/projects.md", "Projects"],
        ["README.md", "Repository"],
      ],
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
