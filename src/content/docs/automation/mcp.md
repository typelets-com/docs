---
title: MCP server
description: Drive Typelets workspaces and files from an MCP-capable client.
---

Typelets ships an [MCP](https://modelcontextprotocol.io) server,
`@typelets/mcp`, so an MCP-capable client (an AI assistant or agent) can manage
workspaces, files, and problems on your behalf.

## Install

The server is published to npm as `@typelets/mcp`. Run it with `npx` and point
your MCP client at it:

```bash
npx @typelets/mcp@latest
```

Use `@latest` (or pin a version) so you pick up new tools; an older cached
version will not have them.

## Authentication

The server authenticates to the Typelets API with a personal access token
(PAT). Create one in your Typelets account settings and provide it to the server
via its environment (for example `TYPELETS_TOKEN`). Treat the token like a
password - it grants access to your workspaces.

## What it can do

The server exposes tools across a few areas. The exact set depends on the
installed version; this reflects the current release.

### Workspaces

- `list_workspaces`, `get_workspace`, `create_workspace`, `delete_workspace`
- `whoami` - confirm which account the server is acting as

### Files

- `list_workspace_files`, `read_workspace_file`
- `create_file`, `update_file`, `append_to_file`, `delete_file`
- `create_folder`, `delete_folder`, `move_path`
- `upload_file` - upload a binary file (image, font, PDF, asset). Bytes are
  base64-encoded; max 25 MiB. On a persistent workspace the asset is served at
  the preview URL / custom domain. Use `create_file` / `update_file` for UTF-8
  text.

### Problems (interview library)

- `list_problems`, `get_problem`, `save_problem_to_library`, `edit_problem`,
  `delete_problem`, `apply_problem_to_workspace`

### Sessions and review

- `list_recordings`, `summarize_recording`, `score_against_rubric`,
  `suggest_followup_questions`
- `list_pending_invites`

## Hosting via MCP

You can build up a workspace's files entirely through the file tools and serve
the result with [persistent preview](/hosting/persistent-preview/). Text files
go through `create_file` / `update_file`; images and other binaries go through
`upload_file`. On a running persistent container, file changes are pushed into
the live preview.

:::note
Setting a workspace's startup command, persistence, or domain is done in the web
dashboard - those are not currently exposed as MCP tools. Create and populate the
workspace via MCP, then configure its preview in **Workspace settings**.
:::
