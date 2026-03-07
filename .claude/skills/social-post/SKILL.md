---
name: social-post
description: Generate a branded Outpost social media post for Twitter and/or LinkedIn with optional visual card
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
  - mcp__pencil__batch_design
  - mcp__pencil__batch_get
  - mcp__pencil__get_screenshot
  - mcp__pencil__find_empty_space_on_canvas
  - mcp__pencil__get_editor_state
---

# /social-post — Generate an Outpost Social Post

Generate a social media post for Outpost using the brand voice, visual identity, and content pillars.

## Arguments

`$ARGUMENTS` — A topic, theme, or content pillar to write about. Can include:
- A specific topic (e.g., "AI workflow automation for law firms")
- A content pillar (e.g., "Ship It", "How We Work", "AI Perspective", "Social Proof", "Product", "Culture")
- A platform preference (e.g., "twitter only", "linkedin only", or both by default)
- A visual card type (e.g., "quote card", "stat card", "case study card")

## Brand Context

Read these files for brand voice and style:
- `content/social-calendar-60day.md` — Content pillars, voice guidelines, hashtag strategy, and 60-day calendar
- `app/globals.css` — Brand color tokens (Astra light palette, Umbra dark palette)

### Brand Voice (from calendar)
- **Tone**: Confident, direct, slightly provocative. Anti-enterprise, pro-speed.
- **Format preferences**: Short sentences. Line breaks for emphasis. Concrete numbers over vague claims.
- **Avoid**: Corporate jargon, "leverage", "synergy", buzzword bingo, emojis in every line.
- **Hashtags**: Use sparingly. Primary: #BuildWithAI #OutpostAI. Only 1-2 per post max.

### Brand Colors
- **Astra (light)**: bg #FAF8F5, text #271A00, muted #271A0099
- **Umbra (dark)**: bg #000000, text #D6D5D4, muted #D6D5D499

### Content Pillars
1. **Ship It** (Mon/Thu) — Case studies, build stories, speed narratives
2. **How We Work** (Tue) — Process transparency, tooling, methodology
3. **AI Perspective** (Wed) — Industry takes, trends, contrarian views
4. **Social Proof** (Thu) — Client results, metrics, testimonials
5. **Product** (Fri) — Features, capabilities, announcements
6. **Culture** (Weekend) — Team, values, behind-the-scenes

## Output Format

### For each post, output:

```
## [Platform] Post

**Pillar**: [Content pillar]
**Visual**: [None / Quote Card / Stat Card / Case Study Card]

---

[Post text here]

---

**Hashtags**: #tag1 #tag2
**Best time to post**: [Suggested time]
**Image guidance**: [Description of visual if needed]
```

### Platform-specific rules:
- **Twitter/X**: Max 280 chars. Punchy, single idea. Thread format (2-4 tweets) for longer content.
- **LinkedIn**: 1300 chars max. More narrative, professional but not corporate. Use line breaks.

## Visual Card Templates (designs.pen)

If a visual card is requested, create it in `designs.pen` using these template node IDs as reference:
- **Quote Card Dark** (THbKh): 1080x1080, black bg, serif quote text, arch watermark
- **Quote Card Light** (eoCRn): 1080x1080, warm white bg, accent bar, serif quote
- **Stat Card** (BlZ4G): 1200x630, dark bg, large hero number, supporting text
- **Case Study Card** (Oq88I): 1200x630, light bg, "CASE STUDY" label, before/after format

To create a visual: copy the relevant template using `C()` operation, then update text content with `U()`. Use `find_empty_space_on_canvas` to position the new card.

### Font mapping for Pencil:
- Serif (Georgia) → "Cormorant Garamond"
- Sans (system-ui) → "Inter"
- Mono → "JetBrains Mono"

## Process

1. Read `content/social-calendar-60day.md` for voice reference and existing content patterns
2. Determine the content pillar and platform(s) from `$ARGUMENTS`
3. Write the post(s) in the brand voice
4. If a visual card is requested, copy and customize a template in designs.pen
5. Output the formatted post(s) with posting guidance
