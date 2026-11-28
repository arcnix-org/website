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

## Find the Windows configuration

The default Windows configuration file is now `%APPDATA%\Arcnix\config.json`. On a normal startup, Arcnix migrates the previous default configuration and its related data. If you use `--config`, Arcnix continues to use the path you supplied.

[Download Arcnix 0.3.13](/downloads/) · [Full changelog on GitHub](https://github.com/arcnix-org/arcnix/blob/v0.3.13/CHANGELOG.md)
