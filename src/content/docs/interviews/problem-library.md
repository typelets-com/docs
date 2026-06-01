---
title: Problem library
description: Author reusable interview problems and apply them to workspaces.
---

A problem is a reusable interview question stored in your library. Author it
once, then apply it to any interview workspace.

## What a problem contains

- **Prompt** - the question shown to the candidate (Markdown).
- **Difficulty** - easy / medium / hard.
- **Category** and **tags** - for organizing and filtering.
- **Rubric** - free-text scoring guidance, interviewer-only.
- **Criteria** - named scoring dimensions (up to 20), used by the
  [scoring](/interviews/scoring/) panel.
- **Test cases** - either stdin/expected-output pairs or framework commands.
  Each can be marked visible (candidate sees it) or hidden.
- **Starter files** - laid into the candidate's workspace when applied.
- **Test files** - laid in alongside the starter files.
- **Solution files** - a reference solution, interviewer-only, never placed on
  the candidate's tree.

:::note
"Test cases" (stdin/expected or a framework command, run by the test runner) are
different from "test files" (actual files written into the workspace). A problem
can use both.
:::

## Visibility

Problems are scoped to your organization by default - visible to org members,
editable by the author or an org admin. System-provided problems are read-only.

## Applying a problem

Applying a problem to a workspace:

1. **Replaces the workspace file tree** with the problem's starter + test files.
   This is destructive - it wipes existing files first, so apply before the
   candidate starts working, not mid-session.
2. Copies the prompt, rubric, criteria, and test cases onto the workspace.

The reference solution is attached for the interviewer but is never written to
the candidate's files.

## Authoring

Create and edit problems from the library UI, or via the [MCP server](/automation/mcp/)
(`save_problem_to_library`, `edit_problem`) and the REST API. You can also import
a problem from a packaged manifest.
