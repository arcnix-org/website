---
title: "Arcnix 0.3.12 release notes"
description: "Manage Redis, use Ctrl+/ in the terminal, and update manually with a read-only configuration."
order: 11
---

## Manage Redis data and services

The new Redis app discovers instances on the server and in Docker. Browse databases and keys, inspect and edit strings, hashes, lists, sets and sorted sets, and manage key expiration. The app also provides diagnostics and service controls. Creating a key preserves any existing key with that name. Editing a string checks the key's type and keeps its existing expiration.

## Use Ctrl+/ in the terminal

The terminal now forwards **Ctrl+/** as **Ctrl+_**, allowing applications such as Codex CLI to recognize the shortcut.

## Update with a read-only configuration

You can manually check for, download and install Arcnix updates even when your configuration is read-only. Automatic downloads and installation when idle remain disabled, and updating does not write to the read-only configuration.

[Download Arcnix 0.3.12](/downloads/) · [Full changelog on GitHub](https://github.com/arcnix-org/arcnix/blob/v0.3.12/CHANGELOG.md)
