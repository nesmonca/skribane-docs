# Backup and Restore

Skribane lets you create complete backups of your data and restore them when needed. Your novels are valuable — back up regularly.

## Accessing

Click **Config** in the sidebar and scroll down to the **Backups** section.

## Create a Backup

Click **Create backup**. A native dialog opens to choose where to save the file. The suggested name includes the date and time.

The backup is a .zip file containing:

- **Complete database** — All your projects, acts, chapters, scenes, content, Codex, statistics, AI configuration.
- **API keys** — Your AI provider keys (stored securely).
- **Metadata** — App version, creation date, indicator of whether keys are included.

When finished, the created file size is displayed.

## Restore a Backup

Click **Restore backup** and select a backup .zip file.

Before restoring, Skribane shows a backup preview:

- Creation date.
- File size.
- Number of projects it contains.
- Whether it includes API keys.

::: warning Destructive Action
Restoring a backup replaces **all** your current data (projects, Codex, configuration). This action cannot be undone. You'll be asked for confirmation before proceeding.
:::

Skribane automatically creates a safety copy of your current data (`.pre-restore` files) before restoring, in case something goes wrong.

## Integrity Validation

When restoring, Skribane automatically verifies:

- That the file is a valid Skribane backup (contains correct metadata).
- That the database is not corrupt (`PRAGMA integrity_check`).
- That the main tables exist.

If any verification fails, the restore is cancelled and your current data remains intact.

## Recommendations

- Create a backup before updating Skribane to a new version.
- Back up regularly (at least once a week if you're actively writing).
- Store backups in a different location than your computer (external drive, cloud, etc.).
- The backup does not include editor preferences (font, size) or the light/dark theme, which are stored separately.
