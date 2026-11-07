# Implementation Plan: Music Section for sorside

An editorial music archive and storytelling space for **sorside**, presenting music releases, individual tracks, lyrics, production credits, intimate background narratives, and cross-references to existing Writing essays.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Key design and architectural decisions confirmed by the user:
> - **Initial Content**: Include curated preview releases and tracks linked directly to existing essays (`Tentang hal-hal yang terus kita tunda`, `Kita, dan Kota Ini`, etc.) so the typography, tracklist, lyrics, and editorial relationships can be fully experienced and tested.
> - **Audio Playback**: Implement a minimalist custom audio player matching sorside's warm editorial palette (restrained charcoal controls, subtle time scrubbers, zero autoplay, zero aggressive streaming popups).
> - **Homepage Navigation**: Update the homepage Explore widget from `Music (Coming Soon)` to `Music` pointing directly to `/music`.
> - **Future CMS Architecture**: Keep music models and query functions strictly decoupled from React UI components, using stable IDs, explicit relationships, and clean markdown/rich-text structures compatible with a future Sanity integration.

---

## 1. Overview & Information Architecture

The Music section serves as an independent archive of creative sound rather than a commercial streaming storefront. It models the distinct relationship between **Releases** (Singles, EPs, Albums) and **Tracks** (individual compositions).

