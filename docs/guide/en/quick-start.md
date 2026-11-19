---
title: "Quick start"
description: "Connect to your first server and open a terminal in a remote folder."
order: 1
---

## Before you connect

Install Arcnix on your computer. Have the server address, SSH port, username and either a password or a private key ready. A server you already reach with SSH is a good first choice. [Installation and downloads](https://arcnix.org/docs/install/)

## Add the server

1. Open **Servers** and choose **Add server**. Give the connection a name you will recognize.
2. Enter the host, port (usually `22`) and SSH username. If you use a key, select the private key on your computer.
3. Save the profile, select it in **Servers** and click **Connect**. Enter the password or key passphrase if prompted.

On the first connection, compare the displayed host-key fingerprint with one supplied by the server administrator. Choose **Trust and save** to remember a verified host for later connections.

## Try the workspace

Open **Desktop → File explorer**, browse to a remote folder you can read, then right-click it and select **Terminal here**. Run `pwd`. The path printed by the remote shell should match the folder you selected.

If the connection times out, check the address, port and network route. If SSH connects but the file list fails to load, check that SFTP is enabled and that this account can read the directory.
