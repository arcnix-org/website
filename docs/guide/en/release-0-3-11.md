---
title: "Arcnix 0.3.11 release notes"
description: "Browse server-local sites from Linux, recover incompatible file associations, and choose which activity logs to keep."
order: 10
---

## Browse server-local sites from Linux

Open the built-in browser from a connected server desktop to reach web services through SSH. You can enter a server-side hostname, an IP address, or a loopback address such as `127.0.0.1:8080`. Tabs for one server share its browsing data, and each server has a separate browser context. The Linux browser supports Wayland and X11.

## Recover file associations

If your configuration contains an unrecognized application for opening a file type, Arcnix backs up the original and removes the invalid association. Valid handlers and other settings are preserved. Open **Settings → General → Debug mode** to see the repair details. A configuration that cannot be repaired safely opens read-only.

## Keep a local activity log

In **Settings → Logging**, **Session activity** shows recent connections, transfers, and other actions. On Windows, **Export session log** saves a copy even with automatic saving turned off. To keep future entries after you quit, turn on **Automatically save logs to this computer**. Choose a folder, a size limit per file, and how many old files to keep. **Open local log** opens the current `arcnix.log`.

## Other changes since 0.3.8

The file manager adds a parent-folder button and wraps long filenames in icon view. The terminal accepts input method text. This release also includes fixes for blank Linux desktop windows, the dark-theme file-size checkbox, and Docker image update detection. Source builds now use Rust 1.100.0.

[Download Arcnix 0.3.11](/#downloads) · [Full changelog on GitHub](https://github.com/arcnix-org/arcnix/blob/v0.3.11/CHANGELOG.md)
