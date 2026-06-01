---
title: Quickstart
description: Create a workspace, run something, and get a live preview URL.
---

This walks you from an empty workspace to a live, shareable preview URL.

## 1. Create a workspace

Sign in at [typelets.com](https://typelets.com), then create a workspace. You
edit its files in the browser IDE; the files are stored durably and sync across
everyone with access.

## 2. Add your files

Create or upload the files you want to run or serve. For a static site that is
your HTML, CSS, JS, and assets; for an app it is your source plus its manifest
(`package.json`, `Gemfile`, etc).

## 3. Open the Preview settings

Open **Workspace settings -> Preview**. Here you set:

- **Default port** - the port your app listens on inside the container (3000 by
  default).
- **Persistent preview** - keep the container warm so the app stays up. Turn
  this on for anything you want to keep running. See
  [Persistent preview](/hosting/persistent-preview/).
- **Startup command** - what runs automatically when the container boots.

## 4. Set a startup command

What you put here depends on what you are running.

**A static site** (recommended for sites/catalogs):

```bash
typelets-static --dir /workspace --port 3000
```

Point `--dir` at your built output instead if you build first, e.g.
`--dir /workspace/dist`. See [Host a static site](/hosting/static-site/) for the
full flow and what this server gives you over a plain file server.

**A Node app:**

```bash
npm install && npm run start
```

**Nothing automatic:** leave it blank and start processes yourself from the
workspace terminal.

## 5. Save and open the preview

Save. The container boots and your preview URL goes live. Share it directly, give
it a [custom subdomain](/hosting/custom-domains/), or point your own domain at
it.

:::note
The first load after a fresh start pays a short cold start while the container
boots and your startup command runs. Subsequent loads are warm.
:::

## Next steps

- [Concepts](/start/concepts/) - how it all fits together, and what is durable vs not.
- [Host a static site](/hosting/static-site/) - the full static hosting flow.
- [Custom domains](/hosting/custom-domains/) - bring your own hostname.
