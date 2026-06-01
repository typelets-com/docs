---
title: Languages & runtimes
description: What is installed in the workspace sandbox and what you can run.
---

The workspace sandbox image ships a set of language toolchains. There are two
things to distinguish: what is **installed** (usable from the terminal or a
startup command) and what the **Run button** supports directly (single-file
entrypoints).

## Installed toolchains

| Toolchain | Version |
| --- | --- |
| Node.js | 20 |
| TypeScript + tsx | 5 |
| Python | 3 (with pip, venv) |
| Ruby | 3.3 (Rails 8 gems pre-baked) |
| Java | OpenJDK 17 |
| Go | 1.22 |
| C / C++ | gcc / g++ (build-essential) |
| Static server | `typelets-static` (see [Host a static site](/hosting/static-site/)) |

All of these are usable from the [shared terminal](/collaboration/terminal/) and
as part of a [preview startup command](/hosting/persistent-preview/).

## Run-button languages

The **Run** button executes single-file entrypoints for:

- Python (`.py`)
- Ruby (`.rb`)
- JavaScript (`.js`, `.mjs`, `.cjs`)
- TypeScript (`.ts`, `.tsx` - via tsx)
- Go (`.go` - `go run`)
- Java (`.java` - compiled then run)
- C (`.c` - gcc)
- C++ (`.cc`, `.cpp`, `.cxx` - g++)

Multi-file Go modules, Rails apps, and the like are not run via the Run button;
start them from the terminal or a startup command instead.

## Installing more

Because you have a real shell as `coder`, you can `pip install`, `npm install`,
`bundle install`, `go get`, etc. from the terminal. Remember that anything you
install **only at runtime** does not survive a sandbox restart - put dependencies
in your project manifest (`package.json`, `Gemfile`, `requirements.txt`, `go.mod`)
and install them via a startup command if you need them on every boot. See
[Core concepts](/start/concepts/).
