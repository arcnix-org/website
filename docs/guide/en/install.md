---
title: "Installation and updates"
description: "Choose the right desktop package and find out how to update it."
order: 2
---

## Windows x64

For a first installation, choose **Windows → Download installer**. Run the installer under your Windows account and open Arcnix from the Start menu. For portable use, download **Portable ZIP**, extract the whole folder to a writable location and run `arcnix.exe`. Both packages require the WebView2 Runtime. [Download Arcnix for Windows](/downloads/#windows)

## macOS

On macOS 13 or later, choose the **Apple Silicon** DMG for a Mac with an Apple M-series chip or the **Intel** DMG for a Mac with an Intel processor. Open the disk image, drag `Arcnix.app` to Applications, then launch it from Applications. The distributed app is ad-hoc signed and has not been notarized by Apple. [Download for macOS](/downloads/#macos)

## Linux

Choose the archive for your computer’s CPU. `uname -m` reports `x86_64` for x64 and `aarch64` for ARM64. Extract the archive, open the extracted directory in a graphical session, and run `./arcnix`. The client requires glibc 2.39 or later, GTK 3 and WebKitGTK 4.1. On Ubuntu 24.04 the runtime packages are `libgtk-3-0t64` and `libwebkit2gtk-4.1-0`. [Download for Linux](/downloads/#linux)

## Updating

On Windows x64, open **Settings → Updates** to check for stable releases. Arcnix verifies the portable ZIP and replaces the program when your SSH session and tasks are finished. If an in-app update is unavailable, use the installer or portable ZIP.

For macOS, download the new DMG. For Linux, download the new archive for your CPU. The downloads section also links to the SHA-256 checksums for each package.
