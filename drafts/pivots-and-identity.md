# Outpost: Pivots, Identity & Content Strategy

## Current State

- **outpost.chat** — AI app builder with a "collective" model (providers in Supabase, `/collective` page, dynamic `/[person]` profiles)
- **/dean** — Your personal profile page, currently a provider card with links to LinkedIn, dean.coffee, Spark Labs
- **Brand voice** — "Ship, don't slide" / anti-corporate / serif + warm cream palette / nature imagery
- **No blog or content system yet**

---

## 1. The /dean Page — Making It Personal

The current `/dean` page is a provider card. It should feel more like a *personal homepage within the Outpost ecosystem* — your identity as founder, not just another provider.

### Suggested additions

- **"Building in Public" feed** — A chronological stream of what you're shipping. Not a traditional blog — more like annotated project snapshots. Each entry: a title, 1-3 sentences, an optional image/embed, and a date. Think changelog meets personal log.
- **Projects grid** — Port the best of dean.coffee here. "I made a game," the open call setup, Spark Labs, Maestro stuff from bean.coffee. Each one is a card with a screenshot, a short description, and a link. This replaces the need for people to go find your work across 4 different sites.
- **Dashboard / PR view screenshots** — You mentioned wanting these. Add a "What I'm Working On" section with 2-3 screenshots in a carousel or side-by-side layout. Video-style format works — even a looping 10-second screen recording (no audio needed) auto-playing muted would feel alive.
- **Outpost icon integration** — The Outpost arch icon should sit next to your name, not just in the navbar. It signals "Dean is Outpost, Outpost is Dean" without being heavy-handed. Consider the arch as a monogram — the O of Outpost *is* the icon.
- **Founder badge** — A small `FOUNDER` pill next to your field badge, or replace the field badge entirely with something like `FOUNDER · ENGINEERING`. Differentiate yourself from other collective members.

### Tone shift

The current page reads like a resume. It should read like a *studio*. You're not listing qualifications — you're showing what you build. Less "Work with me" pitch, more "Here's what I've been making."

---

## 2. The Collective — Naming & Framing

You're right: "collective" is the word. Not "team" (too corporate), not "agency" (too transactional). **The Outpost Collective** or just **The Collective**.

### Why it works

- Implies equality — everyone builds, everyone ships (already in your values)
- Feels creative and intentional, not just a roster
- Pairs well with "Outpost" — outposts are remote, independent, intentional. A collective at an outpost = a small group of capable people doing real work far from the noise

### On the page

- Keep `/collective` as the URL
- The header already says "The Collective." — that's perfect
- Consider adding a one-liner under each person: not their title, but their *thing*. "Ships React apps in 48 hours." "Turns Figma into production code." Action-oriented, not credential-oriented.

---

## 3. Blog / Content Strategy — The Social-First Approach

You don't need a traditional blog. You need a **content pipeline that starts on social and gets surfaced on your site.**

### The architecture

```
You write/record something
    ↓
AI formats it into a thread (Twitter/X or Threads)
    ↓
Thread gets posted programmatically
    ↓
Outpost site pulls the thread via embed/API and displays it
    ↓
Optional: a "long read" version lives on Substack for SEO/discoverability
```

### Platform ranking (your instinct is right)

| Platform | Reach | API flexibility | Embed quality | Verdict |
|----------|-------|-----------------|---------------|---------|
| **Instagram** | Highest for visual | Limited posting API, no story API for display | Good grid embeds via oEmbed | Best reach but hardest to automate. Use for curated visuals, not as primary blog. |
| **Twitter/X** | High for tech/builder audience | Good embed support, API accessible (paid tier) | Excellent — `twitter-tweet` embeds are well-supported, customizable with `data-theme` | **Best primary platform.** Embeds look native, threads = blog posts, discoverable. |
| **Threads** | Growing, Meta's push | API exists but limited. No embed support yet (as of early 2025). | Poor — no official embed widget | Skip for now. Revisit when embeds mature. |
| **Bluesky** | Niche but growing | Open AT Protocol, very hackable | Limited embed support | Good for cred, not for content distribution yet. |
| **Substack** | Good SEO, newsletter distribution | No posting API. Manual or Zapier. | Decent embeds | Use as the *archive*, not the *primary*. |

### Recommendation

**Twitter/X as primary content rail.** Here's why:

1. **Threads = blog posts.** Write a thread of 4-8 tweets. That's your "blog post." Each tweet is a paragraph.
2. **Embeds are excellent.** You can embed individual tweets or full threads with `twitter-tweet` widgets. They support dark/light themes and look good in any layout.
3. **AI can auto-post.** Twitter API v2 lets you post threads programmatically. Your pipeline: dictate a voice memo → AI transcribes → AI formats into a thread → posts to Twitter → your site pulls the thread ID and embeds it.
4. **Discoverable.** Tech Twitter is still the best platform for reaching the builder/founder audience Outpost targets.

### On the site

Create a `/log` or `/posts` page (or put it on `/dean`):

