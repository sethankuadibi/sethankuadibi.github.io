# Design direction — Working Drawing

**Thesis:** The portfolio should read like a set of engineering drawings: precise, annotated, evidence-first, and built to be revised.

## Subject, audience, job

- **Subject:** Seth Adibi Anku, a software engineer and computer scientist in Accra working across interfaces, services, and applied machine learning.
- **Audience:** Hiring managers, engineering leads, and technical founders who scan fast and then look for proof.
- **Job of the page:** In twenty seconds, establish that Seth builds systems that survive real use. In two minutes, provide the evidence: architecture decisions, measured results, and shipped interfaces.

## Why this direction

The current site is a warm editorial page with a trace waterfall. It is competent, but it looks like a developer portfolio template: cream paper, a condensed display face, a green accent, and a dark code panel.

This revamp moves to the visual language of a working drawing: gridded drafting paper, a title block, part numbers, dimension lines, and redline annotations. The metaphor is specific to the subject — systems, interfaces, evidence, revision — and it gives the page a structure that ordinary portfolio sections do not have.

It is deliberately not:

- a dark terminal portfolio with a single acid accent;
- a cream serif editorial page;
- a card grid with rounded corners and gradient blobs;
- a broadsheet newspaper layout with dense columns.

## Color tokens

| Token | Hex | Use |
| --- | --- | --- |
| `--paper` | `#E8EDF0` | Drafting paper background |
| `--paper-2` | `#DDE4E9` | Recessed panels, hover fills |
| `--ink` | `#0D1720` | Primary text, solid marks |
| `--ink-soft` | `#2A3843` | Body copy |
| `--muted` | `#5A6A75` | Secondary labels, metadata |
| `--line` | `#B8C6CF` | Hairline rules, grid |
| `--line-strong` | `#8EA2AF` | Section boundaries, table heads |
| `--blue` | `#1D4E89` | Blueprint lines, links, primary actions |
| `--red` | `#B03A22` | Redline annotations, evidence callouts (darkened from `#C2472D` for AA contrast) |
| `--paper-bright` | `#F7FAFC` | Inverted marks, button text |

Blue and red are used like drafting ink: blue for structure, red only for annotation or emphasis. The page should never feel like a two-color poster.

## Typography

| Role | Face | Usage |
| --- | --- | --- |
| Display | **Archivo** (variable width, 700–800, expanded 110–115%) | Hero, section headings, project names |
| Body | **Archivo** (400/500, normal width) | Paragraphs, descriptions, navigation |
| Annotation | **IBM Plex Mono** (400/500, 9.5–12px, uppercase, 0.08em tracking) | Labels, dimensions, table heads, part numbers, captions |

There is no serif. The typographic personality comes from width contrast and case: wide, heavy display lines against small, precise mono annotations.

Type scale:

- Hero: `clamp(3rem, 8vw, 7rem)`, line-height `0.88`, tracking `-0.035em`, expanded width.
- Section heading: `clamp(2rem, 4.2vw, 3.8rem)`, line-height `0.98`, tracking `-0.025em`.
- Subheading: `1.25–1.5rem`, weight 600.
- Body: `16–18px`, line-height `1.6`.
- Annotation: `10–11px`, uppercase mono.

## Grid and layout

- 12-column grid, `max-width: 1360px`, gutters `24px`.
- Outer sheet margin: `clamp(20px, 4vw, 56px)`.
- Background: a 24px minor grid plus a 120px major grid in blue at 4–6% opacity. The grid is a drawing surface, not decoration; it stays quiet behind text.
- A thin sheet frame with corner registration marks encloses the content on wide screens.
- Panels and controls use square corners (`0–2px` radius). Hairline rules do the structural work.
- Section rhythm: `clamp(72px, 10vw, 136px)` vertical padding, separated by a strong rule and a mono section label.

## Signature elements

### 1. Title-block hero

The hero is composed like a drawing sheet:

- Top metadata row: `DRAWING A-01`, `SHEET 1 OF 1`, `REV 02`, `2026`.
- Name and role in mono at the top left.
- The thesis in large expanded Archivo: **“I build systems that hold up.”**
- A short evidence-led paragraph.
- A drafting title block below the copy with fields: `DRAWN BY`, `LOCATION`, `SCALE`, `STATUS`.
- Primary actions: `View the register` and `Download CV`.

### 2. Annotated system schematic

The hero's right half is an inline SVG drawing:

- Nodes: `INTERFACE`, `API`, `DATA`, `MODEL`, `SUPPORT`.
- Orthogonal connectors with small arrowheads and labels such as `REQ/RES`, `STATE`, `TRACES`, `EVAL`.
- Dimension ticks and a small `0 — 214ms` span annotation.
- A redline bracket and callout beside the `MODEL` node: `evidence picks the model`.
- The drawing is illustrative, not a live dashboard. A caption states this.

On load, the connectors draw once via `stroke-dashoffset`; nodes fade in with a short stagger. The drawing is static under `prefers-reduced-motion`.

### 3. Work register

