# Configure AI

Skribane gives you full control over which AI you use and how. You choose the provider, the model, and the spending limits. Your API keys are stored securely on your computer and are never sent to any Skribane server.

## Accessing Settings

Click **Config** at the bottom of the left sidebar.

## Cloud AI Providers

Skribane supports three AI providers, each with its own strengths:

### OpenAI

- **Models:** GPT-4.1 (premium), GPT-4.1 mini (balanced), GPT-4.1 nano (fast and affordable)
- **Context window:** 128K tokens
- **Get API key:** [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Key format:** Starts with `sk-`

### Google Gemini

- **Models:** Gemini 2.5 Pro (premium), Gemini 2.5 Flash (fast), Gemini 2.5 Flash Lite (affordable)
- **Context window:** Up to 1M tokens
- **Get API key:** [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
- **Key format:** Starts with `AIza`

### Anthropic Claude

- **Models:** Sonnet 4.6 (balanced, 1M context), Haiku 4.5 (fast and affordable, 200K context)
- **Context window:** Up to 1M tokens
- **Get API key:** [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
- **Key format:** Starts with `sk-ant-`

To configure a provider, enter your API key in the corresponding field and click save. The key is stored in a secure local file on your computer, never in the database or the cloud.

## Local AI (Free)

If you prefer not to use cloud providers, you can run AI models on your own computer with:

- **[LM Studio](https://lmstudio.ai/)** — Desktop application for running local models.
- **[Ollama](https://ollama.com/)** — Command-line tool for local models.

To configure local AI in Skribane:

1. In the Config section, enable the **Local AI** option.
2. Enter your local server URL.

::: warning Important
The URL must include `/v1` at the end. For example: `http://localhost:1234/v1`. Without this suffix, the connection won't work.
:::

The quality of local models depends on your computer's power. For novels, a model of at least 7B parameters is recommended. Smaller models (< 4B) may give incoherent results for creative writing tasks.

## Model Selection

You can choose from curated models (up to 3 per provider) or enter a **custom model ID** to use any new model the provider offers, without waiting for a Skribane update.

Each model's information shows: context window and approximate cost per 1K tokens (input and output).

::: tip Remote Catalog
Skribane automatically updates the catalog of available models at startup (if there's an internet connection). This allows adding new models or retiring deprecated ones without needing to update the application.
:::

## Maximum Tokens per Request

Configure the maximum number of tokens the AI can generate per response (between 100 and 16,000). A higher value allows longer responses but consumes more credits.

For reference: 1,000 tokens equals approximately 750 words.

## Monthly Budget

You can set a monthly budget in euros. When the limit is reached, Skribane will block AI requests until the next month. Set 0 to disable the limit.

The monthly usage counter resets automatically at the beginning of each month.

## Kill Switch

The kill switch disables all AI functionality at once. Useful if you want to write without AI assistance for a period or if you need to control spending. All AI buttons are disabled and no requests are sent.

## API Key Security

Your API keys are stored locally in a secure file in the application's data folder, separate from the database. They are never sent to Skribane servers — they go directly from your computer to your chosen AI provider.

Keys are shown masked in the interface (e.g., `sk-proj-••••••••89`) to protect them from prying eyes.

## Style Profile

In **Options** (sidebar) you can configure a style profile that the AI will use as guidance:

- **Tone** — Literary, colloquial, formal, poetic, etc.
- **Detail level** — Concise, balanced, descriptive.
- **Reference** — Name of an author whose style you admire as a guide.
- **Free instructions** — Any additional direction for the AI.

You can also analyze a reference .docx document with the "Analyze .docx" function to have the AI automatically extract the style profile. A fragment of **3 to 5 pages** of narrative prose that represents the style you want to emulate works best.
