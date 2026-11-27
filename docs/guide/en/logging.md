---
title: "Session activity and local logs"
description: "Review recent actions, export one session on Windows, or keep a rolling log on your computer."
order: 12
---

## Review a session

Open **Settings → Logging → View session activity** to see recent connections, transfers and other actions. The list clears when Arcnix exits. **Include the time in new entries** adds a timestamp to subsequent entries. On Windows, choose **Export session log…** to save a copy before closing the app.

## Keep entries after quitting

1. In **Settings → Logging → Local log**, turn on **Automatically save logs to this computer**. New entries are written to `arcnix.log`.
2. Under **Save logs in**, select a folder. If you type the path, select **Apply**. Clearing the path and applying it restores the default location.
3. Choose **Maximum size per file** and **Old log files to keep**. For example, 50 MiB and five old files keeps the current log plus up to five rotated files.
4. Select **Open local log** in Logging or Activity to read the current file. If there is no file yet, leave automatic saving on and perform an action such as connecting to a server.

**Restore logging defaults** restores the settings and preserves existing files. [Watch the logging walkthrough](/videos/local-logs/)

## Inspect a configuration repair

An older file association can name an application that Arcnix no longer recognizes. At startup, Arcnix backs up the original configuration, removes unsupported associations and keeps the other settings. Enable **Settings → General → Debug mode** for repair details. If Arcnix opens the settings read-only, restore a known-good configuration backup. [Configuration and records](/docs/records/)
