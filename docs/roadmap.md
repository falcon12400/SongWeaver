# SongWeaver roadmap

## Product direction

SongWeaver is planned as a song analysis and arrangement workspace.

The target workflow is:

1. import a song
2. detect or refine the beat grid
3. recognize lyrics
4. divide the song into sections
5. expand each section to inspect lyrics, summaries, and musical cues
6. attach movement prompts or short cue phrases
7. reuse those sections to rebuild or extend a song on the beat grid

## Planned phases

## Phase 1: beat-first foundation

Goal:

- make beat timing visible and adjustable

Status:

- done in the first standalone prototype

Includes:

- playback
- BPM editing
- first-beat offset editing
- bar emphasis
- phrase counting

## Phase 2: beat analysis

Goal:

- stop relying on manual BPM entry whenever possible

Planned features:

- upload audio and estimate BPM
- detect first strong beat candidates
- save a beat timeline
- allow manual correction of beat markers

## Phase 3: lyric recognition

Goal:

- connect words to the timeline

Planned features:

- speech or lyric recognition
- align recognized lyrics to approximate timestamps
- show short lines directly
- summarize long lyric sections when needed

## Phase 4: section mapping

Goal:

- describe the structure of the whole song

Planned features:

- detect intro, verse, chorus, bridge, instrumental, and outro candidates
- show a section list that can expand and collapse
- count how many verses and choruses exist
- mark repeated sections
- mark variant sections such as a changed final chorus

## Phase 5: musical description for non-lyric sections

Goal:

- make instrumental parts useful instead of blank

Planned features:

- describe intensity changes
- describe rhythmic feel
- describe likely instrumentation changes
- attach short note-style descriptions such as:
  - "builds up here"
  - "brass enters"
  - "lighter groove"

## Phase 6: choreography and cue notes

Goal:

- support movement design directly in the interface

Planned features:

- attach short movement mnemonics beside each section
- attach notes per phrase or per 8-beat block
- keep section summaries short and glanceable

## Phase 7: section-based song weaving

Goal:

- help assemble a complete song from beat-aligned parts

Planned features:

- select the next section by type, such as verse or chorus
- auto-align sections based on stored beat grids
- reduce manual micro-adjustment of audio tracks
- support rough arrangement building without using a full traditional editor

## Design principles

- keep the timeline understandable at a glance
- treat 8-beat phrases as a first-class concept
- show structure before detail
- let instrumental sections be described, not ignored
- prefer lightweight editing over complex DAW-style controls
- keep the UI simple enough for repeated rehearsal use
