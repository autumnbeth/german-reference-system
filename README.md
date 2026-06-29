# German Learning System — Starter Kit

Two files that turn your Claude Design mockup into a real, repeatable site.

- **tokens.css** — every color, font, radius, and shadow from your design system,
  as CSS variables. The single source of truth. Import once, globally.
- **content-schema.ts** — the *shape* of every Situation and Foundation topic,
  with a fully worked `apotheke` example. Adding a new situation = copy this
  structure and fill it in. No page-coding.

The big idea: **content is data, visuals are reusable components.** You write
"Family → New Baby" as a data object; the components render it through the
tokens above. That's what fixes the maintainability problem your earlier
Markdown build had — and it lets the gorgeous design system scale to dozens
of pages.

---

## The design system in one screen

**Fonts:** Newsreader (serif → headings + reading) · Hanken Grotesk (sans → UI,
labels, nav) · JetBrains Mono (→ sentence structure only; fixed-width keeps
verb brackets aligned).

**Gender = color** (the core teaching cue, used everywhere a noun appears):
der = blue · die = pink · das = green · die-plural = orange.

**CEFR badges:** A green · B blue · C purple.

**Accent:** teal (switchable to indigo/coral). Three site-wide settings are
baked into the design: accent color, gender-colors on/off, translations on/off.
`tokens.css` already wires the last two to `data-` attributes on `<html>`.

**Components already designed** (just need building as Astro components):
gender-colored vocab cards + inline chips · the Satzbau diagram with
Verbklammer · dialogue blocks · annotated writing samples (formal email +
informal message) · CEFR progression table · callouts / confidence milestones ·
labeled media slots.

---

## How to start with Claude Code

Open Claude Code in a new empty folder and paste this:

> I'm building a German learning site in Astro, deploying to GitHub Pages.
> Two sections: a **Foundation** reference (visual grammar maps) and a
> **Situation library** (themed real-life pages — theme → subtheme, with
> A1–C1 level tabs). I want content stored as structured data and rendered
> through reusable components, not hand-coded pages.
>
> I have two starter files: `tokens.css` (my full design system as CSS
> variables) and `content-schema.ts` (the data shape for situations, with a
> worked Apotheke example). Read both first.
>
> Then, one step at a time, waiting for me to confirm each:
> 1. Scaffold a minimal Astro project + GitHub Pages deploy config.
> 2. Wire up `tokens.css` globally and load the three Google Fonts.
> 3. Set up an Astro content collection using my schema.
> 4. Build these components to match my design system exactly: VocabCard,
>    SentenceFrame (with Verbklammer), Dialogue, WritingSample, ProgressionTable,
>    Callout, CefrBadge, Milestones.
> 5. Build the Situation page layout: theme/subtheme nav + CEFR level tabs +
>    the per-level content from the schema.
> 6. Render the Apotheke example end-to-end so I can see one full page working.
>
> After Apotheke works, I'll add more situations as data files.

Have the original `design-system.html` ready to share too — Claude Code can read
the exact spacing and structure straight from it when building components.

---

## Build order (the discipline that matters)

1. Tokens + fonts working.
2. **One** component (start with VocabCard — simplest, shows the gender-color system).
3. The Satzbau diagram (your signature component).
4. The full Apotheke situation page, end to end.
5. *Only then* scale: add situations as data, port the Foundation grammar
   content into this visual language.

Build one vertical slice completely before going wide. Apotheke proves the
template; everything after is data entry.

---

## Migrating your existing content

Your current site's strong content (the grammar-map CEFR tables, case system,
knowledge graph) is worth keeping — but re-expressed in *this* design system,
not the old dark "structure map" style. Pick this system as the single visual
language and don't merge the two. The progression tables port almost directly
into `ProgressionRow[]`; the case tables become gender-colored tables using the
same tokens.
