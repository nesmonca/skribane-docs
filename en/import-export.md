# Import and Export

Skribane lets you import existing novels from Word documents and export your manuscript to professional DOCX or PDF format.

## Accessing

Click **File** in the top bar or press `Ctrl+5`. You'll see two tabs: Import and Export.

## Import from Word (.docx)

### Select File

Click **Select file** and choose a .docx document from your computer. Skribane analyzes it and detects the structure automatically:

- **H1** headings are interpreted as chapters.
- **H2** headings are interpreted as scenes.
- If there are no headings, Skribane looks for patterns like "Chapter 1: Title", "Capítulo 3", "Part 2", etc.
- If no structure is detected, it's imported as one chapter with one scene.
- Text before the first heading is created as an "Introduction" chapter.

Formatting is preserved: bold, italic, underline, lists, and quotes are maintained.

### Editable Preview

Before importing, you can edit the detected structure:

- **Rename** chapters and scenes (click the name).
- **Split** a scene in two (scissors icon).
- **Merge** two consecutive scenes (combine icon).
- **Delete** scenes or chapters.
- **Reorder** scenes with up/down arrows.
- **Restore** the original structure if you don't like the changes.

### Reorganize with AI

If the detected structure isn't good (e.g., a document without headings), you can click **Reorganize with AI** to have the AI analyze the text and suggest a chapter/scene structure based on the narrative content.

### Destination

Choose where to import:

- **New project** — Creates a new project with an editable name (defaults to the file name).
- **Current project** — Adds chapters and scenes to the last act of the open project.

### Import

Click **Import** and wait for processing. Word counts are calculated automatically for each scene.

## Export to DOCX

Generates a professional Word document of your manuscript.

### Format Options

- **Include cover page** — Page with title, author, genre, and description.
- **Chapter numbering** — "Chapter 1", "Chapter 2", etc.
- **Scene separator** — Asterisks (***), dashes (---), blank line, or page break.
- **Include synopses** — Adds each scene's synopsis below its name (useful for review, not for publication).
- **Include highlights** — Includes highlighted text (exported as text without background color).
- **Typography** — Choose the final document's font (Times, Georgia, Garamond, Arial, Calibri).

### Save

When clicking **Export DOCX**, a native dialog opens to choose where to save the file. The suggested name includes the project name.

## Export to PDF

Generates a professionally formatted PDF.

Options are the same as for DOCX. The PDF uses US Letter format with 1-inch margins.

Serif fonts (Times, Georgia, Garamond) map to Times in the PDF, and sans-serif fonts (Arial, Calibri) map to Helvetica. Below the font selector, the actual font that will be used in the PDF is displayed.

## Manuscript Summary

The export tab shows a summary:

- Total word count.
- Number of chapters and scenes with content.
- Progress toward the total goal.

You can also expand a view of the complete structure (acts, chapters, scenes with status and word count).
