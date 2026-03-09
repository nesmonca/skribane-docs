# The Codex

The Codex is your narrative universe bible. Here you define everything that exists in your story: characters, locations, objects, factions, power systems, and timeline. The AI automatically consults the Codex when generating or improving text, allowing it to maintain coherence with your universe.

## Entry Types

Skribane organizes the Codex into six categories:

- **Characters** — The beings in your story (protagonists, antagonists, supporting characters).
- **Locations** — Cities, buildings, regions, planets, dimensions.
- **Objects** — Weapons, artifacts, vehicles, important documents.
- **Factions** — Organizations, governments, clans, families, guilds.
- **Systems** — Magic systems, technologies, universe laws.
- **Timeline** — Historical events, eras, key moments from the past.

You can access each category from the **Universe** section in the left sidebar, which shows the entry count per type.

## Creating an Entry

You have two ways to create entries:

1. **From the sidebar** — Click a Universe category (e.g., Characters) and type the name in the list field.
2. **"+ New entry" button** — The green button at the top of the sidebar, or the `Ctrl+N` shortcut, opens a type selector.

## Detail View

When selecting an entry from the list, the detail panel opens with:

- **Name** — Directly editable.
- **Description** — Free text to describe the entry. This field is the one the AI uses most when building context.
- **Aliases / Nicknames** — Alternative names for the entry (see section below).
- **Notes** — Private text for your author notes. Also included in AI context.
- **Custom fields** — Key-value pairs for structured information.
- **Tags** — Colored labels for organizing and filtering.
- **Relations** — Connections with other Codex entries.
- **Progressions** — How the entry evolves throughout the story.

Everything saves automatically as you type (every half second).

## Aliases / Nicknames

A character can have multiple names: a real name, a nickname, a title, an alias. For example, a character named "Mizu" might have the aliases "The Captain" and "Water Shadow."

To add an alias, type in the aliases field and press Enter. Aliases appear as chips you can remove with ×.

Aliases are important because:

- The AI recognizes them when searching for relevant entries for a scene (if you write "The Captain" in your text, the AI will connect that name to Mizu).
- They're included in the context sent to the AI as "also known as..."
- Character detection uses them to avoid duplicates.

## Custom Fields

Custom fields let you add structured information to each entry. When creating a new entry, Skribane preloads suggested fields based on the type:

- **Characters** — Age, Role, Motivation, Appearance, Personality.
- **Locations** — Location, Sensory description, Importance, Population.
- **Objects** — Owner, Power/Function, Origin, Current status.
- **Factions** — Leader, Goal, Territory, Notable members.
- **Systems** — Power source, Rules, Limitations, Users.
- **Timeline** — Period, Key events, Consequences.

You can add, rename, or delete fields as you wish. You can also click the AI icon next to an empty field to have the AI fill it automatically based on the rest of the entry's information and the Codex.

## Tags

Tags are colored labels that help you organize and filter entries. For example, you could create tags like "Protagonist", "Northern Alliance", "Arc 2", or "Needs development."

To create a tag, type in the tags field and press Enter. You can choose a color and the tag is created globally for the entire project. You can then assign it to any entry.

To edit a tag (name or color) or delete it from the project, click on it to open the editing popover.

## Relations

Relations connect entries to each other bidirectionally. For example:

- Mizu *is an enemy of* Kael
- The Northern Fortress *belongs to* The Alliance
- The Runic Sword *was created by* Arthan

To create a relation, open an entry's detail panel, go to the relations section, select the related entry from the dropdown, and type the relation type. The relation automatically appears in both entries.

## Progressions

Progressions capture how an entry evolves throughout the story. A character might start as a farmer and end as a king. A location might be destroyed in act 2. A power system might change its rules.

Each progression has a title (e.g., "Act 1", "After the battle") and descriptive text. You can associate progressions with specific points in the novel.

The AI uses the active progression (the most relevant one for the scene you're writing) when generating context.

## Exclude from AI Context

If you have Codex entries you don't want the AI to consider (discarded drafts, future ideas, sensitive material), you can mark them with the "Always include in AI" option disabled. The AI will ignore them when building context.

## Search Entries

The search bar at the top of the Codex list filters entries by name in real time.

## Detect Characters with AI

If you already have written text, you can use the **Detect characters** function (in the AI tab of the right panel) to have the AI analyze your manuscript and detect characters not yet in the Codex. Detection can be done by scene, chapter, or entire manuscript.

Detected characters are shown in a list where you can select which ones to create in the Codex with a single click.
