# Editor

The editor is where you write your novel. It's a full-featured word processor with rich formatting, continuous auto-save, and integrated AI assistance.

## Opening a Scene

Double-click a scene card in Plan mode, or use Write mode and select the scene from the breadcrumb at the top.

The **breadcrumb** at the top always shows your location: `Act › Chapter › Scene`.

## Text Formatting

The editor toolbar offers standard formatting options:

- **Undo / Redo** — Ctrl+Z / Ctrl+Shift+Z
- **Bold** — Ctrl+B
- **Italic** — Ctrl+I
- **Underline** — Ctrl+U
- **Strikethrough**
- **Headings** — H1, H2, H3
- **Bullet list** and **numbered list**
- **Blockquote**
- **Horizontal rule**

## Auto-Save

Everything you write is saved automatically every half second. No need to press Ctrl+S. The word count updates in real time.

## Word Count

In the editor header you'll see the number of words and characters for the current scene, updating in real time as you type.

## Highlighter

You can highlight text fragments with colors to mark notes, plot holes, or things to review.

Select text and use the highlighter button in the toolbar to choose a color. Available colors are predefined (yellow, green, blue, pink, orange, and red).

To remove a highlight, select the highlighted text and click "Remove highlight."

::: info Highlights in Exports
Currently, highlights are exported as plain text without background color in DOCX. In the export settings you can choose whether to include highlighted text.
:::

## Customize the Editor

Click the gear icon in the editor header to open the customization panel. You can adjust:

- **Font** — Serif (Lora), Sans-serif (Manrope), or Monospace (JetBrains Mono).
- **Font size** — From 14px to 28px.
- **Line height** — From 1.2 to 2.4.
- **Paragraph spacing** — From 0.5em to 2.5em.
- **Editor width** — 6 options from 560px to 860px.

These preferences are saved automatically and also apply in Focus mode. They don't affect exports — only your writing experience.

You can restore default values with the "Reset" button.

## Focus Mode

Focus mode removes all distractions so you can concentrate solely on writing.

**Activate:** Click the maximize icon next to the word count, or press `Ctrl+Shift+F`.

**Exit:** Press `Escape`.

In Focus mode:

- The top bar, sidebar, and right panel disappear.
- The editor fills the entire screen with a clean background.
- Only a discreet word count is shown at the top (low opacity that increases on hover).
- **Typewriter scrolling** keeps the active line centered on screen, so you don't have to scroll manually.
- If you have an ongoing AI operation (generation, improvement, etc.), the results panel remains visible.

Editor customization preferences (font, size, width) also apply in Focus mode.

## AI Assistance in the Editor

From the editor header you have access to AI functions:

### Generate Scene

Only visible if the scene has a synopsis. Click "Generate" and the AI will write a full draft based on the synopsis, the novel's context (previous scenes, Codex), and your narrative settings (POV, tense, style).

If the scene already has content, you'll be asked for confirmation before replacing it.

### Continue

Only visible if the scene has content. The AI adds more text where you left off, maintaining coherence with the style, POV, and novel context.

### Improve Text

Select a text fragment and click "Improve." A dropdown menu offers predefined options:

- Improve writing
- More detail
- More emotion
- Fix style
- More concise
- Custom instruction (write your own direction)

The AI generates an improved version shown in a preview panel. You can **accept** (replaces the selection), **discard**, or **regenerate**.

### Summarize Scene

If the scene has content, you can click "Summarize" to have the AI automatically generate a synopsis based on the written text. Useful for keeping synopses up to date without writing them manually.

### Prompt Preview

The prompt preview button lets you see exactly what's sent to the AI: the complete system prompt and user prompt, with a token count. You can copy the prompt to clipboard. Useful for debugging or understanding how the AI sees your novel.

## Directives / Beats

Directives (also called "beats" in other tools) are instructions you give the AI to guide generation for a specific scene. They're accessed from the **Directives** tab in the right panel.

Examples of directives:

- "Tension scene between Mizu and the captain"
- "Don't mention the artifact yet"
- "Melancholic tone, slow pacing"
- "Focus on sensory descriptions of the port"

Directives are automatically included in the AI prompt when you generate or continue the scene. They are not exported to the manuscript — they're internal instructions between you and the AI.

## Return to Plan

Click the **← arrow** in the upper left corner of the editor to return to Plan mode.
