---
title: "Arcnix 0.3.8 release notes"
description: "Run Docker images, manage registry logins and browse SFTP folders that contain non-UTF-8 filenames."
order: 9
---

## Docker

- Run an image as a Compose project. Choose its ports, volumes, environment variables and restart policy, then preview the Compose file before starting it.
- Check pulled image tags for updates. Pull a newer image from the image list, or update a managed Compose project to recreate its containers with the new images.
- Review disk usage and clean up unused images or build cache. Before removing a selected image, Arcnix rechecks its ID and looks for containers that depend on it.
- Manage registry logins for the SSH user. The registry list shows registry and credential-helper names. Open **Networks** to see subnets and attached containers, or choose **Shell** in a running container’s details to open a terminal for that container.

## SFTP

A folder can contain a filename that cannot be decoded as UTF-8. The file browser now shows the other entries and reports how many it skipped. If you download the whole folder, Arcnix stops before writing any files and identifies the affected directory so you can resolve the filename and retry.

## Nginx

Open the Nginx app to inspect sites and logs for a server installation or an Nginx container. You can edit a site, review the changes and test the configuration before reloading it.

[Download Arcnix 0.3.8](/#downloads) · [Full changelog on GitHub](https://github.com/arcnix-org/arcnix/blob/v0.3.8/CHANGELOG.md)
