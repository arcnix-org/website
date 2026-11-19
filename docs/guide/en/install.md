---
title: "Installation and updates"
description: "Choose the right desktop package and find out how to update it."
order: 2
---

## Windows x64

For a first installation, choose **Windows → Download installer**. Run the installer under your Windows account and open Arcnix from the Start menu. For portable use, download **Portable ZIP**, extract the whole folder to a writable location and run `arcnix.exe`. Both packages require the WebView2 Runtime. [Download Arcnix for Windows](https://arcnix.org/#downloads)

## macOS

Use the Apple Silicon archive on macOS 13 or later. Extract it, move `Arcnix.app` to Applications and open it. The distributed app is ad-hoc signed and has not been notarized by Apple. [Download for macOS](https://arcnix.org/#downloads)

## Linux

Choose the archive for your computer’s CPU. `uname -m` reports `x86_64` for x64 and `aarch64` for ARM64. Extract the archive, open the extracted directory in a graphical session, and run `./arcnix`. The client requires glibc 2.39 or later, GTK 3 and WebKitGTK 4.1. On Ubuntu 24.04 the runtime packages are `libgtk-3-0t64` and `libwebkit2gtk-4.1-0`. [Download for Linux](https://arcnix.org/#downloads)

## Updating

On Windows x64, open **Settings → Updates** to check for stable releases. The change to ZIP-based updates takes effect after v0.3.1. If you are running v0.3.1 or earlier, install the first ZIP-aware release manually once. That client can then download the portable ZIP, verify it and replace the program when your SSH session and tasks are finished.

On macOS and Linux, download the archive for the new release. The downloads section also links to the SHA-256 checksums for each package.
