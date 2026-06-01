---
title: REST API reference
description: The workspace and file HTTP endpoints, callable with a personal access token.
---

Typelets exposes an HTTP API for managing workspaces and files. It is the same
API the [MCP server](/automation/mcp/) wraps, and you can call it directly with
a [personal access token](/automation/tokens/).

## Base URL and auth

```
https://typelets.com/api
```

Authenticate with a Bearer PAT:

```bash
curl https://typelets.com/api/workspaces \
  -H "Authorization: Bearer pat_xxxxxxxx..."
```

Notes:

- Non-members get **404** (not 403) for a workspace - existence is hidden.
- Write endpoints accept a PAT without CSRF; browser (cookie) callers need the
  `x-csrf-token` header.
- Roles referenced below: `owner, admin, editor, viewer, interviewer, candidate`.

## Workspaces

| Method | Path | Description | Roles |
| --- | --- | --- | --- |
| `POST` | `/workspaces` | Create a workspace. Body: `{ name, mode?: general\|interview, shareScope?: private\|org\|public }`. Creator becomes owner. Interview + public is rejected. | verified user |
| `GET` | `/workspaces` | List workspaces you can access. | any |
| `GET` | `/workspaces/:id` | Fetch one workspace summary. | member / org-shared / public |
| `PATCH` | `/workspaces/:id` | Update name, mode, shareScope, previewVisibility, defaultPreviewPort, previewPersistent, previewStartupCommand, previewSlug. | owner, admin |
| `DELETE` | `/workspaces/:id` | Delete the workspace (cascades members + custom domains). | owner |
| `POST` | `/workspaces/:id/move` | Move to another org. Body: `{ destinationOrgId }`. | workspace owner + owner/admin of destination org |
| `POST` | `/workspaces/:id/import` | Import flat files. Body: `{ files: [{ path, content }] }` (max 5000 files, 1 MiB/file). | verified; owner, admin, editor, interviewer |
| `POST` | `/workspaces/:id/container` | Start the sandbox runtime. | any member |

## Files

Text files are capped at 1 MiB; binary uploads at 25 MiB.

| Method | Path | Description | Roles |
| --- | --- | --- | --- |
| `GET` | `/workspaces/:id/files` | List the tree (files only; `?includeFolders=true` adds folders). | owner, admin, editor, viewer |
| `GET` | `/workspaces/:id/files/:fileId/content` | UTF-8 content of a file (binary -> 415). | owner, admin, editor, viewer |
| `POST` | `/workspaces/:id/files` | Create a file. Body: `{ path, content? }`. Intermediate folders auto-created. 409 on collision. | owner, admin, editor |
| `PUT` | `/workspaces/:id/files/:fileId/content` | Overwrite a file. Body: `{ content }`. | owner, admin, editor |
| `PATCH` | `/workspaces/:id/files/:fileId/append` | Append text. Body: `{ text }`. | owner, admin, editor |
| `DELETE` | `/workspaces/:id/files/:fileId` | Delete a file (idempotent 204). | owner, admin, editor |
| `POST` | `/workspaces/:id/files/move` | Move/rename a node. Body: `{ nodeId, destinationPath }`. | owner, admin, editor |
| `POST` | `/workspaces/:id/folders` | Create a folder. Body: `{ path }`. | owner, admin, editor |
| `DELETE` | `/workspaces/:id/folders/:folderId` | Delete a folder recursively. | owner, admin, editor |
| `POST` | `/workspaces/:id/files/binary?path=&overwrite=` | Upload raw bytes (`application/octet-stream`, mime via `x-file-mime`). | owner, admin, editor |
| `GET` | `/workspaces/:id/files/:fileId/binary` | Download a binary file. | owner, admin, editor, viewer |

## Interview endpoints

These manage interview-mode workspaces; all are interviewer-side (owner / admin
/ interviewer) unless noted.

| Method | Path | Description |
| --- | --- | --- |
| `PATCH` | `/workspaces/:id/interview` | Set prompt / rubric / criteria / tests / scores / solution files. |
| `POST` | `/workspaces/:id/interview/problem` | Apply a library problem (destructive: replaces the tree). Body: `{ problemId }`. |
| `POST` | `/workspaces/:id/interview/start` | Start the interview (requires a prompt). |
| `POST` | `/workspaces/:id/interview/end` | End it (locks out candidates). |
| `POST` | `/workspaces/:id/interview/reopen` | Reopen (owner/admin) to restore candidate access. |

## Tips

- See [Personal access tokens](/automation/tokens/) for creating and managing
  credentials.
- For agent-driven workflows, the [MCP server](/automation/mcp/) wraps these
  endpoints as typed tools.
- This is not an exhaustive list of every internal route - it covers the
  workspace, file, and interview surface intended for API consumers.
