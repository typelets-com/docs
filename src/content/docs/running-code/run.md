---
title: Run & output
description: Run a file and watch stdout/stderr stream back live.
---

Hit **Run** and Typelets executes your entrypoint in the workspace
[sandbox](/running-code/sandbox/), streaming stdout and stderr back to the
browser as they are produced.

## Choosing what runs

You can run a specific file, or let Typelets pick the entrypoint:

- If you run a specific file, it executes that file (as long as it exists in the
  workspace).
- Otherwise Typelets auto-detects an entrypoint, preferring a `main.*` file,
  then common names like `index`, `app`, `program`, or `solution`, then a lone
  runnable file. If it cannot decide, it asks you to add an entrypoint.

Run handles **single-file** programs in the supported languages - see
[Languages & runtimes](/running-code/languages/). Multi-file projects, app
servers, and build pipelines run from the [terminal](/collaboration/terminal/)
or via a [preview startup command](/hosting/persistent-preview/) instead.

## Live output

Output streams back as it happens, not after the program exits, so you see
progress in real time. Output is bounded to keep a runaway program from
flooding the browser:

- **Time limit:** a run is killed after ~20 seconds.
- **Output limit:** ~1 MiB total, rate-capped at ~256 KiB/second. Beyond that the
  stream is marked truncated and the run settles.

## Who can run

Running requires an editing role (not viewers) and a verified email address.
Viewers can watch output but not trigger runs.

## Test runs (interview mode)

Interview workspaces also have a test runner that executes the problem's test
cases - either stdin/expected-output comparisons or framework commands - and
reports pass/fail. Candidates see hidden test cases only as pass/fail, never
their expected output. See [Running an interview](/interviews/running-an-interview/).
