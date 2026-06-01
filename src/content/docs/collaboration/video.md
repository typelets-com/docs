---
title: Video
description: Optional in-workspace video calls over WebRTC.
---

Typelets includes a multi-party video room scoped to a workspace, so you can
talk face to face without a second tab or a separate meeting link.

## Availability

Video is a deployment-gated feature. It is available when the deployment has it
enabled (it is on for the hosted typelets.com). When enabled, the Video tab
appears in the workspace for members with an editing role.

It is **not** available to:

- Viewers (read-only members).
- Anonymous guests on a public/org-shared workspace.

## How it works

Video uses WebRTC through a selective forwarding unit (SFU): each participant
publishes audio (Opus) and video (VP8) once, and the server forwards streams to
the others. A room is created when the first participant joins and torn down
when the last one leaves. TURN/STUN is provided for participants behind
restrictive networks.

There is a per-room participant cap configured by the deployment.

## What it is not

Video is a live call only. It is **not** captured in interview
[recordings](/interviews/recording/) - recordings contain the code and run
timeline, not video frames. If you need the conversation preserved, record it
separately.
