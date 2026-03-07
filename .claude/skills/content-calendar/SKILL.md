---
name: content-calendar
description: Generate a branded Outpost content calendar for Twitter and LinkedIn over a specified time period
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
---

# /content-calendar — Generate an Outpost Content Calendar

Generate a structured content calendar for Outpost's social media presence across Twitter and LinkedIn.

## Arguments

`$ARGUMENTS` — Time period, theme focus, or special parameters. Examples:
- "2 weeks" or "30 days" or "Q2 2026"
- "focused on AI perspective and case studies"
- "product launch week for new dashboard feature"
- "conference week — AI Summit 2026"

If no time period specified, default to 2 weeks (14 days).

## Brand Context

Read these files first:
- `content/social-calendar-60day.md` — The master 60-day calendar. Use this as the definitive style reference for voice, format, pillar rotation, and post structure.
- `app/globals.css` — Brand color tokens

### Weekly Cadence (from master calendar)
| Day | Platform | Pillar |
|-----|----------|--------|
| Monday | Twitter + LinkedIn | Ship It |
| Tuesday | Twitter + LinkedIn | How We Work |
| Wednesday | Twitter | AI Perspective |
| Thursday | LinkedIn + Twitter | Social Proof |
| Friday | Twitter + LinkedIn | Product |
| Weekend | Twitter | Culture (lighter) |

### Brand Voice Rules
- **Tone**: Confident, direct, slightly provocative. Anti-enterprise, pro-speed.
- **Twitter**: Short, punchy. Single idea per tweet. Threads for depth (2-4 tweets).
- **LinkedIn**: Narrative, uses line breaks. Professional but not corporate. 1300 char max.
- **Hashtags**: Max 1-2 per post. Primary: #BuildWithAI #OutpostAI
- **Avoid**: Corporate jargon, emoji overuse, "leverage", "synergy", vague claims without numbers.

### Content Pillar Details
1. **Ship It** — Real build stories, case studies, speed. "We built X in Y days."
2. **How We Work** — Process transparency, AI tooling, methodology. Show the craft.
3. **AI Perspective** — Industry hot takes, trend analysis, contrarian views on AI hype.
4. **Social Proof** — Client wins, metrics, before/after. Numbers talk.
5. **Product** — Feature spotlights, capability demos, announcements.
6. **Culture** — Team personality, values, behind-the-scenes. Weekend/lighter tone.

## Output Format

Write the calendar to `content/social-calendar-[descriptor].md` where `[descriptor]` describes the period (e.g., `social-calendar-q2-2026.md`, `social-calendar-launch-week.md`).

### Structure each day as:

```markdown
### Day N — [Day of Week], [Date]
**Pillar**: [Pillar Name]
**Platforms**: Twitter, LinkedIn

**Twitter**:
> [Full post text, ready to copy-paste]

**LinkedIn**:
> [Full post text, ready to copy-paste]

**Visual**: [None / Quote Card / Stat Card / Case Study Card — with description]
**Notes**: [Any context, timing suggestions, or tie-ins]

---
```

### Calendar header should include:
```markdown
# Outpost Content Calendar — [Period Description]

**Generated**: [Date]
**Platforms**: Twitter (X), LinkedIn
**Posting cadence**: Daily (weekdays primary, weekends lighter)
**Brand voice**: Confident, direct, anti-enterprise, pro-speed

## Overview
[2-3 sentence summary of themes and goals for this period]

## Key Themes
- [Theme 1]
- [Theme 2]
- [Theme 3]

---
```

## Process

1. Read `content/social-calendar-60day.md` to absorb voice, style, and existing patterns
2. Determine the time period and any thematic focus from `$ARGUMENTS`
3. Plan the pillar rotation following the weekly cadence
4. Write fully fleshed-out posts for each day (not outlines — actual ready-to-post content)
5. Include visual guidance for posts that would benefit from a card/image
6. Save to `content/social-calendar-[descriptor].md`
7. Summarize the calendar with post count, pillar distribution, and key themes

## Tips
- Vary post formats: questions, statements, threads, lists, stories
- Reference real Outpost capabilities from the website (AI app building, workflow automation, 72-hour delivery, etc.)
- Create narrative arcs within weeks (e.g., Monday case study → Thursday results from same client)
- For special events/launches, front-load anticipation posts and follow with recap content
- Keep a mix of evergreen and timely content
