---
title: Limits & sandbox model
description: Resource caps, execution limits, and the isolation boundaries.
---

A reference for the hard limits and the security model behind a workspace.

## Sandbox isolation

- **Hosted:** each workspace runs in its own Firecracker microVM, one per
  workspace. The VM is the isolation boundary.
- **Self-hosted (Docker backend):** each workspace runs in a container with
  gVisor, a read-only root filesystem, all capabilities dropped, and
  no-new-privileges. Without gVisor on the host it falls back to a
  reduced-isolation posture (the operator is warned).
- Code runs as the non-root `coder` user in both cases.

## Resource caps

| Resource | Default |
| --- | --- |
| CPU | 1 vCPU |
| Memory | 1 GiB |
| Idle eviction | ~15 minutes (persistent preview opts out) |
| Process limit (Docker backend) | 256 |

## Run limits

The **Run** button is bounded:

| Limit | Value |
| --- | --- |
| Wall-clock time | ~20 seconds |
| Total output | ~1 MiB |
| Output rate | ~256 KiB / second |

Interview **test cases** are bounded per case at about 10 seconds and 64 KiB of
output per channel.

## File limits

| Operation | Cap |
| --- | --- |
| Text file content | 1 MiB |
| Binary upload | 25 MiB |
| Bulk import | 5000 files, 1 MiB each |

## Durability

- **Durable:** workspace files (stored independently of any running sandbox).
- **Not durable:** anything created only inside a running sandbox at runtime -
  it is lost on restart or recreation. Use a project manifest for dependencies
  and an external store for runtime data. See [Core concepts](/start/concepts/).

## Availability notes

- **Preview / hosting** is available on the hosted (Fly) platform. The local
  Docker backend does not serve previews.
- **Video** and some integrations are deployment-gated features.
