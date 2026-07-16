# Search Console verification — one-time setup

This site is wired to verify with both Google Search Console and Bing Webmaster Tools via env vars. **You do not edit any code** — you just paste values Google/Bing give you into `.env.local` (dev) and Vercel's dashboard (prod).

## Google Search Console (do this first — most important)

1. **Sign in** at https://search.google.com/search-console with the Google account that owns njaccountstax.com.
2. **Add property → URL prefix** → enter `https://njaccountstax.com` (with the `s` in `https`).
3. Google offers several verification methods. Choose **"HTML tag"**.
4. Google shows a snippet like:

   ```html
   <meta name="google-site-verification" content="ABC123xyz-somelonghash">
   ```

5. **Copy ONLY the value between the `content="…"` quotes.** For example: `ABC123xyz-somelonghash`. Do NOT copy the full `<meta>` tag.
6. Paste it into your Vercel project:
   - Vercel dashboard → the `nj` project → **Settings → Environment Variables**
   - Add: **Key** = `GOOGLE_SITE_VERIFICATION`, **Value** = the string you copied, **Environments** = check all three (Production, Preview, Development)
   - Click **Save**
7. **Redeploy** — Vercel → Deployments → three dots on the latest deployment → **Redeploy**
8. Go back to Search Console → click **"Verify"**. Should turn green in seconds.

### Alternative — DNS verification (better long-term)

If you'd rather not depend on the meta tag, choose **"Domain"** property instead of URL prefix. Google gives you a TXT record. Add it in your domain registrar's DNS panel. This verifies the whole domain (all subdomains, both http/https, forever). Preferred if you plan to add subdomains later.

## Bing Webmaster Tools (nice-to-have, ~5% of US search)

1. **Sign in** at https://www.bing.com/webmasters.
2. **Import from Google Search Console** — Bing offers this, and it's the easiest path. It grabs the site + sitemap in one click.
3. Or, if you skip the import: add site → **HTML Meta Tag** verification → copy the `msvalidate.01` content value → paste into Vercel as `BING_SITE_VERIFICATION` → redeploy → verify.

## Local development

For `next dev`, add to `.env.local` (never commit this file):

```
GOOGLE_SITE_VERIFICATION=ABC123xyz-somelonghash
BING_SITE_VERIFICATION=abc123xyz
```

If left unset, the meta tags simply don't render — that's fine.

## Confirm it's working

After a redeploy, visit https://njaccountstax.com and view page source. You should see:

```html
<meta name="google-site-verification" content="…" />
<meta name="msvalidate.01" content="…" />
```

If Search Console still can't verify:
- Check the value has no leading/trailing whitespace
- Check Environment Variables were set on the **Production** environment (not just Preview)
- Confirm the redeploy actually finished before clicking Verify

## After verification, submit your sitemap

1. Search Console → left sidebar → **Sitemaps**
2. Enter `sitemap.xml` (relative — Google resolves against your property)
3. Submit. Google reads it, discovers all your URLs, and starts indexing.

The sitemap is auto-generated at [https://njaccountstax.com/sitemap.xml](https://njaccountstax.com/sitemap.xml) — you don't have to maintain it. Every new page/post added to `app/sitemap.xml/route.ts` shows up automatically.
