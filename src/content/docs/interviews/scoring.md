---
title: Scoring
description: Score a candidate against a structured rubric.
---

Typelets lets you score a candidate against the problem's rubric criteria,
rather than relying on a single gut-feel verdict.

## How scoring works

A problem defines named **criteria** (for example "Correctness",
"Communication", "Code quality"). After the interview, the interviewer scores
each criterion on a **1-5 scale** with optional notes, plus an overall notes
field. Scores are saved on the workspace and visible only to interviewer-side
roles.

Scoring is **entered by a human** - the score is the interviewer's judgment.
For take-home assessments, [Draft with AI](/assessments/grading/) can propose a
first pass of scores and notes that you then edit, but it never writes the final
score for you.

## Who can score and see scores

- **owner / admin / interviewer** can enter and view scores.
- **candidates and viewers never see the rubric or scores** - those fields are
  stripped before the data reaches them.

A workspace is scorable once it has a prompt and either a rubric or at least one
criterion (i.e. a problem has been applied).

## LLM-assisted scoring input

Through the [MCP server](/automation/mcp/), `score_against_rubric` returns the
recording timeline together with the rubric and criteria, so an AI assistant can
help an interviewer reason about a score. It provides **input** - it does not
write the score. The final number is always the interviewer's.

## ATS export

Some deployments can sync the resulting scorecard to an applicant tracking
system. This is an optional, deployment-gated integration; if it is not enabled
in your deployment, the ATS controls are not present.
