---
title: Custom subdomains
description: Claim a short, memorable preview URL under preview.typelets.com.
---

By default a workspace preview is reachable at a URL based on its workspace id.
You can instead claim a readable **subdomain** so the link is short and
memorable - for example `myapp.preview.typelets.com` instead of a long id.

## Set a subdomain

Open **Workspace settings -> Domain** and set the custom subdomain (the slug).
The preview is then served at:

```
https://<slug>.preview.typelets.com/
```

The wildcard TLS certificate for `*.preview.typelets.com` already covers it, so
there is nothing to configure for HTTPS.

## Slug rules

- Letters, numbers, and hyphens.
- 3-32 characters.
- Leave it blank to fall back to the workspace id.

The settings panel checks availability as you type, so you know immediately if a
slug is taken.

## Subdomain vs custom domain

- A **custom subdomain** is a vanity name under `preview.typelets.com` - instant,
  no DNS to configure, works on any workspace.
- A **[custom domain](/hosting/custom-domains/)** points your *own* hostname
  (e.g. `app.example.com`) at the workspace, and requires persistent preview
  plus a DNS record you create.

Use a subdomain for a quick shareable link; use a custom domain when you want the
site on your own brand.
