<div align="center">

# 🔎 AIVisible

**Buďte odpoveďou, ktorú dáva AI.**

[![Slovensky](https://img.shields.io/badge/Slovensky-2ea043?style=for-the-badge)](README.md)
[![English](https://img.shields.io/badge/English-30363d?style=for-the-badge)](README.en.md)

![Stránky](https://img.shields.io/badge/str%C3%A1nky-6-1478E0?style=for-the-badge)
![Bez buildu](https://img.shields.io/badge/build-netreba-9B6BE0?style=for-the-badge)
![Bez závislostí](https://img.shields.io/badge/z%C3%A1vislosti-%C5%BEiadne-16A916?style=for-the-badge)
![Licencia](https://img.shields.io/badge/licencia-propriet%C3%A1rna-E60012?style=for-the-badge)

Prezentačný web služby, ktorá optimalizuje firmy tak, aby ich AI asistenti —
ChatGPT, Claude, Gemini, DeepSeek a Grok — chápali a odporúčali.
Statické HTML, CSS a JavaScript. Žiadny framework, žiadny build krok, žiadne CDN.

</div>

---

## 📋 Obsah

- [O projekte](#-o-projekte)
- [Čo web obsahuje](#-čo-web-obsahuje)
- [Design systém](#-design-systém)
- [Štruktúra projektu](#️-štruktúra-projektu)
- [Spustenie](#️-spustenie)
- [Pred spustením naostro](#-pred-spustením-naostro)
- [Prehliadače](#-prehliadače)
- [Licencia](#️-licencia)

---

## 📖 O projekte

Šesť stránok, jeden šablónový systém, nula závislostí. Otvoríš `index.html` a ide —
bez `npm install`, bez kompilácie, bez čakania.

Celý web je tmavý. Hĺbka sa nerobí kontrastom čiernej a bielej, ale striedaním
troch blízkych odtieňov a jedným oranžovým akcentom, ktorý drží pozornosť tam,
kde má byť: na nadpisoch, číslach a tlačidlách.

Font je systémový stack — nič sa neťahá z internetu, takže sa nič nenačítava
s oneskorením a nič neuniká tretím stranám.

---

## ✨ Čo web obsahuje

🏠 **Domov** — 11 sekcií: hero s auditovacím poľom, pás piatich AI asistentov,
porovnanie „10 modrých odkazov 2006 vs. 1 AI odsek 2026", štyri piliere služby,
karty asistentov so štatistikami, čísla, trojkrokový proces s vlastnými vizuálmi,
dôvody, zhrnutie, FAQ a záverečné CTA.

💶 **Cenník** — tri úrovne (Basic / Pro / Ultra) s maticou pokrytia asistentov,
šesť kariet „čo získate" a štyri porovnania voči alternatívam.

⚙️ **Technológia** — pipeline v štyroch krokoch, skóre na štyroch signáloch
s animovanými ukazovateľmi a štyri optimalizačné páky.

👥 **O nás** — manifest, pôvod, tri princípy, tím so štatistikami.

✉️ **Kontakt** — formulár, priame kanály, FAQ.

🚫 **404** — chybová stránka v rovnakom štýle, s `noindex`.

Interakcie: postupné odkrývanie pri scrollovaní, počítadlá čísel, rotujúce
prstence sondy, SVG graf rastu, mobilné menu, FAQ akordeón s jednou otvorenou
položkou naraz. Všetko vanilla JavaScript, jeden súbor, ~150 riadkov.

---

## 🎨 Design systém

Všetko sedí na CSS premenných hore v `assets/css/style.css`. Zmeníš jednu hodnotu,
zmení sa celý web.

| Token | Hodnota | Kde sa použije |
|---|---|---|
| `--bg` | `#0a0a0c` | základná plocha sekcií |
| `--bg-alt` | `#101014` | striedavá sekcia |
| `--bg-deep` | `#060607` | hero, CTA, manifest, vnútro kariet |
| `--surface` | `#16161a` | karty |
| `--surface-2` | `#1c1c21` | zvýraznené karty |
| `--surface-3` | `#212127` | inputy, tmavé tlačidlá |
| `--accent` | `#ff6b2c` | druhý riadok nadpisov, čísla, CTA, hover okraje |
| `--ink` | `#f2f2f4` | základný text |
| `--ink-soft` | 66 % biela | odstavce |
| `--muted` | 42 % biela | popisky, nadpisy sekcií |
| `--line` | 9 % biela | okraje kariet |

Sekcie sa striedajú `--bg` ↔ `--bg-alt`. Karty sú vždy `--surface` s tenkým
okrajom; pri prejdení myšou okraj zoranžovie a karta sa zdvihne o 4 px.
Nastavené je aj `color-scheme: dark`, takže natívne prvky ako `<select>`
a posuvník sú tiež tmavé.

---

## 🗂️ Štruktúra projektu

```
.
├── index.html          Domov
├── pricing.html        Cenník
├── technology.html     Technológia
├── about-us.html       O nás
├── contact.html        Kontakt
├── 404.html            Chybová stránka
├── robots.txt          Pre vyhľadávače
├── sitemap.xml         Mapa stránok
├── LICENSE             Proprietárna licencia (SK + EN)
└── assets/
    ├── css/style.css   Celý design systém
    ├── js/main.js      Menu, odkrývanie, počítadlá, formuláre, FAQ
    └── img/icon.svg    Favicon
```

---

## ▶️ Spustenie

Stačí otvoriť `index.html` v prehliadači. Ak chceš správne relatívne cesty
a testovanie 404, spusti v priečinku projektu jednoduchý server:

```bash
python -m http.server 5599
```

Potom otvor `http://localhost:5599`.

---

## 🚧 Pred spustením naostro

- [ ] **Backend pre formuláre** — hero „Začať so svojou firmou" aj kontaktný
      formulár sú zatiaľ front-end only, `assets/js/main.js` odoslanie iba simuluje.
- [ ] **Prepínač meny a jazyka** v hlavičke je vizuálny prvok bez logiky —
      dorobiť, alebo odstrániť.
- [ ] **Chýbajúce stránky** — Prihlásiť sa, Stav služby, Kariéra, Ochrana súkromia,
      Obchodné podmienky, Cookies. Teraz všetky smerujú na `contact.html`.
- [ ] **Podložiť štatistiky** (92 %, 73 %, 3.4, 700M+, 62 % …) zdrojom, alebo ich
      prepísať.
- [ ] **Doména** — prepísať `aivisible.sk` v `sitemap.xml`, `robots.txt`
      a v `canonical`, ak bude iná.
- [ ] **OG obrázok** — pri zdieľaní odkazu sa zatiaľ neukáže žiadny náhľad.

---

## 🌐 Prehliadače

Testované v Chromiu. Používa CSS premenné, `backdrop-filter`,
`IntersectionObserver` a `<details>` — všetko podporujú aktuálne verzie Chrome,
Edge, Firefox aj Safari.

Bez JavaScriptu ostane web plne čitateľný, len bez animácií. Odkrývacie triedy sú
zámerne viazané na `.js`, aby sa pri zlyhaní skriptu neukázala prázdna stránka —
čo by na webe o AI viditeľnosti bola tá najhoršia možná chyba.

---

## ⚖️ Licencia

**Proprietárna — všetky práva vyhradené.** Kód, dizajn ani obsah sa nesmú
kopírovať, upravovať, šíriť ani používať bez písomného súhlasu. Podrobnosti
v súbore [LICENSE](LICENSE).

Názvy značiek spomenuté v obsahu — OpenAI, ChatGPT, Anthropic, Claude, Google,
Gemini, DeepSeek a xAI — sú ochranné známky príslušných vlastníkov. Projekt
s nimi nie je nijako prepojený.

---

<div align="center">

© Apoliak 2026 · Vytvoril **[Apoliak7777](https://github.com/Apoliak7777)**

</div>