Selected work is a register, not a card grid:

- A table-like layout with columns: `REF`, `PROJECT / DESCRIPTION`, `TYPE`, `EVIDENCE`.
- Part numbers: `A-01` through `A-06`.
- Project titles in expanded Archivo; descriptions in body; evidence as mono values.
- Public repositories link out; private case studies carry a `PRIVATE` stamp instead of a dead link.
- Hover draws a blue rule down the row and shifts the arrow.

The register is followed by a compact "also built" list set as a secondary schedule.

### 4. Sheet section labels

Every section begins with a mono line such as:

`02 / APPROACH — NOTES`

The number is a sheet index, not decorative numbering: it gives the page the logic of a drawing set.

### 5. Redline annotations

Red is reserved for annotations that add evidence or a point of view:

- `measured on held-out data`
- `the simpler model won`
- `API is not done until a person can use it`

These appear as small notes with a leader line or a bracket, never as a large decorative accent.

## Page structure

```text
┌─ sheet frame ────────────────────────────────────────────────┐
│ header: wordmark · nav · SHEET A-01 · CV                    │
├──────────────────────────────────────────────────────────────┤
│ HERO                                                          │
│  meta row: DRAWING A-01 / SHEET 1 OF 1 / REV 02 / 2026       │
│  ┌─ thesis copy ─────────────┐  ┌─ schematic ─────────────┐   │
│  │ name / role              │  │ nodes + connectors       │   │
│  │ I build systems...       │  │ redline note             │   │
│  │ paragraph                │  │ caption                  │   │
│  │ title block + actions    │  │                          │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│ 01 / SELECTED WORK — REGISTER                                 │
│ ref | project + description | type | evidence                 │
│ A-01 ...                                                      │
│ ...                                                           │
│ also built: secondary schedule                                │
├──────────────────────────────────────────────────────────────┤
│ 02 / APPROACH — NOTES                                         │
│ three notes with redline annotations                          │
├──────────────────────────────────────────────────────────────┤
│ 03 / EXPERIENCE — DIMENSION LINE                              │
│ vertical rule with dated ticks and role notes                 │
├──────────────────────────────────────────────────────────────┤
│ 04 / TOOLKIT — LEGEND                                         │
│ legend markers + categories + skills                          │
├──────────────────────────────────────────────────────────────┤
│ 05 / ABOUT — FIELD NOTES                                      │
│ narrative + facts panel                                       │
├──────────────────────────────────────────────────────────────┤
│ 06 / CONTACT — TITLE BLOCK                                    │
│ availability stamp, email, links                              │
├──────────────────────────────────────────────────────────────┤
│ footer: sheet number · location · date · back to top          │
└──────────────────────────────────────────────────────────────┘
```

## Motion

- Page load: the grid fades in; the schematic connectors draw once; the hero copy reveals with a short upward shift.
- Scroll: section rules and rows reveal with a 12px upward shift and fade. No parallax, no scroll-jacking.
- Hover: row rules draw, arrows shift 2px, links underline with a blue rule.
- Reduced motion: all drawing, reveals, and transitions become instant or static. The page must remain complete without animation.
- No continuous ambient animation. The page is a drawing, not a demo reel.

## Responsive behaviour

- `≥1100px`: two-column hero; full register columns.
- `760–1099px`: hero stacks; schematic sits below the copy at up to 640px wide; register drops the `TYPE` column, keeps evidence.
- `<760px`: single-column register with labels above values; title block fields stack; the schematic collapses into a legible vertical ledger with shorter node labels.
- Header nav becomes a scrollable row below the wordmark on small screens.
- No horizontal overflow at 320px.

## Accessibility and quality floor

- Keyboard-visible focus in blue with a 2px offset.
- All text meets WCAG AA contrast against the drafting paper.
- The schematic has a `<title>` and `<desc>`; it is decorative only in the sense that the same information appears in the adjacent copy.
- Links have discernible names; private work is labelled in text, not colour alone.
- No motion is required to understand the page.
- Target: zero axe violations at 320, 390, 768, and 1440; zero W3C validation messages.

## Copy voice

- Plain, specific, evidence-led. Prefer numbers and decisions to adjectives.
- Labels are mono uppercase; body copy is sentence case.
- No "passionate", "innovative", "cutting-edge", or "leveraging".
- Every claim should be backed by a project, a role, or a measured result.
- Errors and empty states, where relevant, say what happened and what to do next.

## What changes from v1

| v1 | v2 |
| --- | --- |
| Warm cream paper, green accent | Cool drafting paper, blueprint blue, redline red |
| Condensed Anybody display | Expanded Archivo display |
| Animated trace waterfall | Annotated system schematic |
| Editorial work rows | Work register with part numbers |
| Generic cards and chips | Title blocks, legends, schedules, dimension lines |
| Trace panel as signature | Drawing sheet as signature |

## Success check

The page should feel like it could be pinned to a studio wall: gridded, annotated, and specific to the person who made the systems. If a section could be moved to another developer's portfolio unchanged, it needs more of Seth's evidence in it.
