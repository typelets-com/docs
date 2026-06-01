---
title: Recording & replay
description: Capture an interview's code timeline and replay it later.
---

You can record an interview and replay it afterward to review how the candidate
worked - not just the final code, but how they got there.

## What is recorded

A recording captures the **collaboration timeline**:

- Every edit to the file tree and file contents (as Yjs updates).
- Every **Run** invocation, with its language, entry file, exit code, duration,
  and truncated output.

When a recording starts, it is seeded with the workspace's current files, so
replay shows the starting point and then every change from there.

:::caution
Recordings do **not** include video. The [video call](/collaboration/video/) is
live only; it is not captured in the replay. Recordings are about the code, the
file tree, and runs.
:::

## Replay

Replaying reconstructs the workspace at any point in time - scrub forward and
backward through the session and watch files change, just as they did live. Run
invocations appear on the timeline so you can see when the candidate executed
their code and what happened.

## Controls and access

- Only one recording can be active per workspace at a time.
- Starting, stopping, listing, and replaying recordings is limited to
  **owner / admin / interviewer**. Candidates and viewers never see recordings.
- Deleting a recording requires owner or admin.

## LLM-assisted review

Through the [MCP server](/automation/mcp/), an interviewer can have an assistant
**summarize a recording** or **suggest follow-up questions** from the recent
timeline - useful for writing up a session or probing during it. These read the
timeline; they do not change the recording.
