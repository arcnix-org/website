---
title: "Open a website through SSH"
description: "Reach a service that listens on the server’s own loopback address from the Windows or Linux desktop."
order: 11
---

## Open the server’s browser

Connect to the server over SSH and open **Web browser** from its desktop. On Windows and Linux, this browser reaches websites through the selected SSH connection. In the address bar, enter the URL you would use from that server. For a service listening on port 8080 on its loopback interface, enter `http://127.0.0.1:8080`.

## Choose the address

Use the hostname or IP address reachable from the server, including the port if the service uses one. An explicit `http://` or `https://` selects the protocol. If the site does not load, check that the SSH session is connected, that the service is running, and that its listening address and port match the URL.

## Work with more than one server

Open another tab in the same server browser to reuse that server’s browsing session. In the Linux client, each server has a separate browser context. To reach a service on a second server’s loopback interface, open the browser from that server’s desktop. The Linux client supports Wayland and X11. [Explore the workspace](/workspace/)
