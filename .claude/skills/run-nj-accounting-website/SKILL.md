---
name: run-nj-accounting-website
description: Build, run, and drive the NJ's Accounting and Tax Services marketing website (Next.js 14 App Router). Use when asked to start the site, run a production build, audit performance/accessibility with Lighthouse, take a screenshot of a page, or click through a live page to verify a change.
---

This is a Next.js 14 (App Router) marketing site with no backend of its
own beyond a contact-form API route. There is no native desktop
surface and no `chromium-cli` tool in this environment — the driver is
the **Claude Code Browser pane** (`mcp__Claude_Browser__*` tools),
which drives a real headless-ish browser tab against the dev server.
Start the dev server, then drive it with `preview_start` /
`navigate` / `read_page` / `javascript_tool` / `read_console_messages`.

All paths below are relative to the repo root (this is a single-app
repo — no monorepo, no nested unit).

## Prerequisites

Verified working versions this session:

```bash
node --version   # v24.18.0
npm --version    # 11.16.0
```

No OS packages needed — this is a pure Node/Next.js project, no
native deps, no Playwright/Electron.

## Setup

```bash
npm install
```

No env vars are required to run the site itself. `app/api/contact`
references `RESEND_API_KEY` / Supabase vars for the live contact form,
but their absence does not block the dev server or any page render —
only the contact-form submit action would fail without them.

## Build

```bash
npx next build
```

Takes ~10-20s. Produces 21 static/hybrid routes (home, services,
pricing, how-we-work, about, contact, thank-you, blog index + 1 post,
7 `/locations/<city>` pages, `/sitemap.xml`, `/api/contact`).

## Run (agent path)

**Dev server**, driven by the Browser pane MCP tools (this is the
actual harness used to build and verify this site all session):

```
mcp__Claude_Browser__preview_start { name: "nj-web" }
```

This reads `.claude/launch.json` (already committed — config name is
`"nj-web"`, `npm run dev` on port 3000) and opens a Browser pane tab
at `http://localhost:3000`, returning a `tabId` (used by every other
Browser tool) and a `serverId` (used only by `preview_stop` /
`preview_logs`). `.claude/launch.json` already exists in this repo —
no need to create it.

Then drive it:

```
mcp__Claude_Browser__navigate { url: "http://localhost:3000/contact", tabId: "<tabId>" }
mcp__Claude_Browser__read_page { tabId: "<tabId>", filter: "interactive" }
mcp__Claude_Browser__read_console_messages { tabId: "<tabId>", onlyErrors: true }
```

That's the whole loop: `navigate` → `read_page` (confirms the DOM
rendered and lists every clickable ref) → act (`computer` click/type,
or `form_input` for form fields) → re-`read_page` or `get_page_text`
to confirm the result → `read_console_messages { onlyErrors: true }`
to make sure nothing threw.

**Verified this session** — navigated to `/`, then to `/contact`,
confirmed via `read_page` and `get_page_text` that the CTA links, the
Cal.com booking link, and the full lead-in form (name / email / phone
/ business name / revenue dropdown / message) all rendered, and
`read_console_messages` returned zero errors both times.

| tool | what it does |
|---|---|
| `preview_start { name }` | launch (or reuse) the dev server, open a tab |
| `preview_start { url }` | open a tab at an arbitrary URL (no server needed) |
| `navigate { url, tabId }` | load a URL in that tab |
| `read_page { tabId, filter }` | accessibility-tree dump with `ref_N` handles for every interactive element |
| `find { query, tabId }` | search the last `read_page` tree by description |
| `computer { action, ref\|coordinate }` | click / type / hover / scroll |
| `form_input { ref, value }` | set a form field's value (checkboxes, selects, text) |
| `get_page_text { tabId }` | plain-text extraction of the rendered page — **use this over `screenshot` in this environment, see Gotchas** |
| `javascript_tool { text, tabId }` | run JS for computed styles / DOM state (debugging only, not for making UI changes) |
| `read_console_messages { tabId, onlyErrors }` | check for thrown errors after an interaction |
| `read_network_requests { tabId }` | list/inspect requests (e.g. the contact-form POST) |
| `preview_logs { serverId, level }` | dev-server stdout/stderr, filterable to `error` |
| `preview_stop { serverId }` | kill the dev server |

