# LinkedIn auto-posting — setup and how it works

Every blog post published by the `nj-seo-blog-post` routine is also posted to
the NJ's Accounting LinkedIn company page.

- **Company page:** https://www.linkedin.com/company/145227827
- **Mechanism:** Zapier MCP → LinkedIn `create_company_update`
- **Trigger:** step 11 of the daily `nj-seo-blog-post` routine, after the post
  is confirmed live in production
- **Set up:** 2026-09-25

---

## ⚠️ One-time setup you must do — it is not working until you do this

The Zapier LinkedIn connection exists (`Benjamin Enyong Njock`, connected
2026-09-13) but **its access token is missing**, so it cannot currently list
your company pages or post. Reconnect it here:

**https://mcp.zapier.com/api/v1/connect-auth/LinkedInCLIAPI?accountId=28664510&connectionId=66209388**

While reconnecting, two things must be true or posting will fail:

1. **You must be an admin of the company page.** Zapier's own help text:
   *"You must be an administrator of a Company Page for it to show up here."*
   Check at LinkedIn → Me → Manage → Company Pages.
2. **Grant the page/organization permissions** when LinkedIn asks. If you only
   grant personal-profile scopes, `create_company_update` cannot see the page.

After reconnecting, confirm it worked by asking Claude:

> Resolve the `company_id` enum for `linkedin_create_company_update`

You should get NJ's Accounting back in the list. Note the value it returns —
if it is not `145227827`, put the correct value in `LINKEDIN_COMPANY_ID` below
and in the routine prompt.

```
LINKEDIN_COMPANY_ID = 145227827
```

---

## What gets posted

Not an RSS dump. The routine writes the LinkedIn copy itself, because a post
that is just a headline plus a link performs badly. The shape:

- **A hook line** — the specific, surprising thing in the post, not the title.
  (e.g. *"Chicago's tax on your software went up 67% in January. Most owners
  still have not noticed."*)
- **2–4 short lines** of genuinely useful substance, so the post stands on its
  own for someone who never clicks.
- **The link**, on its own line, as a full URL.
- **3–5 hashtags**, relevant and lowercase-ish, no hashtag soup.

Constraints enforced in the routine:
- `comment` (post body) max 3,000 characters.
- Reserved characters must be escaped per LinkedIn's Little Text Format —
  **parentheses must be written `\(like this\)`**. This is the single most
  common cause of a failed or mangled post.
- `submitted_url` is the post URL, which gives the link preview card.
- `title` and `description` populate that card and both require
  `submitted_url` to be set.

## The call

```
execute_zapier_write_action
  tool_name: linkedin_create_company_update
  instructions: <natural-language description of the post>
  company_id: 145227827
  comment: <the post body, parentheses escaped>
  submitted_url: https://njaccountstax.com/blog/<slug>
  title: <post title, max 400 chars>
  description: <one-line summary, max 4086 chars>
```

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
