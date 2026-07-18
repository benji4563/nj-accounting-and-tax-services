# NJ's Accounting and Tax Services — Project Rules

This project follows the **website-builder** skill.

- Skill location (Obsidian mirror): `Afrishield cyber security.md/Skills/website-builder/SKILL.md`
- Skill location (this project's own brain, tracked in Git/GitHub): `NJ's Accounting and Tax Services/Skills/website-builder/SKILL.md`

For **improving this website (or any website) by cloning a reference**, use the **clone-website** skill.

- Auto-loaded from: `.claude/skills/clone-website/SKILL.md` (Claude Code discovers it automatically)
- Obsidian mirror: `Afrishield cyber security.md/Skills/clone-website/SKILL.md`
- Git-tracked reference copy: `NJ's Accounting and Tax Services/Skills/clone-website/SKILL.md`
- Trigger: any request to clone, replicate, rebuild, reverse-engineer, or copy a site — pass the target URL(s) as arguments.

For **building a new AI-SEO website from scratch end-to-end** (brand → specs → keyword clustering → Next.js scaffold → blog pipeline → city pages → Vercel deploy → custom domain), use the **ai-seo-website-builder** skill.

- Auto-loaded from: `.claude/skills/ai-seo-website-builder/SKILL.md`
- Obsidian mirror: `Afrishield cyber security.md/Skills/ai-seo-website-builder/SKILL.md`
- Git-tracked reference copy: `NJ's Accounting and Tax Services/Skills/ai-seo-website-builder/SKILL.md`
- Trigger: any request to build a website, launch a marketing site, or create an SEO-optimised site from scratch — pass the business name and one-line brief as arguments.
- Reference case: `njaccountstax.com` — the site codified in this skill was built in a single working day from `git init` to live custom-domain HTTPS.

For **expanding geographic SEO coverage with city/service landing pages** from keyword data, use the **city-landing-pages** skill.

- Auto-loaded from: `.claude/skills/city-landing-pages/SKILL.md`
- Git-tracked reference copy: `NJ's Accounting and Tax Services/Skills/city-landing-pages/SKILL.md`
- Trigger: any request to create city pages, location pages, or service-area pages from a keyword file — pass the keyword file path as argument.
- Pairs with `ai-seo-website-builder` as a follow-on step after the site is live.

Before doing anything, read:
1. `brand-guidelines.md` — the brand system (voice, colours, type, do's/don'ts)
2. `project_specs.md` — what we're building and what "done" looks like
3. The skill file above

If any of those files are missing, create them first. **No code before `project_specs.md` is approved.**

## About the client
NJ's Accounting and Tax Services is a small-business accounting + tax firm. Their promise: **transparent pricing, responsive communication, and peace of mind so owners can focus on growth while NJ handles the finances.** Full brand system lives in `brand-guidelines.md`.

## Non-negotiables for this client
- Voice is **plain-spoken, calm, jargon-free**. Never sound like a stuffy accounting firm.
- Design is **premium, restrained, trustworthy**. No stock imagery of handshakes or skyscrapers.
- Use the palette + type stack defined in `brand-guidelines.md` — never invent colours ad-hoc.
- Every page must make the client's small-business owner feel: *"I can trust these people with my books."*

---

# AfriShield — Client: NJ's Accounting & Tax Services

## Scope of this folder — READ CAREFULLY

**This is a client instance, not the product template.**

This folder contains NJ's Accounting & Tax Services' actual live AI website
and SEO deployment — built on top of AfriShield's AI SEO service
(`../../02-Services/ai-seo/`). It has been split off from what was
originally a combined folder; this copy now holds only NJ-specific content.

## Hard rule for the agent

- Changes here are specific to NJ. **Do not modify the generic AI SEO
  template (`../../02-Services/ai-seo/`) from within this folder's context**,
  even if a fix or feature seems generally useful — flag it to the user
  instead, so it can be deliberately promoted to the template.
- Do not pull in template updates automatically. If the AI SEO template
  changes, that does not mean this client's live site should change too —
  confirm with the user first.

## What belongs here

- NJ's actual branding, content, domain/hosting config
- NJ-specific customizations that diverge from the base template
- Client-specific credentials/config (keep out of version control if
  sensitive — use env vars / secrets management, not committed files)

## What does NOT belong here

- Generic, reusable AI SEO logic meant for future clients — that belongs in
  the template at `../../02-Services/ai-seo/`
- Any other client's data
