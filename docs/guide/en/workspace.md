---
title: "Files, editor and terminal"
description: "Move files over SFTP, edit remote text and play a video from the server."
order: 3
---

## Set a folder view

Open the gear in **Files** to choose a default view, icon size, sort order and visible columns. To change just the current folder, use its toolbar. For example, switch Pictures to icons and choose a larger size. When you return, Pictures remembers that choice. Choose **Use default view** in the folder menu to inherit your defaults again.

Press **Ctrl+H** in Files to show or hide hidden items across all folders. Their icons appear faded. This includes dotfiles and local Windows files and folders with the Hidden attribute.

## View an image or PDF

Double-click an image to open **Image Viewer**. Use the arrow keys for neighboring images, the wheel to zoom, and drag to pan when zoomed in. Press **0** to fit the image and **1** for actual size. Images up to 8 MiB are supported.

Double-click a PDF to open **PDF Reader**. Enter a page number and press **Enter**, or use **Page Up** and **Page Down**. Choose **Fit width** to read small text or **Fit page** to see the whole page. The reader handles PDFs up to 64 MiB and prompts for a password when required. Both viewers can fill the Arcnix desktop. Press **Esc** to restore the window size.

## Transfer files

Open **Transfer files** to see local and remote directories side by side. Navigate to the destination, then drag a file or folder from the other pane. Expand a transfer to see individual files and their progress. If a destination file already exists, review the conflict choice before continuing.

## Edit a remote file

In **File explorer**, right-click a UTF-8 text file and choose **Open in Code**. Use **Ctrl+S** to save through SFTP. If the server copy changed while you were editing, review it before saving again. Files larger than 1 MiB open in a read-only, chunked preview.

Use **Ctrl+Shift+F** to search the remote workspace. Select a match to jump to its line. For Markdown, press **Ctrl+K**, then **V** to open a preview alongside the source.

## Open a shell

Right-click a folder and choose **Terminal here** to start a shell in that remote directory. You can also open the integrated terminal in Code. Commands run as the SSH account you connected with. Where the server has tmux, the desktop terminal can resume a remote session.

## Play a remote video

On Windows x64, double-click an MP4 or MKV in the remote file list, or choose **Play** from its context menu. The player reads ranges over SFTP as you play or seek. WebView2 plays MP4 and the bundled libmpv runtime handles MKV. [Watch the player and editor demos](https://arcnix.org/)
