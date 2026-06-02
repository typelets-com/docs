---
title: Video
description: Optional in-workspace video calls and screen sharing over WebRTC.
---

Typelets includes a multi-party video room scoped to a workspace, so you can
talk face to face, and share your screen, without a second tab or a separate
meeting link.

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
the others. A shared screen, when one is active, is published the same way as an
additional video stream. A room is created when the first participant joins and
torn down when the last one leaves. TURN/STUN is provided for participants
behind restrictive networks.

There is a per-room participant cap configured by the deployment.

## Screen sharing

Anyone in the call can share their screen. Sharing is Meet-style: one screen is
shared at a time, and starting a share while someone else is already sharing
takes over from them. You do not need your camera on to share, so you can
present with video off.

A shared screen opens as a tab in the editor area for everyone in the room, so
it sits beside the files instead of covering the call. From that tab you can pop
the screen out into a floating, always-on-top window using your browser's native
picture-in-picture, which is useful while you read or type elsewhere.

Sharing ends when the sharer stops it, uses the browser's own "Stop sharing"
control, or leaves the call.

## What it is not

Video and screen sharing are a live call only. They are **not** captured in
interview [recordings](/interviews/recording/) - recordings contain the code and
run timeline, not video or screen frames. If you need the conversation
preserved, record it separately.
