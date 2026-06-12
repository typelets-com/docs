---
title: Reviewing submissions
description: Review a candidate's submitted files, session recording, and AI transcript.
---

You review every candidate from the **source** assessment. As candidates submit,
their submissions appear in your sidebar; opening one gives you the submitted
files, the session recording, and the AI usage transcript. The whole review
surface is read-only: nothing you do changes what the candidate submitted.

## Browsing the submitted files

Open a submission to browse its files in a read-only editor that looks and
behaves like the normal file tree. You see exactly what the candidate left at
submission time.

- **Markdown files** (a `README.md`, a `DESIGN.md`) open in a rendered preview by
  default, with a **Source / Preview** toggle. A candidate's written explanation
  shows as formatted prose, not raw markup.
- The view is a snapshot. Use the sidebar refresh to re-list files if you are
  looking at an in-progress candidate; re-open a file to re-read its latest
  content.

## Replaying the recording

If recording was enabled for the assessment, each candidate's session is captured
automatically and can be **replayed** once they submit. The recording shows the
edits, terminal output, and test runs over the course of the session, so you can
watch how the solution came together rather than guessing from the final state.

Recordings are listed on the source assessment and tagged with the candidate, so
you replay the right session for the right person. See [Recording &
replay](/interviews/recording/) for how recording works in general.

## Reading the AI transcript

If the [AI assistant](/assessments/candidate-experience/#the-ai-assistant) was
enabled, open the **AI transcript** for a submission to see the candidate's
exchange with it: every prompt they typed and every reply, in order, with each
candidate identified.

- Machine-context noise (system reminders, tool results) is stripped out and
  tucked behind collapsible sections, so you read the actual conversation.
- A **Raw** toggle shows the unmodified stored content if you want to audit
  exactly what was sent and received.

The transcript is the basis for grading how the candidate used AI, covered next.

## What stays hidden

Everything reviewer-side stays reviewer-side. Candidates never see the rubric,
scores, recordings, transcripts, or one another. See [Sharing &
roles](/collaboration/sharing-and-roles/).

Next: [Grading](/assessments/grading/).
