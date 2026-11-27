---
title: "Monitoring and Docker"
description: "Find a service log or inspect a container, its published ports and its volumes."
order: 4
---

## Read a service log

Open **Desktop → Monitor** for CPU, memory, disk and network information from the connected server. Open **Services**, select a systemd unit and open its journal to see recent messages. The process view includes port details for identifying the process listening on a given address.

To set the default sampling interval for server desktops, open **Settings → Monitoring → Resource refresh interval**. Choose 3, 5, 10 or 30 seconds.

## Install a server app

Open the App Center on the connected server desktop and select an application. Review the installation methods available for that host, such as a system package, Snap or Docker Compose. Check the selected server and installation plan before submitting the task. Use **Tasks** to follow its progress or retrieve the result after reconnecting.

## Inspect a container

Arcnix detects Docker when your SSH account can access the server’s Docker socket. Open **Docker → Containers**, find a container by name or image and select it. Check its status, port mappings and mounts, or choose **Logs** to fetch recent output. To start, stop or restart it, review the named container and confirm.

## Find a volume or port

In **Volumes**, select a volume to see its mount point and the containers that use it. In **Ports**, inspect published mappings. For containers using host networking, use the server listeners in Monitor.

**Projects** is where you manage supported Compose projects. If Docker is missing from the desktop, check that the daemon is running and that the SSH account has socket access, then detect applications again in desktop settings.

[Watch the Docker walkthrough](/videos/docker/) · [Watch Monitor](/videos/monitor/)
