---
title: Sharing & roles
description: Workspace roles, what each can do, and public vs org vs private sharing.
---

Access to a workspace is controlled by two things: its **share scope** (who can
reach it at all) and each member's **role** (what they can do).

## Share scope

A workspace is one of:

- **Private** - only explicit members can open it.
- **Org** - any signed-in member of the same organization can open it (as a viewer).
- **Public** - anyone with the link can open it (as a viewer).

Non-members never learn a private workspace exists - the API returns "not found"
rather than "forbidden". Interview-mode workspaces cannot be made public.

## Roles

| Role | Can do |
| --- | --- |
| **owner** | Everything: delete the workspace, change share scope, transfer to another org, plus all admin abilities. One owner per workspace. |
| **admin** | Edit workspace settings, manage the interview lifecycle, apply problems, view rubric and all test cases. |
| **interviewer** | Author the problem, start/end interviews, apply a problem, see the rubric, hidden tests, recordings, and scoring. |
| **editor** | Read/write collaborator: edit files, use the terminal, run code. Sees only public test cases, never the rubric. |
| **candidate** | Interview-mode participant: edit, run, see the prompt and public/own tests. Never sees the rubric, hidden tests, or scores. Loses access when the interview ends. |
| **viewer** | Read-only: sees live edits and terminal output, but cannot edit, type in the terminal, run code, or join video. |

## Candidate lockout

When an interviewer ends an interview, candidates immediately lose access - their
live editing, terminal, and run connections are disconnected, and they can no
longer open the workspace. An owner or admin can reopen the interview to restore
access. See [Running an interview](/interviews/running-an-interview/).

## Roles vs scope

Role always wins over scope: an explicit member uses their assigned role, even
on a public workspace. Scope only governs what a non-member gets - and a
non-member is always a viewer at most.
