# SongWeaver

SongWeaver is a small music-structure workbench for beat mapping, lyric timing, section review, movement cues, and eventually song rearrangement.

## Current status

The current standalone version focuses on one job: playing an audio file while flashing a light on each beat.

What works today:

- Load a local audio file in the browser
- Use BPM and first-beat offset controls
- Highlight every beat during playback
- Emphasize the first beat of each bar
- Show a simple phrase counter based on an 8-beat phrase
- Start quickly with the current preset for `為我勇敢的媽媽`

This project is intentionally small right now. It is the first usable slice of a larger workflow.

## Run locally

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Open:

```text
http://127.0.0.1:4173
```

Build for a local static bundle:

```bash
pnpm build
```

## Double-click launcher

Windows users can double-click `start-songweaver.bat`.

That script will:

- build the app if `dist/` is missing
- start a local static server on port `4173` if one is not already running
- open the app in the default browser

## Why this exists

The long-term goal is not just beat flashing. SongWeaver is meant to help with:

- beat detection and beat timeline storage
- lyric recognition and lyric timing
- section breakdown for verse, chorus, bridge, and instrumental parts
- expandable section cards with summaries and movement cues
- phrase-aware planning, especially with 8-beat units
- song reconstruction from beat-aligned sections

## Docs

- `docs/project-status.md`
- `docs/roadmap.md`
