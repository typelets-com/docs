---
title: Accounts & organizations
description: Sign-in, email verification, MFA, and how organizations work.
---

## Accounts

You sign up with an email and password. Sessions are server-side and delivered
as a secure, httpOnly cookie that lasts up to 7 days, refreshed as you use the
app.

### Email verification

New accounts start unverified and receive a one-shot verification link. Most of
the app works while unverified, but a few cost- or spam-sensitive actions
(creating workspaces, running code, importing, minting tokens) require a
verified email. Signing up through an organization invite verifies you
immediately. You can request a fresh verification email if the link expires.

### Multi-factor authentication

You can enroll TOTP-based MFA (any authenticator app). Enrollment provides a set
of one-time recovery codes - store them somewhere safe. With MFA on, sign-in
completes with a second step. You can disable MFA with your password plus a
current code (or a recovery code).

## Organizations

Every account gets a personal organization on signup. Organizations group
workspaces and members.

- **Roles:** `owner`, `admin`, `member`.
- **Switching:** you have one active organization at a time; new workspaces are
  created in it.
- **Invites:** owners and admins invite people by email (as admin or member).
  Invites expire after 14 days. Recipients accept or decline from their pending
  invitations.
- **Sharing:** a workspace set to `org` scope is visible to members of its
  organization. See [Sharing & roles](/collaboration/sharing-and-roles/).

## Personal access tokens

For programmatic access, create a [personal access token](/automation/tokens/)
and call the [REST API](/automation/api/) or run the [MCP server](/automation/mcp/).
