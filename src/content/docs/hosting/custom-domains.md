---
title: Custom domains
description: Point your own domain at a Typelets workspace preview.
---

Serve a workspace preview from your own hostname (for example
`app.example.com`) instead of a Typelets subdomain. Certificates are issued and
managed for you.

## Before you start

- **Persistent preview must be on** for the workspace. Custom domains attach to
  a persistent preview; adding one without it returns an error asking you to
  enable persistent preview first. See
  [Persistent preview](/hosting/persistent-preview/).
- You need a domain you control, where you can add DNS records.
- You must be an **owner or admin** of the workspace.

## Add a domain

1. Open **Workspace settings -> Domain**.
2. Under **Custom domains**, enter your hostname (e.g. `app.example.com`) and add
   it.
3. Typelets registers the hostname and shows you the DNS record to create.

## Create the DNS record

The settings panel shows the exact record for your domain. It is one of:

- **CNAME** (for a subdomain like `app.example.com`): create a CNAME from your
  host to the target shown.
- **A / AAAA** (for an apex/root domain like `example.com`): create A and AAAA
  records pointing as shown.

Create the record at your DNS provider exactly as displayed.

## Wait for verification

After the DNS record propagates, the domain's status moves from pending to
**verifying** to **active**. You can use **Check status** in the panel to
re-poll. Certificate issuance happens automatically once the hostname verifies;
no certificate work is needed on your side.

Once the status is **active**, your site is served over HTTPS at your domain.

:::note
DNS propagation and certificate issuance can take a few minutes. If a domain
stays in a non-active state, double-check the record type and value against what
the panel shows, then use **Check status** again.
:::

## Visibility

A custom domain serves your preview publicly. Make sure the workspace's preview
is what you intend to expose - anything your container serves on the preview
port is reachable at the domain.

## Remove a domain

Use the trash icon next to the domain in the panel. Typelets deregisters the
hostname; remove the DNS record at your provider afterward.
