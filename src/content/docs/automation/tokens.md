---
title: Personal access tokens
description: Create API tokens to call the Typelets REST API and run the MCP server.
---

A personal access token (PAT) lets a program authenticate to the Typelets API
as you - for the [REST API](/automation/api/) and the [MCP server](/automation/mcp/).

## Create a token

In your account settings, open the **Tokens** tab and create a token. Choose an
expiry: **30, 90, or 365 days, or never**. The plaintext token is shown **once**,
at creation - copy it then; you cannot retrieve it again.

Tokens look like `pat_` followed by a long random string.

## Use a token

Send it as a Bearer token:

```bash
curl https://typelets.com/api/workspaces \
  -H "Authorization: Bearer pat_xxxxxxxx..."
```

Bearer-authenticated requests are exempt from CSRF (CSRF only applies to
cookie-based browser sessions), so a PAT is all a script needs for write
endpoints too.

## What a token can do

A PAT acts as **you, with your full access** - there is no scope system. It can
do anything your account can do through the API, limited only by your workspace
and organization roles. Treat it like a password:

- Store it in a secret manager or environment variable, never in source control.
- Use the shortest practical expiry.
- Revoke it the moment it is no longer needed.

One safeguard: a PAT cannot mint another PAT - creating tokens requires a
browser (cookie) session.

## Revoke a token

Delete it from the Tokens tab. Revocation is immediate. List your tokens there
to see each one's prefix, creation date, last-used time, and expiry.
