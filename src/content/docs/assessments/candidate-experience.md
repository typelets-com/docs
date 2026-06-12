---
title: The candidate experience
description: What a candidate does in a take-home - the timer, the AI assistant, and submitting.
---

Once a candidate has [accepted an invite](/assessments/inviting-candidates/),
they have a private workspace with the problem applied. This is what the
assessment looks like from their side.

## Starting the assessment

The candidate clicks **Start** when they are ready. Starting is deliberate, not
automatic on accept, so a candidate can read the prompt and set up before the
clock begins. The start time is recorded on the server, so the timing is the same
regardless of timezone or browser.

## Timed vs due-date

An assessment runs in one of two modes, set by you when you configure it:

- **Timed.** A fixed time limit starts when the candidate clicks Start. When it
  runs out, the assessment **auto-submits** whatever is in the workspace. The
  candidate sees the remaining time as they work.
- **Due date.** The assessment is open until a calendar deadline and never
  auto-submits. The candidate submits when they are done; a submission after the
  deadline is accepted but **flagged late** for the reviewer.

Either way the deadline is computed and enforced server-side, so it is identical
for every candidate and cannot be extended by tampering with the client.

## The AI assistant

If you enabled it for the assessment, the candidate has a coding **AI assistant**
in the workspace - a chat panel beside the editor they can use the way they would
day to day.

- It runs against a **hard budget** scoped to the assessment. When the budget is
  spent, the assistant stops responding. Every candidate gets the same allowance,
  and there are no runaway costs.
- **Every prompt and reply is recorded.** The candidate's exchange with the
  assistant is saved to a transcript the reviewer reads later. AI use here is on
  the record by design, so it can be assessed rather than policed.

If you leave the assistant off, the workspace is a plain no-AI take-home.

## Submitting

The candidate submits when they are done (or a timed assessment submits for them
at the deadline). On submit:

- The workspace **freezes read-only** for everyone, including the candidate, so
  what the reviewer sees is exactly what was submitted.
- If recording was enabled, the session recording is finalized and becomes
  available for replay.

The candidate cannot reopen or keep editing a submitted assessment.

Next: [Reviewing submissions](/assessments/reviewing-submissions/).
