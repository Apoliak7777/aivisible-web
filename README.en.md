<div align="center">

# 🔎 AIVisible

**Be the answer AI gives.**

[![Slovensky](https://img.shields.io/badge/Slovensky-30363d?style=for-the-badge)](README.md)
[![English](https://img.shields.io/badge/English-2ea043?style=for-the-badge)](README.en.md)

![Pages](https://img.shields.io/badge/pages-6-1478E0?style=for-the-badge)
![No build](https://img.shields.io/badge/build-none%20needed-9B6BE0?style=for-the-badge)
![No dependencies](https://img.shields.io/badge/dependencies-none-16A916?style=for-the-badge)
![License](https://img.shields.io/badge/license-proprietary-E60012?style=for-the-badge)

Marketing site for a service that optimizes businesses so AI assistants —
ChatGPT, Claude, Gemini, DeepSeek and Grok — understand and recommend them.
Static HTML, CSS and JavaScript. No framework, no build step, no CDN.

</div>

---

## 📋 Contents

- [About](#-about)
- [What the site contains](#-what-the-site-contains)
- [Design system](#-design-system)
- [Project structure](#️-project-structure)
- [Running it](#️-running-it)
- [Before going live](#-before-going-live)
- [Browsers](#-browsers)
- [License](#️-license)

---

## 📖 About

Six pages, one template system, zero dependencies. Open `index.html` and it runs —
no `npm install`, no compilation, no waiting.

The whole site is dark. Depth does not come from black-versus-white contrast but
from alternating three closely related shades, with a single orange accent that
holds attention exactly where it should: headings, numbers and buttons.

The font is a system stack — nothing is fetched from the internet, so nothing
loads late and nothing leaks to third parties.

The site content is in Slovak.

---

## ✨ What the site contains

🏠 **Home** — 11 sections: hero with an audit field, a strip of the five AI
assistants, a "10 blue links in 2006 vs. 1 AI paragraph in 2026" comparison, four
service pillars, assistant cards with statistics, key numbers, a three-step
process with custom visuals, reasons, a summary, an FAQ and a closing CTA.

💶 **Pricing** — three tiers (Basic / Pro / Ultra) with an assistant coverage
matrix, six "what you get" cards and four comparisons against the alternatives.

⚙️ **Technology** — a four-step pipeline, scoring across four signals with
animated meters, and four optimization levers.

👥 **About** — manifesto, origin, three principles, team with statistics.

✉️ **Contact** — form, direct channels, FAQ.

🚫 **404** — error page in the same style, marked `noindex`.

Interactions: staggered scroll reveal, number counters, rotating probe rings,
an SVG growth chart, a mobile menu and an FAQ accordion that keeps one item open
at a time. All vanilla JavaScript, one file, roughly 150 lines.

---

## 🎨 Design system

Everything runs off CSS variables at the top of `assets/css/style.css`. Change one
value and the whole site follows.

| Token | Value | Used for |
|---|---|---|
| `--bg` | `#0a0a0c` | base section surface |
| `--bg-alt` | `#101014` | alternating section |
| `--bg-deep` | `#060607` | hero, CTA, manifesto, card interiors |
| `--surface` | `#16161a` | cards |
| `--surface-2` | `#1c1c21` | highlighted cards |
| `--surface-3` | `#212127` | inputs, dark buttons |
| `--accent` | `#ff6b2c` | second heading line, numbers, CTA, hover borders |
| `--ink` | `#f2f2f4` | body text |
| `--ink-soft` | 66 % white | paragraphs |
| `--muted` | 42 % white | labels, section eyebrows |
| `--line` | 9 % white | card borders |

Sections alternate between `--bg` and `--bg-alt`. Cards are always `--surface`
with a thin border; on hover the border turns orange and the card lifts by 4 px.
`color-scheme: dark` is set, so native controls such as `<select>` and the
scrollbar are dark too.

---

## 🗂️ Project structure

```
.
├── index.html          Home
├── pricing.html        Pricing
├── technology.html     Technology
├── about-us.html       About
├── contact.html        Contact
├── 404.html            Error page
├── robots.txt          For crawlers
├── sitemap.xml         Sitemap
├── LICENSE             Proprietary license (SK + EN)
└── assets/
    ├── css/style.css   The whole design system
    ├── js/main.js      Menu, reveal, counters, forms, FAQ
    └── img/icon.svg    Favicon
```

---

## ▶️ Running it

Opening `index.html` in a browser is enough. For correct relative paths and to
test the 404 page, run a simple server inside the project folder:

```bash
python -m http.server 5599
```

Then open `http://localhost:5599`.

---

## 🚧 Before going live

- [ ] **Form backend** — both the hero audit field and the contact form are
      front-end only; `assets/js/main.js` merely simulates submission.
- [ ] **Currency and language switchers** in the header are visual only —
      implement them or remove them.
- [ ] **Missing pages** — Sign in, Service status, Careers, Privacy, Terms,
      Cookies. They all currently point to `contact.html`.
- [ ] **Back the statistics** (92 %, 73 %, 3.4, 700M+, 62 % …) with sources, or
      rewrite them.
- [ ] **Domain** — replace `aivisible.sk` in `sitemap.xml`, `robots.txt` and the
      `canonical` tag if it differs.
- [ ] **OG image** — sharing a link currently shows no preview.

---

## 🌐 Browsers

Tested in Chromium. Uses CSS variables, `backdrop-filter`,
`IntersectionObserver` and `<details>` — all supported by current Chrome, Edge,
Firefox and Safari.

Without JavaScript the site stays fully readable, just without animations. The
reveal classes are deliberately scoped to `.js` so a failed script never leaves a
blank page — which on a site about AI visibility would be the worst possible bug.

---

## ⚖️ License

**Proprietary — all rights reserved.** The code, design and content may not be
copied, modified, distributed or used without written permission. See
[LICENSE](LICENSE) for details.

Brand names referenced in the content — OpenAI, ChatGPT, Anthropic, Claude,
Google, Gemini, DeepSeek and xAI — are trademarks of their respective owners.
This project is not affiliated with any of them.

---

<div align="center">

© Apoliak 2026 · Built by **[Apoliak7777](https://github.com/Apoliak7777)**

</div>
