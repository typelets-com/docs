---
title: Host a static site
description: Serve a real public static site from a Typelets workspace with a production file server.
---

A persistent Typelets workspace can host a real public static site - a landing
page, a docs site, a catalog, a portfolio - served from your workspace files,
optionally behind your own domain.

## Use the built-in static server

The runner ships with `typelets-static`, a production static file server. Set it
as your [startup command](/start/concepts/#startup-command):

```bash
typelets-static --dir /workspace --port 3000
```

If you build your site to an output directory, point `--dir` at that instead:

```bash
typelets-static --dir /workspace/dist --port 3000
```

### Why not `python3 -m http.server`

A basic file server works for a quick look, but is a poor fit for a real public
site. `typelets-static` handles the things that matter for a site you actually
ship:

- **Correct content types**, including modern formats like WebP and AVIF (a
  basic server can mislabel WebP as JPEG).
- **gzip compression** for text, CSS, JS, JSON, and SVG.
- **Cache headers**: `no-cache` for HTML so edits show up, long-lived
  `immutable` caching for content-hashed assets (e.g. `app.4f3a9b2c.js`).
- **Clean URLs**: `/about` serves `about.html`; `/docs` serves
  `docs/index.html`.
- **A real 404** instead of a directory listing - no accidental file listings
  on a public site.

It is a single binary baked into the runner image, so there is no per-start
download.

### Options

| Flag | Default | Purpose |
| --- | --- | --- |
| `--dir` | `/workspace` | Directory to serve. Point at your build output if you build first. |
| `--port` | `3000` | Port to listen on. Match your workspace's default preview port. |
| `--spa` | off | Single-page-app mode: serve `index.html` for unmatched routes so client-side routing works. |
| `--not-found <file>` | none | Custom 404 page, relative to `--dir`. |

## Static-site generators (Astro, 11ty, Hugo, Next export)

You have two models:

### Build locally, upload the output (recommended)

Build your site on your machine, then put the built output (`dist/`, `_site/`,
`public/`, etc) into the workspace and serve it:

```bash
typelets-static --dir /workspace --port 3000
```

This keeps cold starts fast (no in-container build) and produces
production-grade output. It is the most reliable way to publish.

### Build inside the container

Set a startup command that builds then serves:

```bash
npm ci && npm run build && typelets-static --dir /workspace/dist --port 3000
```

This keeps your source as the source of truth, but every container recreation
re-runs the full install and build, so cold starts are slower. Use it when you
want the workspace to be self-contained.

## Single-page apps (React, Vite, Create React App)

A client-rendered app (React, Vue, Svelte) is a static site once it is built, so
the two models above apply: build it, then serve the output directory. The one
addition is the `--spa` flag, which serves `index.html` for any route that does
not match a file, so client-side routing and browser refreshes keep working
instead of returning a 404:

```bash
npm ci && npm run build && typelets-static --dir /workspace/dist --port 3000 --spa
```

Point `--dir` at your framework's output directory (`dist/` for Vite, `build/`
for Create React App). As with any site, building locally and uploading the
output keeps cold starts faster than building in the container.

Want a live dev server with hot reload while you iterate instead of a built
bundle? Run it from a [persistent preview](/hosting/persistent-preview/) startup
command. Vite needs `--host` to accept connections from the preview proxy:

```bash
npm install && npm run dev -- --host 0.0.0.0 --port 3000
```

Build-and-serve is the more reliable way to publish a public site; the dev
server is best kept for iteration.

## Publishing updates

To publish changes, update your files in the workspace, then
[restart the preview](/hosting/persistent-preview/#restarting-the-preview) so the
container is recreated from your latest files. The restart rebuilds the
container's filesystem from your stored workspace files.

## Go public and add a domain

In **Workspace settings -> Domain**, set the preview to **Public** so anyone with
the link can reach it. To use your own hostname, see
[Custom domains](/hosting/custom-domains/).

:::caution
A public preview serves whatever your container exposes on the preview port to
anyone with the link. Do not expose anything you would not put on the public
internet.
:::
