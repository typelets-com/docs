---
title: Grading
description: Score a take-home against a rubric, with an optional AI-drafted first pass.
---

You score a take-home the same way you score an [interview](/interviews/scoring/):
against the problem's rubric criteria, on a 1-5 scale with notes. Take-homes add
an optional **Draft with AI** first pass that reads the submission for you, and
that takes the candidate's AI usage into account.

## Scoring against the rubric

A problem defines named **criteria** (for example "Correctness", "Design",
"Communication"). In the scoring panel you score each criterion 1-5 with optional
per-criterion notes, plus an overall notes field. Scores are saved on the
assessment and visible only to reviewer-side roles.

A workspace is scorable once it has a prompt and either a rubric or at least one
criterion.

## Draft with AI

**Draft with AI** proposes a first pass you then edit. For the selected candidate
it reads the submitted files, the rubric and criteria, and (when the assistant
was enabled) the candidate's AI transcript, then proposes a score and a note for
every criterion plus an overall summary.

The draft is a starting point, not a verdict:

- Applying a draft fills only **unscored criteria and empty notes** - anything you
  have already typed is never overwritten.
- You edit, override, or ignore any of it. The saved scores are yours, and so is
  the hire decision.

## How AI usage affects the score

Because the grader reads the candidate's AI transcript alongside the code, it
weighs **how** the candidate used the assistant, not just whether they did:

- **Meaningful direction** - decomposing the problem, asking targeted questions,
  reviewing and verifying generated code, iterating - is normal modern practice
  and is never a penalty.
- **Wholesale delegation** - pasting the problem and asking the assistant to do
  the whole thing, then submitting the output - means the submitted code
  demonstrates the assistant's ability, not the candidate's. The draft lowers the
  scores on the criteria that delegated work dominates and says so in the notes.

This keeps the score about the candidate's own demonstrated contribution, which
is the point of letting them use AI in the first place.

## Driving scoring programmatically

Through the [MCP server](/automation/mcp/), `score_against_rubric` returns a
recording timeline together with the rubric and criteria, so an AI assistant can
help a reviewer reason about a score. As with Draft with AI, it provides input;
the final number is always the reviewer's.
