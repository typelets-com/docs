# Typelets Docs

Documentation for [Typelets](https://typelets.com) - a collaborative IDE with
persistent, hostable preview workspaces. Built with
[Astro Starlight](https://starlight.astro.build).

Published at **https://docs.typelets.com**.

## Develop

```bash
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # static build into ./dist
npm run preview  # preview the built site
```

## Structure

Content is Markdown / MDX under `src/content/docs/`:

- `start/` - what Typelets is, quickstart, concepts
- `hosting/` - persistent preview, static sites, custom domains
- `automation/` - the MCP server

Navigation (the sidebar) and site config live in `astro.config.mjs`.

## Writing docs

Each page is a `.md` (or `.mdx`) file with frontmatter:

```markdown
---
title: Page title
description: One-line summary used for SEO + search.
---

Body in Markdown.
```

Add a new page to the sidebar by adding its slug to the `sidebar` array in
`astro.config.mjs`. Keep content grounded in shipped behavior - if a feature is
not live, do not document it as if it is.

## Deploy

The site is a static build (`npm run build` -> `./dist`). It can be served by
any static host. The production target is `docs.typelets.com`.