```
┌────────────────────────────────────────────────────────────────────────┐
│                              RELEASES                                  │
│  - id: string                                                          │
│  - title: string                                                       │
│  - slug: string ("/music/releases/:slug")                              │
│  - releaseType: 'single' | 'ep' | 'album'                              │
│  - releaseDate & displayDate: string                                   │
│  - status: 'released' | 'upcoming' | 'draft'                           │
│  - coverArtUrl & coverArtAlt: string                                   │
│  - description: string                                                 │
│  - trackIds: string[] (ordered references)                             │
│  - credits: { role: string; name: string }[]                           │
│  - behindTheRelease?: string (markdown/editorial)                      │
│  - streamingLinks?: { platform: string; url: string }[]                │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ 1 : N
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                               TRACKS                                   │
│  - id: string                                                          │
│  - title: string                                                       │
│  - slug: string ("/music/tracks/:slug")                                │
│  - releaseId: string                                                   │
│  - trackNumber: number                                                 │
│  - duration?: string (e.g. "03:42")                                    │
│  - coverArtUrl?: string (falls back to parent release artwork)         │
│  - audioUrl?: string (optional preview stream)                         │
│  - lyrics?: string (exact stanza & line-break preserved)               │
│  - behindTheSong?: string (intimate narrative note)                    │
│  - credits: { role: string; name: string }[]                           │
│  - relatedWritingIds?: string[] (links to existing articles)           │
│  - streamingLinks?: { platform: string; url: string }[]                │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. User Experience & Route Structure

### A. Music Archive (`/music`)
- **Header**:
  - Eyebrow: `SOUND & EXPRESSION`
  - Headline: `Music` in elegant editorial serif
  - Lead: *"A collection of sounds, thoughts, and things left unsaid."*
- **Curated Grouping**:
  - Releases grouped into **Singles**, **EPs**, and **Albums** (only groups containing published/visible releases are rendered).
  - Editorial cards featuring square artwork, release title, release type, and year with smooth hover transitions.
  - Thoughtful empty state if no releases are visible: *"No releases yet. The collection will grow here."*

### B. Release Detail (`/music/releases/:slug`)
- **Header & Info Split**:
  - Breadcrumb: `← Back to Music`
  - Desktop 2-column composition: Square album artwork on left (320px–380px), release title, type, date, description, and external streaming links (Spotify, Apple Music, YouTube Music, Bandcamp) on right.
- **Ordered Tracklist**:
  - Clean hairline table showing track number (`01`, `02`), track title, and duration.
  - Clicking any track navigates to `/music/tracks/:slug`.
- **Behind the Release**:
  - Editorial narrative explaining the conception and recording process of the release.
- **Release Credits**:
  - Unboxed structured credits (`Written by`, `Produced by`, `Mixed by`, `Mastered by`, `Artwork by`).

### C. Track Detail (`/music/tracks/:slug`)
- **Intimate Listening Experience**:
  - Breadcrumb: `← Back to [Release Title]`
  - Track artwork (inherits parent release cover if track has no specific single artwork).
  - Track title, parent release name, track number, and duration.
  - **Minimalist Audio Player**: If an `audioUrl` is present, renders a custom warm audio player with play/pause, time/duration counter, progress scrubber, and volume mute. No autoplay.
- **Lyrics Presentation**:
  - Preserves exact poetic stanzas and line breaks (no collapsed paragraphs) set in comfortable reading typography. Hidden if no lyrics exist.
- **Behind the Song**:
  - The personal story, recording diary, or reflection behind the lyrics.
- **Track Credits**:
  - Specific performers, instrumentation, and recording credits for this track.
- **Related Writing**:
  - Cross-references existing essays from sorside's Writing archive (e.g., `Tentang hal-hal yang terus kita tunda` or `Kita, dan Kota Ini`), rendering compact editorial preview cards linking directly to `/writing/:slug`.

---

## 3. Responsive Layout Strategy (Desktop vs. Mobile)

### Desktop (1440px)
- **Archive**: Grid of editorial release cards (3 columns for singles/EPs) with generous whitespace and clear section titles.
- **Release Detail**: Side-by-side header (Artwork left, details right), followed by a centered reading width (max-w-3xl) for tracklist, narrative essay, and credits.
- **Track Detail**: Elegant vertical composition with left-aligned lyrics and side-column for metadata/credits, or a serene reading column (`max-w-2xl`).

### Mobile (375px–390px)
- **Archive**: Single-column vertical rhythm with square artwork scaling naturally to viewport width without cropping.
- **Release Detail**: Stacks vertically: Back link $\rightarrow$ Full-width square artwork $\rightarrow$ Title & metadata $\rightarrow$ Tracklist with 44px+ touch targets $\rightarrow$ Narrative $\rightarrow$ Credits.
- **Track Detail**: Stacks lyrics with generous stanza margins so mobile reading is effortless and comfortable.

---

## 4. Technical Architecture & File Plan

### Directory Structure & Modular Separation
- `src/types/music.ts`: TypeScript interfaces for `Release`, `Track`, `Credit`, `StreamingLink`.
- `src/content/music.ts`: Centralized data store and query helper functions (`getReleases()`, `getReleaseBySlug()`, `getTrackBySlug()`, `getTracksForRelease()`, `getRelatedArticlesForTrack()`).
- `src/components/music/`:
  - `ReleaseCard.tsx`: Individual release card in archive.
  - `Tracklist.tsx`: Clean tracklist component with durations and link routing.
  - `AudioPlayer.tsx`: Minimalist warm editorial audio player.
  - `LyricsSection.tsx`: Formatted stanza lyrics renderer.
  - `CreditsList.tsx`: Unboxed structured contributor credits.
  - `RelatedWriting.tsx`: Reusable cards linking to articles in `src/content/articles.ts`.
- `src/pages/`:
  - `src/pages/MusicPage.tsx`: Replaces the temporary Coming Soon page with the full Music Archive.
  - `src/pages/ReleaseDetailPage.tsx`: Full release view.
  - `src/pages/TrackDetailPage.tsx`: Intimate track detail view.
- `src/pages/HomePage.tsx`:
  - Update Explore link from `Music (Coming Soon)` to `Music`.
- `src/App.tsx`:
  - Add routes:
    - `/music` $\rightarrow$ `MusicPage`
    - `/music/releases/:slug` $\rightarrow$ `ReleaseDetailPage`
    - `/music/tracks/:slug` $\rightarrow$ `TrackDetailPage`

---

## 5. Implementation Stages

### Stage 1: Music Data Model & Query Helpers
- Define TypeScript types in `src/types/music.ts`.
- Create `src/content/music.ts` with preview releases (1 Single + 1 EP) and tracks connected to existing Writing articles, plus query functions.

### Stage 2: Shared Music UI Components
- Build `AudioPlayer.tsx` with warm color tokens, HTML5 audio hook, play/pause, time scrubber, and volume mute.
- Build `Tracklist.tsx`, `CreditsList.tsx`, `LyricsSection.tsx`, and `RelatedWriting.tsx`.

### Stage 3: Pages & Routing Integration
- Update `src/pages/MusicPage.tsx` with release grouping (Singles, EPs, Albums) and empty states.
- Create `src/pages/ReleaseDetailPage.tsx` and `src/pages/TrackDetailPage.tsx`.
- Register new routes in `src/App.tsx`.
- Update homepage Explore list to link cleanly to `/music`.

### Stage 4: Verification & Multi-Breakpoint Polish
- Test all routing paths, back-navigation, audio player interactions, stanza line breaks, and related writing links.
- Run `compile_applet` and `lint_applet` to ensure zero compilation or type errors.
