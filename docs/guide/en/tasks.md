---
title: "Tasks and recovery"
description: "Run reviewed tasks across servers and recover files from a backup snapshot."
order: 5
---

## Run a script

1. Open **Scripts**, choose a saved script or a built-in template, and select **Run on servers**.
2. Select up to 32 trusted servers. Fill in any script parameters and review all selected targets, including any hidden by a filter.
3. Run the preflight checks. Read the plan for each host and submit the hosts that are ready.

Submission uses systemd, `flock` and root or sudo on the server. Ordinary scripts run under the original SSH account. Software installation and service changes also use this review flow.

## Find the result after disconnecting

An acknowledged task continues on the server after Arcnix closes. In **Tasks**, expand the batch and choose **Query batch results** to read its logs and exit results. If the client disconnected while the status was **Submitting**, the server may already have accepted the work. Query the original task ID before retrying.

If the batch has dropped out of local history, use **Tasks → Server records** with the original server and account. This also lets you inspect a task from another installation that trusts the same host.

## Restore files from a backup

Directory backups use restic on the server. In **Backups**, create a policy with a source directory, repository and password-file path. Set the password file to mode `400` or `600`. Initialize the repository if needed, then run the backup and check the resulting snapshot.

1. In **Browse snapshots**, select the source server and snapshot. Open **Browse files** to select a file or directory. Selecting a directory includes its contents.
2. Choose a new destination directory. Review the snapshot ID, selected paths and destination before submitting.
3. Read the restore result and verify the files in the new directory.

Database policies use native logical exports. PostgreSQL can restore to a new database. MySQL and MariaDB exports are recovered as SQL files for a separate import.
