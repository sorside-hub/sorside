# Implementation Plan: sorside Creative Website

A warm, minimal, and timeless personal creative home and independent digital publication for **sorside**, built with React, Vite, React Router, and a centralized semantic token design system.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following key decisions have been clarified and confirmed:
> - **Visual Section Handling**: Added as an intentional "Coming Soon" page (`/visual`) matching the `/music` route, directly reflecting the reference image header and Explore section.
> - **Theme Switcher Placement**: Integrated into the header alongside the search icon and inside the mobile navigation drawer, supporting Light, Dark, and System modes with `localStorage` persistence.
> - **Header Search Behavior**: Clicking the search icon opens a keyboard-accessible quick search modal overlay across all writing archives.
> - **Technology Stack**: React 19 + React Router + Tailwind CSS v4 with semantic CSS custom properties (`--color-background`, `--color-surface`, `--color-text`, `--color-border`, etc.) for zero-pill, zero-slop editorial design.

---

## 1. Overview & Core Concept

- **Purpose**: A personal digital home and independent archive for sorside—showcasing personal writings, creative thoughts, visual reflections, and upcoming music.
- **Audience**: Intentional readers seeking thoughtful essays, cultural reflections, and creative projects.
- **Language Policy**:
  - Website navigation, interface labels, and structural controls: **English**.
  - Written essays, reflections, and editorial articles: **Indonesian** (as shown in the reference image).
- **Scope Boundary (MVP)**:
  - Six primary routes: `/` (Home), `/writing` (Archive), `/writing/:slug` (Article Detail), `/about` (About sorside), `/music` (Coming Soon), `/visual` (Coming Soon), and `*` (Custom 404).
  - Explicitly excluded: User accounts, databases, CMS, social feeds, public comments, like buttons, and music streaming players.

---

## 2. Visual Analysis & Design System (Reference Image Breakdown)

### A. Reference Image Decomposition
From `/public/assets/aistudio/file_0000000036e88211a44b11c979e5fc47_5009f2dc.png`:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ sorside.                      Writing   Music   Visual   About     │   🔍 ☼ │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ A COLLECTION OF SIDES.               │                                      │
│ Every side                           │        [ Large Atmospheric           │
│ has a story.                         │          Monochrome / Duotone        │
│ ── Writing, music, visuals,          │          Architectural Image ]       │
│    and everything in between.        │                                      │
├──────────────────────────────────────┴──────────────────────────────────────┤
│ Latest Writing ─────────────── View all → │ About sorside. ───────────────  │
│ ┌────────┐ REFLECTION · NOV 7, 2026       │ ┌─────┐ Sorside adalah ruang... │
│ │ Image  │ Tentang hal-hal yang terus...  │ │ Sor │                         │
│ └────────┘ Sebuah catatan tentang...      │ └─────┘ Learn more →            │
│ ┌────────┐ OPINION · NOV 5, 2026          ├─────────────────────────────────┤
│ │ Image  │ Menjadi Minato                 │ Explore ─────────────────────── │
│ └────────┘ Tentang privilese...           │ 📄 All Writings               → │
│ ┌────────┐ ESSAY · OCT 28, 2026           │ 🎵 Music (Coming Soon)        → │
│ │ Image  │ Kita, dan Kota Ini             │ ⊞ Visual (Coming Soon)       → │
│ └────────┘ Sebuah esai pendek...          │ 📁 Archive                    → │
├───────────────────────────────────────────┴─────────────────────────────────┤
│ sorside. | Writing  Music  Visual  About                     ▶   📷   ✉     │
│ © 2026 sorside. All rights reserved.                   Every side has a story.│
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Color Palette & Atmospheric Canvas**:
   - **Light Canvas**: Warm ecru/parchment (`#F4EFEA` or `#F7F4EE`).
   - **Dark Canvas**: Deep charcoal limestone (`#181716` / `#1F1E1B`), never pure `#000000`.
   - **Primary Typography**: Deep warm charcoal (`#1C1917` / `#23211E`) in light mode; soft off-white (`#F5F2EB`) in dark mode.
   - **Muted Metadata**: Antique stone (`#78716C` / `#8C857B`).
   - **Dividers & Hairlines**: Warm subtle hairline rules (`#E5DEC9` / `#2E2A27`).
   - **Footer**: Distinct deep warm charcoal block (`#181816`) with alabaster typography.

