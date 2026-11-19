---
title: "Files, editor and terminal"
description: "Move files over SFTP, edit remote text and play a video from the server."
order: 3
---

## Transfer files

Open **Transfer files** to see local and remote directories side by side. Navigate to the destination, then drag a file or folder from the other pane. Expand a transfer to see individual files and their progress. If a destination file already exists, review the conflict choice before continuing.

## Edit a remote file

In **File explorer**, right-click a UTF-8 text file and choose **Open in Code**. Use **Ctrl+S** to save through SFTP. If the server copy changed while you were editing, review it before saving again. Files larger than 1 MiB open in a read-only, chunked preview.

Use **Ctrl+Shift+F** to search the remote workspace. Select a match to jump to its line. For Markdown, press **Ctrl+K**, then **V** to open a preview alongside the source.

## Open a shell

Right-click a folder and choose **Terminal here** to start a shell in that remote directory. You can also open the integrated terminal in Code. Commands run as the SSH account you connected with. Where the server has tmux, the desktop terminal can resume a remote session.

## Play a remote video

On Windows x64, double-click an MP4 or MKV in the remote file list, or choose **Play** from its context menu. The player reads ranges over SFTP as you play or seek. WebView2 plays MP4 and the bundled libmpv runtime handles MKV. [Watch the player and editor demos](https://arcnix.org/)
