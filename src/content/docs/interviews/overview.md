---
title: Interviews overview
description: How technical interviews work in Typelets, end to end.
---

Typelets has a first-class mode for technical interviews: a shared coding
workspace where an interviewer poses a problem, the candidate works in real
time, the session is recorded, and the result is scored against a rubric.

## The shape of an interview

1. **Create an interview workspace.** Set its mode to `interview`. Interview
   workspaces cannot be public.
2. **Apply a problem** from your [problem library](/interviews/problem-library/) -
   this lays down starter files and attaches the prompt, rubric, and test cases.
3. **Add the candidate** as a member with the `candidate` role, and yourself (or
   colleagues) as `interviewer`.
4. **Start the interview.** Optionally start a [recording](/interviews/recording/).
5. The candidate codes; you collaborate, watch the [shared terminal](/collaboration/terminal/),
   and run [tests](/interviews/running-an-interview/).
6. **End the interview** - the candidate loses access immediately.
7. **Score** the candidate against the rubric, and review the recording with your team.

## What candidates can and cannot see

Candidates see the prompt, their own files, and public test cases. They never
see the rubric, hidden test cases (beyond pass/fail), the reference solution, or
scores. See [Sharing & roles](/collaboration/sharing-and-roles/).

## Roles in an interview

- **interviewer / admin / owner** drive the session: apply problems, start/end,
  record, and score.
- **candidate** participates and is locked out when the interview ends.

## Driving interviews programmatically

The [MCP server](/automation/mcp/) exposes interviewer tools - apply a problem,
summarize or score a recording, suggest follow-up questions - so an AI assistant
can help run or review a session.

Next: [Problem library](/interviews/problem-library/).
