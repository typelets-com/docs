---
title: Concepts
description: How workspaces, previews, persistence, and storage fit together in Typelets.
---

A few ideas explain most of how Typelets behaves. Understanding them makes the
hosting and automation docs much easier to follow.

## Workspace

A workspace is your project: a file tree plus the people who can access it. Its
files are the source of truth and are stored durably, independent of whether
any container is currently running. You edit a workspace collaboratively in the
browser IDE.

## Preview container

When a workspace needs to run code, Typelets starts a container (a per-workspace
sandbox) and serves whatever process you start inside it. The preview is the
running app, reached through a Typelets URL.

The container's filesystem is rebuilt from your workspace's stored files every
time it starts. That means:

- Your files survive container restarts and recreations.
- Anything created **only** inside the running container (scratch files, an
  in-memory database, a process's runtime state) is **not** durable. It is
  discarded when the container is recreated.

For data that must outlive a restart, use an external store and connect to it
from your app.

## Persistent preview

By default a preview container is short-lived: it idles down when unused. Turn
on **persistent preview** and the container stays warm for as long as the
workspace exists, so a long-running app or site keeps serving. See
[Persistent preview](/hosting/persistent-preview/).

## Startup command

A persistent workspace can run a **startup command** automatically when its
container boots (for example, a static file server, or `npm install && npm run
dev`). If no startup command is set, nothing auto-starts and you launch
processes yourself from the workspace terminal.

## Ports and the preview URL

Your app listens on a port inside the container (3000 by default). Typelets
proxies the preview URL to that port. You can change the default port in the
workspace's Preview settings.

## Visibility and domains

A preview can be private (only workspace members) or public (anyone with the
link). You can give it a memorable subdomain, or point your own
[custom domain](/hosting/custom-domains/) at it.
