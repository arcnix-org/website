---
title: "Configuration and records"
description: "Back up client settings and inspect stored server records or cleanup reports."
order: 6
---

## Back up client settings

Open **Settings → General → Back up configuration**. Choose a folder and file name, review the snapshot, then save the JSON. It contains server profiles, scripts, preferences and backup policies. A private-key path in the snapshot points to a file on your computer. Back up that key separately.

To restore, choose **Restore configuration** and read the JSON. Review the replacement settings and finish active operations before applying them. Arcnix keeps a copy of the previous configuration and preserves this computer’s SSH trust records. Store the exported JSON privately because saved scripts and presets may contain sensitive text.

## Inspect server records

Use **Tasks → Record storage** to check how much space server-side task and configuration records use. Select the account and inspect the retention preview. The default policy keeps records younger than seven days, the ten newest task records and three verified configuration backups per destination. Active records and records needed for recovery stay protected.

## Review cleanup and exports

Previewing a cleanup only reads metadata. To remove records, review the exact files for each server and submit the cleanup task. This requires administrator access. Deletion is permanent.

If a cleanup stops partway through, open **Tasks → Cleanup reports** and inspect the original job. Its report shows which files were removed and which may remain in private staging. Where an export is available, review the remaining files, export them, and verify the downloaded ZIP. Removing the staged originals is a separate action.