## Run (human path)

```bash
npm run dev   # → http://localhost:3000, Ctrl-C to stop
```

## Performance / accessibility audit (Lighthouse)

Verified working this session, used to take the site from
28-performance/96-accessibility (measured against the *dev* server,
which is always misleadingly slow) to **100/100/100/100** measured
correctly against a **production** build:

```bash
rm -rf .next
npx next build
npx next start -p 3001 &     # separate port so it doesn't fight the dev server on 3000
sleep 3
npx lighthouse http://localhost:3001 \
  --output=html --output=json \
  --output-path=/tmp/lh-report \
  --chrome-flags="--headless --no-sandbox" \
  --preset=desktop --quiet
kill %1                      # stop the prod server when done
```

Report lands at `/tmp/lh-report.report.html` / `.report.json`. Lighthouse
has real run-to-run variance (±2-3 points) even against an unchanged
production build — run it 2-3 times before concluding a score is
stuck.

## Test

No test suite exists in this repo (`package.json` has no `test`
script). `next lint` is present but has no committed ESLint config —
running it drops into an interactive "how would you like to configure
ESLint?" prompt that hangs any non-interactive shell. Don't run it as
a CI-style check without piping an answer or pre-creating
`.eslintrc.json`.

---

## Gotchas

- **`computer { action: "screenshot" }` and `zoom` reliably time out
  (30s) in this Browser pane**, independent of page complexity —
  reproduced on both `/` and `/contact` this session. Don't rely on a
  binary screenshot to prove a page rendered. Use `read_page` (DOM +
  interactive refs), `get_page_text` (rendered text), and
  `javascript_tool` (computed CSS values) instead — that combination
  caught every real issue this session (unstyled fallback fonts,
  failing color contrast, missing links) without ever needing a
  successful screenshot.
- **Never run `npx next build` while the dev server is running on the
  same `.next` directory.** Next.js writes production artifacts
  (minified, hashed) into `.next/` on top of the dev server's own
  compiled output, and the running dev server then serves a
  0-byte/broken stylesheet — the page looks completely unstyled
  (system serif font, no colors) even though nothing in the source
  changed. Fix: stop the dev server, `rm -rf .next`, restart. If you
  need both a Lighthouse-quality build AND a live dev preview, run the
  production build's `next start` on a **different port** (3001) so
  it never touches the dev server's `.next` state — but note they
  still share the same `.next/` directory on disk, so build-while-dev
  is still the trap to avoid; stop dev, build, start prod, and only
  restart dev afterward if you need it back.
- **Straight vs curly quotes in generated files.** Writing files
  containing possessives like `NJ's` can have ASCII apostrophes
  silently converted to Unicode smart quotes (U+2019) by some text
  layers, which SWC then rejects as a JS string delimiter and fails
  the whole build with a cryptic parse error. If `next build` fails
  on a quote/parse error in a file that looks visually correct, check
  for U+2018/U+2019/U+201C/U+201D bytes — `grep -P '[\x{2018}\x{2019}\x{201C}\x{201D}]'` — and replace at
  the byte level if a normal string-replace edit doesn't stick.
- **`npx lighthouse` prints a Chrome-launcher stack trace on exit even
  on success** (`Launcher.destroyTmp` / `Launcher.kill`) — this is
  Chrome cleanup noise, not a failure. Check the `.report.json` file
  exists and has real scores rather than trusting the exit output.

## Troubleshooting

- **Homepage renders with system serif font, black text, no layout** —
  almost always the dev-server-serving-stale-build-artifacts issue
  above. `rm -rf .next` and restart the dev server.
- **`navigate` to the URL the tab already opened returns "navigation
  denied or failed"** — reproduced right after every fresh
  `preview_start`, which auto-navigates the new tab to the app's root.
  A follow-up `navigate` call to that *same* URL errors even though
  the page is fully rendered — confirmed via `read_page` returning
  correct content immediately after the "failed" navigate. Don't
  trust the error: call `read_page` (or `get_page_text`) to check
  actual state before assuming the navigation didn't happen. Only
  navigating to a *different* path (e.g. `/contact`) needs a real
  retry-on-failure.
- **`next lint` hangs** — no ESLint config committed, see Test section
  above. Not a bug in your invocation.
