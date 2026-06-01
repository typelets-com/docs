---
title: Shared terminal
description: One shared terminal per workspace - everyone sees the same session.
---

A workspace has a shared terminal running inside its [sandbox](/running-code/sandbox/).
It is a single session: everyone connected sees the same output, and anyone with
an editing role can type into it.

## One session, shared

The terminal is one PTY (pseudo-terminal) for the workspace, not one per person.
Output is broadcast to everyone connected. When you join an in-progress session,
the recent output is replayed so you are not staring at a blank screen.

Multiple terminal tabs are supported - each distinct tab opens its own session
in the same sandbox.

## Who can type

- **Owners, admins, editors, interviewers, candidates** (editing roles) can type;
  input from any of them goes to the shared session.
- **Viewers** are read-only: they see output but their keystrokes are ignored.

## Presence and typing

The terminal shows who is connected and indicates when someone is typing, so
collaborators do not fight over the prompt.

## Sizing

The terminal is sized to fit the smallest active editor viewport so output
wraps correctly for everyone in the room.

## Runs as `coder`

Commands run as the non-root `coder` user inside the sandbox. See
[Languages & runtimes](/running-code/languages/) for what is available to run,
and [Limits & sandbox model](/reference/limits/) for the isolation boundaries.
