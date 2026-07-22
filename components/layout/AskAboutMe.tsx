'use client';

import { useState } from 'react';

/**
 * "Ask AI about us" block, shown at the foot of every page.
 *
 * Each button opens the provider in a new tab with the prompt pre-filled via
 * its ?q= parameter. ChatGPT, Claude and Perplexity all honour that; Gemini
 * has no documented prefill parameter and may open on a blank composer, so
 * every click also copies the prompt to the clipboard as a fallback the
 * visitor can simply paste. The anchors carry a real href, so the block still
 * works with JavaScript disabled — the clipboard step is a bonus, not a
 * dependency.
 */

const PROMPT =
  'Tell me about Njock Simon of NJ’s Accounting and Tax Services based on ' +
  'https://njaccountstax.com — summarise who they are, what they do, and ' +
  'how to get in touch.';

const Q = encodeURIComponent(PROMPT);

const PROVIDERS = [
  { name: 'ChatGPT', href: `https://chatgpt.com/?q=${Q}` },
  { name: 'Claude', href: `https://claude.ai/new?q=${Q}` },
  { name: 'Perplexity', href: `https://www.perplexity.ai/search?q=${Q}` },
  { name: 'Gemini', href: `https://gemini.google.com/app?q=${Q}` },
];

export function AskAboutMe() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    // Best-effort only: clipboard access can be denied, and the link still
    // opens either way.
    navigator.clipboard?.writeText(PROMPT).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2600);
      },
      () => {},
    );
  }

  return (
    <section className="border-t border-aubergine/10 bg-ivory">
      <div className="container-content py-14 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-eyebrow mb-3">Ask all about me</div>
          <h2 className="font-display text-h3 text-aubergine">
            Don&rsquo;t take our word for it. Ask an AI.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-body-sm text-graphite/75">
            Open your assistant of choice with a question about us already
            written. It reads the site and tells you who we are, what we do,
            and how to reach us.
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {PROVIDERS.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded border-[1.5px] border-aubergine px-5 py-2.5 text-body-sm font-medium text-aubergine transition-all duration-200 hover:-translate-y-0.5 hover:bg-aubergine hover:text-ivory"
                >
                  {p.name}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                  <span className="sr-only">
                    {' '}
                    &mdash; opens {p.name} in a new tab with a question about
                    NJ&rsquo;s Accounting already filled in
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p
            className="mt-5 min-h-[20px] text-body-sm text-graphite/75"
            aria-live="polite"
          >
            {copied
              ? 'Prompt copied — paste it if your assistant opens empty.'
              : ''}
          </p>
        </div>
      </div>
    </section>
  );
}
