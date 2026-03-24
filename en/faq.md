# Frequently Asked Questions

## General

### Is my data secure?

Yes. Skribane is a desktop application — all your data (novels, Codex, configuration) is stored locally on your computer. There are no Skribane servers storing your content. Your AI API keys are kept in a secure local file, separate from the database.

### Do I need an internet connection?

Only for AI features that use cloud providers (OpenAI, Gemini, Anthropic). You can write, organize, edit, and export your novel completely offline. If you use local AI (LM Studio, Ollama), you don't need internet for AI either.

### What languages can I write in?

You can write your novel in any language. Skribane's interface is available in Spanish and English. The AI generates text in the same language you write your novel in — if you write in English, the AI responds in English.

### Can I have multiple projects at once?

Yes. You can create as many projects (novels) as you want. Each project has its own Codex, structure, statistics, and AI configuration. Switch between projects from the "Projects" section in the sidebar.

## License and trial

### How long is the free trial?

21 days, with all features unlocked. You don't need to sign up or enter payment details.

### What happens when the trial ends?

An activation screen appears. You need an active subscription to continue using Skribane. Your data is never deleted and you can always export your manuscript, even without a subscription. More details at [License and activation](/en/licensing).

### How does the subscription work?

Skribane works on a subscription: **€11.99/month** or **€9.99/month** billed annually (€119.88/year). While your subscription is active, you receive all updates (new features, bug fixes, security).

### What happens if I cancel my subscription?

You keep access until the end of your paid period. After that, a lock screen is displayed. You can always export your manuscript and your data is never deleted.

### How many computers can I use my license on?

Up to 2 computers simultaneously. If you need to switch computers, deactivate the license on the old one and activate it on the new one. More details at [License and activation](/en/licensing).

### I lost my license key

Your license key was sent by email after purchase. Look for an email from Lemon Squeezy. If you can't find it, write to contacto@skribane.com with your purchase details.

## Artificial Intelligence

### How much does AI usage cost?

Skribane doesn't charge for AI usage. You pay the provider directly (OpenAI, Google, Anthropic) based on your usage. Typical cost for novel writing is €5-15 per month. You can set a monthly budget in Skribane to control spending.

### Can I use AI for free?

Yes, with local models. Install [LM Studio](https://lmstudio.ai/) or [Ollama](https://ollama.com/), download a model (7B+ parameters recommended), and connect it to Skribane. Quality depends on your hardware, but it's completely free.

### Will the AI write my novel for me?

No. Skribane uses AI as a co-pilot: it helps you generate drafts, improve text, maintain coherence, and overcome creative blocks. You make all creative decisions. Every AI suggestion is shown in a preview panel where you decide whether to accept, discard, or regenerate.

### Which model should I choose?

Depends on your budget and priorities:

- **GPT-4o** or **Gemini 2.5 Pro** — Best quality, more expensive.
- **GPT-4o mini** or **Gemini 2.5 Flash** — Good quality/price balance for daily use.
- **Claude Sonnet 4** — Excellent for long, coherent text.
- **Claude Haiku 4.5** — Fast and affordable.

If you don't know where to start, GPT-4o mini or Gemini 2.5 Flash are good initial options with low cost.

### The AI generates text that doesn't respect the POV or tense

Make sure you have POV and tense configured in Options. Skribane injects these instructions into the prompt, but some models (especially smaller local ones) may ignore them. Cloud models (GPT-4o, Gemini 2.5, Claude Sonnet) follow these instructions well.

### The AI doesn't know my characters

Make sure your characters are in the Codex with complete names and descriptions. The AI automatically selects the most relevant entries for each scene. If an important character doesn't appear in the context, you can manually assign them to the scene from the editor header (characters per scene), or mark them as "Always include in AI" in their Codex entry.

## Import

### My Word document imports as a single chapter

This happens when the document doesn't have headings with Word styles (Heading 1, Heading 2). Skribane tries to detect patterns like "Chapter 1: Title", but if it can't find them, it imports everything as one scene. Solutions:

1. Use the **Reorganize with AI** button to have the AI detect the narrative structure.
2. Use the editable preview to split content manually.
3. Add headings in Word before importing (H1 = chapters, H2 = scenes).

## Installation

### Windows SmartScreen blocks the installer

This happens because the installer doesn't have a code signature. Click "More info" and then "Run anyway." Your data is completely safe — Skribane is a local desktop application that doesn't access any data outside its own folder.

### Where is my data stored?

In your operating system's application data folder:

- **Windows:** `C:\Users\YourUsername\AppData\Roaming\com.skribane.app\`

This folder contains the database (`skribane.db`) and the API keys file. It's not included in normal uninstallation, so your data survives a reinstall.

### How do I update Skribane?

Skribane automatically checks for updates at startup. If one is available, you'll see a yellow dot on the "Skribane v1.0.0" button in the sidebar. Click it to open the "About" panel where you can download and install the update.

It's recommended to create a backup before updating.
