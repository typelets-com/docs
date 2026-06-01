---
title: Real-time editing
description: Multi-file collaborative editing with live cursors, powered by Yjs CRDTs.
---

Everyone in a workspace edits the same files at the same time. Changes merge
without conflicts and each person sees the others' cursors and selections live.

## How it works

Editing is backed by [Yjs](https://yjs.dev) CRDTs over a WebSocket sync server.
Each file is its own collaborative document, and the workspace file tree is a
document too, so creating, renaming, and moving files also syncs in real time.

Because it is a CRDT, concurrent edits merge deterministically - there is no
"last save wins" overwrite and no lock. If two people type in the same file at
once, both edits land.

## Presence

The editor shows who else is in the file: remote cursors and selections are
rendered per person, with a name and color. Presence also tracks which file
each collaborator is currently viewing.

## Persistence

Documents are snapshotted server-side as you work and reloaded when a workspace
is reopened, so the tree and file contents survive everyone leaving. The
snapshots are the durable source of truth (see [Core concepts](/start/concepts/)).

## Viewers are read-only

A member with the **viewer** role syncs the document and sees live changes, but
their edits are not accepted - the server drops write attempts from viewers.
Presence (their cursor) still shows. See [Sharing & roles](/collaboration/sharing-and-roles/).

## Guests

When a workspace is shared publicly or with an org, someone who opens it is
resolved to a read-only viewer unless they have been added as a member with an
editing role.