2. **Typographic Pairing & Zero-Pill Rules**:
   - **Headings & Wordmark**: High-contrast, elegant editorial serif (`Playfair Display` or `Newsreader`).
   - **Body & UI**: Clean geometric sans (`Plus Jakarta Sans`) with relaxed reading line-height (1.75).
   - **Metadata**: Unboxed uppercase text with tracking and bullet separators: `REFLECTION · NOV 7, 2026` (Strictly no pill badges or colored capsules).

3. **Curatorial Composition**:
   - Asymmetric split hero with a dedicated photo anchor.
   - Two-column main section (65% writings / 35% author spotlight & exploration links) divided by a crisp hairline vertical line.
   - High-contrast charcoal footer with social channels and copyright signature.

---

## 3. Responsive Strategy: Desktop vs. Mobile Layouts

As required by `RESPONSIVE_DESIGN_REQUIREMENT-_MOBILE___DESKTOP.md`, mobile is **not** a scaled-down desktop:

### Desktop Experience (1440px baseline)
- **Header**: Single-row 3-zone contract: `sorside.` wordmark on the left, centered navigation links (`Writing`, `Music`, `Visual`, `About`), and right-aligned utility cluster (divider, search icon, and theme toggle).
- **Hero**: Side-by-side balanced split. Left: Kicker + high-impact headline + horizontal accent line with sub-tagline. Right: Full-height architectural image (`aspect-[16/10]`).
- **Main Section**: 2-column layout with vertical hairline border.
  - Left: "Latest Writing" title with horizontal line to "View all →". Horizontal article cards with 4:3 image thumbnails on the left and title/excerpt/metadata on the right.
  - Right: Sticky or top-aligned "About sorside." author card with portrait and bio summary, followed by the "Explore" quick-access index.

### Mobile Experience (375px–390px baseline)
- **Header**: Compact mobile bar ($\le 60\text{px}$) strictly respecting the 15% sticky height cap. Left: `sorside.` wordmark. Right: Search icon, theme toggle, and hamburger menu toggle.
- **Mobile Navigation Drawer**: Slide-down or overlay drawer with generous tap targets ($\ge 44\text{px}$), showing navigation links, social icons, and theme controls.
- **Hero Stacking**: Re-orchestrated vertical flow:
  1. Kicker: `A COLLECTION OF SIDES.`
  2. Headline: `Every side has a story.`
  3. Lead copy with accent rule: `Writing, music, visuals, and everything in between.`
  4. Atmospheric Hero Image: Full-width container with tailored 16:9 ratio and subtle border.
- **Main Section**: Unfolds sequentially into focused vertical reading blocks:
  1. Latest Writing Section: Cards adapt to an optimized mobile card structure (compact horizontal thumbnail or top thumbnail with balanced typography to avoid horizontal overflow).
  2. About Section: Restyled into a warm, full-width author vignette.
  3. Explore Section: Full-width list with comfortable 48px touch targets and clear right-arrow indicators.
- **Article Detail Page on Mobile**:
  - Distraction-free single column reading width (`max-w-prose`, 100% viewport minus 20px padding).
  - No sidebars or floating popups.
  - Generous typographic line-height (1.75–1.8) and comfortable paragraph spacing.

---

## 4. Technical Architecture & Project Structure

### Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App.tsx                                   │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                       ThemeProvider                              │  │
│  │   (Light / Dark / System modes + localStorage + CSS tokens)       │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                        BrowserRouter                             │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │                  RootLayout & Top Bar                      │  │  │
│  │  │   (Wordmark + NavLinks + SearchModal + ThemeToggle)        │  │  │
│  │  ├────────────────────────────────────────────────────────────┤  │  │
│  │  │                      Routes Outlet                         │  │  │
│  │  │   /              -> HomePage                               │  │  │
│  │  │   /writing       -> WritingArchivePage                     │  │  │
│  │  │   /writing/:slug -> ArticleDetailPage                     │  │  │
│  │  │   /about         -> AboutPage                              │  │  │
│  │  │   /music         -> ComingSoonPage (Music)                 │  │  │
│  │  │   /visual        -> ComingSoonPage (Visual)                │  │  │
│  │  │   *              -> NotFoundPage                           │  │  │
│  │  ├────────────────────────────────────────────────────────────┤  │  │
│  │  │                     Charcoal Footer                        │  │  │
│  │  │   (Wordmark + Links + Socials + Copyright Signature)       │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

### Content & Data Strategy
- **Local Markdown / Frontmatter**: Articles stored in a dedicated content module with typed metadata:
  ```ts
  interface Article {
    slug: string;
    title: string;
    category: 'Reflection' | 'Opinion' | 'Essay' | string;
    date: string; // ISO date or formatted
    displayDate: string; // e.g. "NOV 7, 2026"
    excerpt: string;
    readTime: string;
    coverImage?: string;
    content: string; // Full markdown body
  }
  ```
- **Real Sample Articles**: Initial articles matching the approved reference image:
  1. `tentang-hal-hal-yang-terus-kita-tunda` (Reflection)
  2. `menjadi-minato` (Opinion)
  3. `kita-dan-kota-ini` (Essay)
- **Search System**: Fast client-side search indexing title, excerpt, category, and article body with instant keyboard shortcut (`Cmd+K` / `Ctrl+K`) or header icon trigger.

---

## 5. Development Roadmap & Implementation Stages

### Stage 1: Design Tokens, Layout Shell & Homepage (Current Target)
- Set up CSS custom properties for Light, Dark, and System themes in `src/index.css` with `@custom-variant dark`.
- Set up font pairings (editorial serif + geometric sans).
- Build the core layout:
  - Header / Navigation bar with desktop links, mobile drawer, search trigger, and theme switcher.
  - Search modal overlay with live query filtering.
  - Charcoal footer with social links and copyright.
- Build the Homepage matching the reference image:
  - Asymmetric Hero split with architectural photography and headline typography.
  - Latest Writing feed with responsive cards.
  - About sorside card with portrait image and bio.
  - Explore navigation box with icon items.
- Ensure desktop (1440px) and mobile (375px/390px) responsive layouts are fully realized.

### Stage 2: Writing Archive Page (`/writing`)
- Category filter bar (All, Reflection, Opinion, Essay) with active states.
- Live keyword search input.
- Editorial list layout with unboxed metadata, excerpts, read times, and clear empty states.

### Stage 3: Article Detail Page (`/writing/:slug`)
- Editorial single-column reading experience with optimal measure (65–75ch).
- Header with category, date, read time, and title.
- Markdown prose renderer with blockquotes, drop caps, lists, and headers.
- Previous / Next article footer navigation and "Back to Writing" link.

### Stage 4: About, Coming Soon & 404 Pages
- `/about`: Editorial biography, creative philosophy of sorside, and contact links.
- `/music`: Minimalist, elegant Coming Soon page.
- `/visual`: Minimalist, elegant Coming Soon page.
- `*`: Custom 404 page with return-home affordance.

### Stage 5: SEO, Accessibility & Multi-Breakpoint Verification
- Dynamic document titles and meta descriptions per page/article.
- Full keyboard navigation and visible focus rings.
- Testing across mobile (375px, 390px), tablet (768px), and desktop (1440px).
