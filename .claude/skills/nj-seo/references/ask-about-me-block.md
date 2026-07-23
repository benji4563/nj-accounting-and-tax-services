# The "Ask all about me" AI-provider block

Every page on an NJ-style AI-SEO site ends with an **Ask all about me** block:
four buttons — ChatGPT, Claude, Perplexity, Gemini — that each open the
provider in a new tab with a prompt about the business pre-filled. It is a
low-cost way to turn AI assistants into a referral surface, and it signals
"we have nothing to hide — go ask a neutral third party."

It lives in the shared layout, so it renders once at the foot of **every**
page automatically. It is not something a blog post inserts per-page.

## Where it goes

- Component: `components/layout/AskAboutMe.tsx` (a client component — it
  copies the prompt to the clipboard on click).
- Mounted in `app/layout.tsx`, **between `<main>` and `<Footer />`**, so it
  sits above the footer on every route:

  ```tsx
  import { AskAboutMe } from '@/components/layout/AskAboutMe';
  // ...
  <main id="main-content" tabIndex={-1}>{children}</main>
  <AskAboutMe />
  <Footer />
  ```

## The prompt

One template, identical across all four buttons. Fill in the business name
and the canonical apex URL:

```
Tell me about <FULL NAME> of <BUSINESS NAME> based on <https://DOMAIN> —
summarise who they are, what they do, and how to get in touch.
```

For NJ's the live value is:

```
Tell me about Njock Simon of NJ's Accounting and Tax Services based on
https://njaccountstax.com — summarise who they are, what they do, and how
to get in touch.
```

## Provider URLs (prefill via ?q=)

`encodeURIComponent` the prompt and append it as `q`:

| Provider | URL pattern | Prefill support |
|---|---|---|
| ChatGPT | `https://chatgpt.com/?q=<Q>` | reliable |
| Claude | `https://claude.ai/new?q=<Q>` | reliable |
| Perplexity | `https://www.perplexity.ai/search?q=<Q>` | reliable |
| Gemini | `https://gemini.google.com/app?q=<Q>` | **no documented prefill** |

**Gemini has no documented prefill parameter** and may open on an empty
composer. Handle this by copying the prompt to the clipboard on every click
(all four, not just Gemini) and showing a small "Prompt copied — paste it if
your assistant opens empty" hint. That way the block works regardless of
which provider honours `?q=`.

## Non-negotiables

- Every button is a real `<a href>` with `target="_blank"` and
  `rel="noopener noreferrer"` — so it degrades gracefully without JavaScript;
  the clipboard copy is a bonus, not a dependency.
- The prompt string is **identical** across all four buttons (one const,
  referenced four times) — never let them drift.
- Uses the site's own tokens (`aubergine`, `ivory`, `section-eyebrow`, the
  `text-graphite/75` contrast rule). It is part of the brand system, not a
  bolt-on widget.
- Screen-reader text on each link naming the provider and what happens
  ("opens ChatGPT in a new tab with a question about <business> already
  filled in").

## Reference implementation

The working version is `components/layout/AskAboutMe.tsx` in the NJ's
Accounting repo. Copy it and change only the `PROMPT` constant (name,
business, domain) for a new client — the structure, providers, and
accessibility affordances stay identical.
