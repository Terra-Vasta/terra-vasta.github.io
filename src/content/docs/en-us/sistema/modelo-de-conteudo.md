---
title: Content model
description: How game entities are stored to power the site.
---

Skills, feats, and spells each get one Markdown file. Frontmatter stores fields used in tables, catalogs, and filters; the Markdown body stores the full text. These same files power individual pages and lists.

## Localization and slugs

Each language has a file under its locale folder (`pt-br` or `en-us`) and shares a `translationKey` to relate translations. The filename defines a stable lowercase slug without accents, with words separated by hyphens. Duplicate titles are allowed; the slug and translation key distinguish entries.

## Publication

`published` defaults to `true` when omitted. With `published: false`, an entry is left out of tables and lists. Its individual page may still exist and be reachable by direct URL, as defined for this project.

## Entity fields

- **Skill:** title, ability, and example use.
- **Feat:** title, category, and optional prerequisite.
- **Spell:** title, integer level (including level 0), path/school, range, and cost/action.

Game text and values will come from SRD 5.2.1 or original material approved for Terra Vasta. This page does not create fictional rules or entries.
