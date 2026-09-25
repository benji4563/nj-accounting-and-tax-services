# LinkedIn auto-posting — setup and how it works

Every blog post published by the `nj-seo-blog-post` routine is also posted to
the NJ's Accounting LinkedIn company page.

- **Company page:** https://www.linkedin.com/company/145227827
- **Mechanism:** Zapier MCP → LinkedIn `create_company_update`
- **Trigger:** step 11 of the daily `nj-seo-blog-post` routine, after the post
  is confirmed live in production
- **Set up:** 2026-09-25

---

## Status: connected and verified (2026-09-25)

The Zapier LinkedIn connection was reconnected on 2026-09-25 and the company
page now resolves:

```
company_id: "145227827"  ->  "Njaccountstax"
```

### The one non-obvious thing: connection_id must be passed explicitly

`connection_id: 66209388` is **required on every call**. Without it the action
fails with:

> Authorization error: Authorization access_token missing for LinkedIn.

...even though `list_zapier_connections` reports the connection as healthy and
freshly refreshed. The default-connection path does not pick up the token; only
an explicit `connection_id` does.

It is a **number** (`66209388`, from the `connectionId` query param on the
reconnect URL) — *not* the connection UUID that `list_zapier_connections`
returns as `connection_id`. Passing the UUID errors with
`expected number, received NaN`.

If the token expires again, reconnect at:

**https://mcp.zapier.com/api/v1/connect-auth/LinkedInCLIAPI?accountId=28664510&connectionId=66209388**

and re-verify with:

> Resolve the `company_id` enum for `linkedin_create_company_update`, connection_id 66209388

Two things must stay true or posting breaks:

1. **You must remain an admin of the company page.** Zapier: *"You must be an
   administrator of a Company Page for it to show up here."*
2. **Organization/page scopes must be granted**, not just personal-profile
   scopes.

---

## What gets posted — voice is not optional

Not an RSS dump, and not a straight-faced summary either.

**Every LinkedIn post must be written through the
`anthropic-skills:seo-blog-humor-style` skill.** Invoke it before writing the
copy — the same skill the blog posts themselves go through. This is a standing
rule set by Ben on 2026-09-25, and the reasoning is the whole strategy:

> Accounting is a boring niche. Funny and interesting is the differentiator.
> A correct, dull post about tax liens is indistinguishable from every other
> firm's correct, dull post about tax liens, and it will be scrolled past.

Calibration for this audience: NJ's talks to small-business owners, and the
brand guidelines say *plain-spoken, calm, jargon-free — never a stuffy
accounting firm.* That earns more comedic latitude than a government or
enterprise buyer would, so run warm and personality-forward, not cautious.

### The shape

- **A hook that breaks the ice** — recognition humor works best here. Name the
  thing the reader has actually experienced so precisely that they think
  "that is exactly it." Never the headline restated.
- **An everyday analogy** doing the teaching, so the mechanism lands without
  jargon.
- **2–4 short lines of real substance**, so the post stands alone for someone
  who never clicks. The jokes sit *around* the facts, never inside them — a
  wrong-but-funny post costs more than a dull one.
- **One beat of light self-deprecation**, aimed at the firm. Never at the
  reader, never at a competitor.
- **A running callback** — plant something small in the hook, bring it back in
  the sign-off, so the post reads authored rather than assembled.
- **The full URL** on its own line.
- **3–5 relevant hashtags.** No hashtag soup.
- **A wry sign-off**, not "read more."

### Non-negotiables from the skill

- PG-13 ceiling. Nothing political, controversial, or divisive — ever.
- Universal references only. If a joke needs a cultural or generational
  footnote, cut it.
- Sprinkle, don't slather. A LinkedIn post is short, so beats land closer
  together than in a blog post, but humor is still seasoning.
- At least one moment must feel specific and authored, not generic filler.

## How it posts: Zapier Catch Hook webhook

**The Zapier MCP path does not work.** `execute_zapier_write_action` needs its
fields inside a `params` record; the server publishes no property schema for
the tool, so an object passed as `params` is serialized to a string and
rejected with `expected record, received string`. Flattened fields are silently
dropped, and describing the values in `instructions` does not fill them either.
The connection itself is healthy — `company_id` 145227827 resolves to
"Njaccountstax" — so this is a call-path problem, not an auth problem.

A Catch Hook sidesteps it: we POST plain JSON, the Zap maps the fields onto
LinkedIn's Create Company Update.

### The script

`.claude/skills/nj-seo/scripts/post_to_linkedin.py`

```bash
python .claude/skills/nj-seo/scripts/post_to_linkedin.py     --comment-file <file holding the post body>     --url https://njaccountstax.com/blog/<slug>     --title "<post title>"     --description "<one-line summary>"
```

Use `--comment-file`, not `--comment` — it keeps newlines and quotes intact
through the shell. Add `--dry-run` to see the exact payload without sending.

It refuses to send bad content before it reaches LinkedIn:

| Guard | Exit |
|---|---|
| Comment over 3,000 chars | 3 |
| Unescaped `(` or `)` — the Little Text Format trap | 3 |
| Title over 400 / description over 4,086 | 3 |
| No `LINKEDIN_WEBHOOK_URL` configured | 2 |
| Webhook unreachable or non-2xx | 4 |

It flags unescaped parentheses rather than auto-escaping them: silently
rewriting someone's copy is worse than making them look at it.

### Setup

1. In Zapier: **Webhooks by Zapier → Catch Hook** as the trigger,
   **LinkedIn → Create Company Update** as the action.
2. Copy the Catch Hook URL. It looks like
   `https://hooks.zapier.com/hooks/catch/1234567/abcdefg/` — *not* the
   `zapier.com/editor/...` address, which is just the editor page.
3. Put it in `.env.local` at the project root:
   ```
   LINKEDIN_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXXXX/YYYYYYY/
   ```
   `.env.local` is gitignored. **Never commit the hook URL** — anyone holding
   it can post to the page.
4. Prime the field mapping so Zapier learns the shape:
   ```bash
   python .claude/skills/nj-seo/scripts/post_to_linkedin.py --test
   ```
5. In the Zap's action step, map:

   | LinkedIn field | Webhook field |
   |---|---|
   | Update Content | `comment` |
   | LinkedIn Company Page | `company_id` — or hard-code 145227827 |
   | Media URL | `submitted_url` |
   | Preview - Title | `title` |
   | Preview - Description | `description` |

6. Turn the Zap on.

A 200 from the hook means **Zapier accepted** the payload, not that LinkedIn
published it. If a post does not appear, check the Zap's run history.

## Failure policy

LinkedIn posting is **step 11, after** the blog post is confirmed live. It is
deliberately last and deliberately non-fatal: if LinkedIn fails, the blog post
has already shipped and that is the thing that matters. The routine reports the
failure plainly rather than retrying in a loop or marking the run as failed.

## If you would rather not depend on the desktop app

The routine only runs while the Claude desktop app is open. If you want posting
to happen regardless, the alternative is a native Zapier Zap:

- **Trigger:** RSS by Zapier → New Item in Feed → `https://njaccountstax.com/rss.xml`
- **Action:** LinkedIn → Create Company Update

That runs in Zapier's cloud on its own schedule and needs no local process.
The trade-off is post quality: a Zap can only template the feed fields
(title, excerpt, link), so you lose the written hook. Reasonable fallback,
weaker posts. You can also run both if you are careful not to double-post —
they would need different triggers.
