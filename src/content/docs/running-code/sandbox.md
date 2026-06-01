---
title: Sandboxed execution
description: Every workspace runs in its own isolated sandbox.
---

Code in a workspace never runs on shared infrastructure unguarded. Each
workspace gets its own isolated sandbox, created on first use and reclaimed when
idle.

## The isolation model

On the hosted platform, each workspace runs in its own **Firecracker microVM** -
a lightweight virtual machine, one per workspace. The VM boundary is the
security boundary: workspaces cannot see or reach each other.

Self-hosted deployments using the local Docker backend instead run each
workspace in a container hardened with gVisor (a userspace kernel), a read-only
root filesystem, all Linux capabilities dropped, no-new-privileges, and a PID
cap. (If gVisor is not installed on the host, the container falls back to the
default runtime in a reduced-isolation posture - the operator is warned at
startup.)

In both cases code runs as a non-root `coder` user.

## Resource limits

By default a workspace sandbox is sized at **1 vCPU and 1 GiB of memory**. A
`/tmp` scratch area is available; the workspace files live on a separate volume
that persists across idle reclamation.

## Lifecycle

- A sandbox starts the first time a workspace needs to run something.
- It is **idle-evicted after ~15 minutes** of inactivity to free resources.
  Eviction does not lose your files - they are stored durably and rebuilt into
  the sandbox on the next start (see [Core concepts](/start/concepts/)).
- A [persistent preview](/hosting/persistent-preview/) workspace opts out of
  idle eviction so its app keeps running.

## What this means for you

- Anything you install or generate **only inside** the sandbox at runtime is not
  durable across a restart. Keep source in the workspace files; use an external
  store for runtime data you need to keep.
- See [Limits & sandbox model](/reference/limits/) for the full set of caps.
