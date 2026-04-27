# SongWeaver project status

## Summary

SongWeaver has been split out into its own standalone project under `D:\VSCode\SongWeaver`.

The current version is an early but usable prototype. It already supports the first practical step in the workflow:

1. load a song
2. play it
3. flash a light on the beat
4. fine-tune the beat timing with BPM and first-beat offset

This is enough to support simple rhythm practice, movement cue design, and initial beat checking before the larger analysis features are added.

## What is implemented now

### Functional UI

- A browser-based single-page tool
- Local audio file loading
- Playback controls
- Visual pulse on each beat
- Stronger pulse on the first beat of each bar
- Phrase counter for 8-beat grouping

### Editing controls

- BPM input
- First-beat offset input
- Beats-per-bar input
- Phrase-length input
- Flash-window slider for the light pulse width

### Preset support

- A built-in preset for `為我勇敢的媽媽`
- Current preset values:
  - BPM: `129.2`
  - first beat offset: `0.21s`
  - beats per bar: `4`
  - phrase beats: `8`

### Desktop convenience

- A Windows double-click launcher
- Local static hosting through Python
- Automatic browser opening

## What is not implemented yet

- Automatic beat detection from arbitrary music
- Automatic lyric recognition
- Section detection for verse, chorus, bridge, intro, outro, and instrumental passages
- Expandable section cards
- Lyric summaries for long sections
- Mood or instrumentation descriptions for non-lyric sections
- Manual cue notes for choreography prompts
- Beat-aligned audio section rearrangement

## Technical shape right now

- Tooling: Vite
- Runtime: browser-only frontend
- Language: plain modern JavaScript and CSS
- Data model: in-memory state only
- Storage: none yet
- Audio analysis: manual timing inputs only in this first slice

## Why this is a good stopping point

This version already proves the core interaction loop:

- the user can hear the song
- the user can see the beat
- the user can adjust timing
- the project can stand alone outside the original repo

That gives SongWeaver a stable base before more ambitious music-analysis features are layered in.