- Pulls your latest Twitter threads via API or oEmbed
- Each entry shows: date, thread preview (first tweet text), embedded thread on click/expand
- Optional: tag threads by topic (`#shipping`, `#outpost`, `#builds`)
- Add an RSS-style "Subscribe" link that goes to your Twitter profile

### Instagram strategy (secondary)

- Use Instagram for *visual portfolio* — screenshots of apps you've built, before/after of designs, short Reels of deploys
- Don't try to programmatically post stories — the API doesn't support it and won't soon
- Instead: manually post to Instagram when you have something visual, and pull your grid into the `/dean` page via Instagram Basic Display API (read-only, very simple)
- The grid becomes a visual portfolio section on your profile

---

## 4. LinkedIn — Leveraging What You Have

LinkedIn is an underrated channel for B2B/professional services. You're already there.

### Strategy

- **Cross-post your Twitter threads as LinkedIn posts.** Same content, slightly reformatted (no thread structure, just paragraphs). LinkedIn's algorithm rewards long-form text posts.
- **Tag Outpost in every post.** Create a LinkedIn company page for Outpost if you don't have one.
- **"Building Outpost" series** — Weekly or biweekly post about what you shipped. These perform extremely well on LinkedIn. "This week we built [X] for a client. Here's what we learned." Screenshot attached.
- **Don't overthink it.** LinkedIn content doesn't need to be polished. Authenticity > production value. Voice-memo-to-post pipeline works perfectly here.

### Integration with the site

- Add a LinkedIn feed section on `/dean` or `/about` — even just a "Latest on LinkedIn" link with your 3 most recent post titles
- Your LinkedIn banner should match the Outpost visual identity — the arch icon, the warm palette, the serif font

---

## 5. Outpost Visual Identity — Tightening Up

### The icon

The current Outpost arch icon is strong. To make it work harder:

- **Use the arch as the "O"** in "Outpost" for a wordmark. The arch replaces the letter O, then "utpost" follows in the serif font. This creates a distinctive wordmark without needing a separate logo.
- **Circle variant** — The arch inside a circle works as an app icon / favicon / social avatar. You already have this (`OutpostIcon.svg`). Make sure it's consistent everywhere.
- **Door concept** — You mentioned making it look more like a door. The arch already reads as a doorway (arch over a smaller arch = door in a wall). Lean into this: "Your door to getting it built." Subtle, don't over-explain it.

### Color system

You already have the `astra` palette (warm cream to near-black). Stick with it. Don't introduce new brand colors for the blog/content — keep everything in the same tonal range so content feels *part of* Outpost, not bolted on.

### Typography

The serif (Nimbus-style) + mono combination is distinctive. Use it consistently in social content too — if you're creating quote graphics or thread images for Twitter/Instagram, use the same fonts.

---

## 6. What NOT to Do

- **Don't build a chat widget.** You flagged this yourself — a chat bot on the site that uses a free model is a liability. It's not monetizable, it creates support burden, and if it gives bad answers it hurts the brand. If you want AI on the site, make it the *product demo* (show what Outpost builds), not a customer service bot.
- **Don't fragment across platforms.** Pick Twitter as primary, Instagram as secondary visual, LinkedIn as professional amplifier. Don't also do Threads, Bluesky, YouTube, TikTok, Substack, Medium, and a custom blog. Three platforms, max.
- **Don't build a full blog CMS.** Embed social content. The platform is the CMS. You're building a software product, not a publishing company.
- **Don't make the /dean page about "content."** Make it about *work*. The content is evidence of work, not the product itself.

---

## 7. Quick Wins — What to Build First

1. **Upgrade `/dean` page** — Add a projects grid, a founder badge, and the Outpost icon next to your name. Data can be hardcoded for now.
2. **Twitter thread embeds** — Add a "Log" section to `/dean` (or a `/log` route) that embeds your 5 most recent Twitter threads. Use the Twitter oEmbed API — no auth needed for public tweets.
3. **LinkedIn banner** — Update your LinkedIn banner to match Outpost branding. The arch icon + "Outpost" wordmark + tagline on the warm cream background.
4. **Outpost wordmark** — Create the arch-as-O wordmark. Use it in the navbar and on social.
5. **Instagram grid on /dean** — Pull your Instagram grid (last 9 posts) into a visual section on your profile page.

---

## 8. Content Pipeline (Tactical)

```
Voice memo (you talking)
    ↓
Whisper transcription (or built-in phone transcription)
    ↓
AI reformats into:
  - Twitter thread (4-8 tweets, punchy, each stands alone)
  - LinkedIn post (same content, paragraph format, more professional tone)
  - Instagram caption (if there's a visual — shorter, more casual)
    ↓
Review in a simple UI or just approve via text
    ↓
Auto-post via Twitter API v2, LinkedIn API, Instagram Content Publishing API
    ↓
Site pulls latest threads/posts and displays them
```

The key insight: **you're already creating the content** (this voice memo is proof). You just need the pipeline to format and distribute it. The AI layer between "Dean talks" and "content appears on 3 platforms + the website" is the entire system.
