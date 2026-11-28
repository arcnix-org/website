---
title: "Arcnix 0.3.13 release notes"
description: "Use images from your server as wallpapers, follow uploads and downloads in the toolbar, and find your Windows configuration in its new location."
order: 13
---

## Use a server image as your wallpaper

Open **Settings → Appearance → Wallpaper → Add Wallpaper** and choose an image already on the server. Arcnix caches the original locally and creates a 320×180 WebP preview for the gallery. Identical images share one cached copy across paths and servers.

The tag on a thumbnail marks a custom wallpaper. Restoring the theme wallpaper keeps your gallery. Removing a custom wallpaper keeps the server file and frees the cached files when the last reference is removed.

In the same Appearance page, the accent color palette now offers 36 presets.

## Follow transfers in the toolbar

A progress ring around the upload or download icon shows how far transfers in that direction have advanced. In Settings, hover over a restore icon or focus it with the keyboard to see which settings it restores.

## Windows startup and configuration

The default configuration file is `%APPDATA%\Arcnix\config.json`. When both configurations exist, Arcnix opens this file and leaves the old directory intact. It migrates the old configuration and related data only if the new file is missing. With `--config`, Arcnix opens the path you supply.

The revised Windows build fixes startup after an all-users installation. Each user's WebView2 data is stored in `%LOCALAPPDATA%\Arcnix\WebView2`, so opening the app from Program Files requires no administrator privileges.

If you installed the first 0.3.13 build, download the installer again and run it over your existing installation. The version number is the same, so the in-app updater will not offer it. For a portable installation, close Arcnix and replace `arcnix.exe` with the copy from the new ZIP.

[Download Arcnix 0.3.13](/downloads/) · [Full changelog on GitHub](https://github.com/arcnix-org/arcnix/blob/v0.3.13/CHANGELOG.md)
