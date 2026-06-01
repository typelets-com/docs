---
title: Persistent preview
description: Keep a workspace container warm so an app or site stays running at a stable URL.
---

By default a preview container idles down when it is not in use. **Persistent
preview** keeps it warm for as long as the workspace exists, so a web app, API,
bot, or site stays reachable at a stable URL.

## Turn it on

Open **Workspace settings -> Preview** and enable **Persistent preview**. While
it is on:

- The container is not idle-evicted.
- Your [startup command](/start/concepts/#startup-command) runs every time the
  container starts.

## What persists and what does not

This is the most important thing to understand before you rely on it.

- **Durable:** your workspace files. They are stored independently of the
  container and rebuilt into it on every start. Edits survive restarts and
  recreations.
- **Not durable:** anything that exists only inside the running container - a
  local SQLite/Postgres file written at runtime, uploaded-at-runtime scratch
  files, in-memory state. These are lost when the container is recreated.

For data that must survive restarts, use an external database or store and
connect to it from your app.

## Startup command

Set what runs when the container boots. Examples:

```bash
# Serve a static site
typelets-static --dir /workspace --port 3000

# Start a Node app
npm install && npm run start
```

Output from the startup command is captured to
`/workspace/.typelets-startup.log`. Tail it from the workspace terminal to debug
a startup that is not coming up:

```bash
tail -f /workspace/.typelets-startup.log
```

If you change the startup command while persistent preview is on, Typelets
restarts the preview so the new command takes effect.

## Restarting the preview

If your app wedges, crashes into a bad state, or you have published new files,
restart the preview from **Workspace settings -> Preview -> Restart preview**.
This recreates the container from a clean state and rebuilds its filesystem from
your stored files.

Your workspace files are preserved across a restart. Only in-container state is
discarded, and the next load pays a short cold start.

## Crash behavior

A persistent container is configured to restart on failure. If the whole
container goes down it is brought back and the startup command runs again. Note
that if your app process crashes but the container itself stays up, it is not
automatically respawned - restart the preview, or have your startup command
supervise the process.

## Limits

Persistent workspaces run inside a sandboxed microVM with CPU and memory caps,
the same as standard workspaces. The exact limits are shown in the workspace
settings dialog.
