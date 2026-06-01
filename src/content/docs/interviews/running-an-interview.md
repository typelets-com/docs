---
title: Running an interview
description: Start a session, run tests, and end it cleanly.
---

This is the interviewer's runbook for a live session.

## Before the candidate joins

1. Create an **interview-mode** workspace.
2. [Apply a problem](/interviews/problem-library/) so the starter files, prompt,
   rubric, and test cases are in place. Do this first - applying is destructive.
3. Add yourself as `interviewer` and the candidate as `candidate`.
4. Optionally start a [recording](/interviews/recording/).

## Starting

Start the interview from the workspace. Starting requires a problem to be
applied (a non-empty prompt). This stamps the start time and opens the session.

## During the interview

- Edit and watch in real time alongside the candidate.
- Use the [shared terminal](/collaboration/terminal/) together.
- Run the problem's **test cases** with the test runner. It executes each case
  in the sandbox:
  - **stdin cases** feed input and compare normalized stdout to the expected
    output.
  - **framework cases** run an author-supplied command and pass if it exits 0.
  - Per-test limits apply (about 10 seconds and 64 KiB of output per case).
- Candidates see hidden cases only as pass/fail and never see expected output.

## Ending

End the interview when you are done. This:

- Stamps the end time.
- **Immediately revokes the candidate's access** - their live editing, terminal,
  and run connections are disconnected and they can no longer open the workspace.

Interviewers, admins, and the owner keep access to review. If you ended it by
mistake, an owner or admin can **reopen** the interview to restore candidate
access.

## After

[Score](/interviews/scoring/) the candidate against the rubric and
[replay the recording](/interviews/recording/) with your team.
