# AI Assistance

Skribane integrates artificial intelligence as a narrative co-pilot that knows your universe. The AI doesn't write for you — it assists when you need it, respecting your voice and creative decisions.

## Requirements

To use AI assistance you need:

1. At least one API key configured (OpenAI, Gemini, or Anthropic) — see [Configure AI](/en/configure-ai).
2. The AI kill switch must be disabled (it's disabled by default).
3. You must not have exceeded your monthly budget (if you configured one).

Alternatively, you can use a local AI server (LM Studio, Ollama) without needing an API key.

## Generate Scene

Generates a complete draft of a scene from its synopsis.

**How to use it:**
1. Write a synopsis on the scene card (Plan mode).
2. Open the scene in the editor.
3. Click the **Generate** button in the editor header.

**What the AI receives:**
- The scene synopsis.
- Narrative context: chapter synopsis, summary of previous scenes.
- Relevant Codex entries (mentioned characters, locations, objects).
- Your style configuration (tone, person, detail, reference).
- The configured POV and tense.
- The scene's directives / beats.

**Result:** The generated text appears in a preview panel. You can **accept** (replaces content), **discard**, or **regenerate**.

::: warning
If the scene already has content, you'll be asked for confirmation before replacing it.
:::

## Continue Scene

Continues writing where you left off.

**How to use it:** Click the **Continue** button in the editor header. Only appears if the scene already has content.

**Result:** The AI adds text at the end of what's written, maintaining coherence with the style, POV, and novel context.

## Improve Text

Refines a selected text fragment.

**How to use it:**
1. Select a text fragment in the editor.
2. Click the **Improve** button in the editor header.
3. Choose an option from the menu or write a custom instruction.

**Available options:**
- Improve writing
- More detail
- More emotion
- Fix style
- More concise
- Custom instruction

**Result:** The original text is shown alongside the improved text in a preview panel. You can accept (replaces the selection), discard, or regenerate.

## Summarize Scene

Automatically generates a synopsis from written content.

**How to use it:** Click the **Summarize** button in the editor header (only visible if the scene has content).

**Result:** The AI generates a 2-3 sentence synopsis you can accept (saved as the scene's synopsis) or discard.

You can also summarize an entire chapter from Plan mode by clicking the summary icon next to the chapter name.

## Review Coherence

Analyzes your manuscript for narrative inconsistencies.

**How to use it:**
1. Go to the **AI** tab in the right panel.
2. In the **Review coherence** section, choose the scope: current scene, current chapter, or entire manuscript.
3. Select the review types (you can check several): characters, plot, worldbuilding, temporal continuity.
4. Click **Review coherence**.

**Result:** A list of issues found, each with severity, type, description, and location. If no issues are found, a green "all clear" message appears.

A token and cost estimate is shown before running the review.

## Detect Characters

Finds characters in your text that aren't yet in the Codex.

**How to use it:**
1. Go to the **AI** tab in the right panel.
2. In the **Detect characters** section, choose the scope: scene, chapter, or manuscript.
3. Click **Detect characters**.

**Result:** The AI identifies existing Codex characters (confirming their appearance) and new characters not yet registered. New characters appear with checkboxes — select the ones you want and click **Create in Codex** to add them automatically.

For long manuscripts, detection runs in chunks (chapter by chapter) for more complete results.

## AI Fill (Fill Codex Fields)

Fills custom fields of Codex entries with AI.

**How to use it:** In any Codex entry's detail panel, hover over an empty custom field and click the AI icon (sparkle). The AI generates a value based on the entry's context and the Codex.

**Result:** The suggested text appears in green. You can accept or discard.

## Prompt Preview

Shows exactly what's sent to the AI.

**How to use it:** Click the prompt preview button in the editor header.

**Result:** A modal shows the complete system prompt (style instructions, POV, Codex, narrative context) and the user prompt, with a token count. You can copy everything to clipboard.

Useful for understanding how the AI "sees" your novel and for debugging when results aren't as expected.

## How Context Works

When the AI generates or improves text, Skribane automatically builds a context that includes:

1. **System instructions** — POV, tense, style, security directives.
2. **Style profile** — Tone, detail level, reference author (if configured).
3. **Narrative context** — Chapter synopsis, summary of previous scenes.
4. **Relevant Codex** — The most relevant entries based on the text you're writing, automatically selected by a scoring system that analyzes mentions of names, aliases, and entity type.
5. **Directives / Beats** — Your specific instructions for this scene.
6. **Narrative reinforcement** — A final reminder of POV and tense at the end of the prompt (models sometimes ignore initial instructions).

All of this is combined into an optimized prompt that respects the selected model's context limit.
