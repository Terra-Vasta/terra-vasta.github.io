---
title: Content model
description: How entities and game tables are structured on the site.
---

Skills, feats, and spells will each have one Markdown file. Frontmatter stores fields used by tables, catalogs, and filters; the body stores the full content.

## Entity summary

| Entity | Summary table fields | Site presentation |
| --- | --- | --- |
| Skill | Name, Ability, Example use | Summary, alphabetical list, individual page |
| Feat | Name, Category, Prerequisite | Summary, alphabetical list, individual page |
| Spell | Name, Level, Path/School, Range, Cost/Action | Tables by level and individual pages |

## Table examples

### Standard table

Use a Markdown table for short content and quick reference.

| Skill | Ability | Example use |
| --- | --- | --- |
| Acrobatics | Dexterity | Keep your balance |
| Arcana | Intelligence | Recognize a magical symbol |

### Large table

Place `::table-large[Table title]` immediately before the table. This variant adds an accessible caption, alternating row colors, and horizontal scrolling on narrow screens.

::table-large[Example skill catalog]

| Skill | Ability | Example use |
| --- | --- | --- |
| Acrobatics | Dexterity | Keep your balance on a narrow surface |
| Arcana | Intelligence | Identify magical symbols or phenomena |
| Athletics | Strength | Climb, jump, or swim |
| Stealth | Dexterity | Move without drawing attention |

## Terms with popups

In any `.md` page, write `:term[Acrobatics]{href="/en-us/sistema/modelo-de-conteudo/#acrobatics"}`. The popup fetches its preview from the destination page, so the summary is not duplicated beside the link.

## Acrobatics

### Popup preview

This is only a visual example. The preview block supports paragraphs, **emphasis**, lists, images, and other Markdown elements.

![Ruins of a city surrounded by mist.](/images/taavira-hero-cidade-nevoa.webp)

- Content stays on the destination page.
- Links to the full page remain available.

### Full content

Content outside the block appears normally on the page and is not copied into the popup.

The popup appears beside the term, with a gap, and flips when needed to keep the term visible. Hover or focus the term; on touch screens, tap to open.

## Localization, slugs, and publication

Each language has its own file and shares a `translationKey`. Filenames define stable lowercase slugs without accents. `published` defaults to `true`; entries with `published: false` stay out of public tables and lists.

The game text and values will come from SRD 5.2.1 or original material approved for Terra Vasta. This page does not define rules.
