---
name: Al-Kahfi Portfolio
description: Papan Keberangkatan, a daytime airport terminal of yellow wayfinding signs and black split-flap boards.
colors:
  concourse: "#ebe8e1"
  concourse-shade: "#e1ddd4"
  counter-white: "#f8f6f1"
  ink: "#141413"
  ink-2: "#3b3934"
  ink-3: "#59564f"
  line: "#cbc6bb"
  field: "#77726a"
  sign-yellow: "#ffc629"
  sign-yellow-hover: "#ffd35c"
  board-black: "#0e0f11"
  flap-charcoal: "#1e2024"
  flap-ink: "#f3f0e7"
  flap-dim: "#8d8a83"
  departure-green: "#3ddc75"
  accent-soft: "#fff0c4"
  whatsapp: "#167c46"
  whatsapp-hover: "#12693b"
  ok: "#157a3c"
  ok-soft: "#dcefe1"
  warn: "#8a5300"
  warn-soft: "#fbeccb"
  night-concourse: "#141517"
  night-concourse-shade: "#1a1b1e"
  night-counter: "#212226"
  night-ink: "#f1eee6"
  night-ink-2: "#c6c2b8"
  night-ink-3: "#a29e94"
  night-line: "#36373c"
  night-field: "#85827a"
  night-board: "#0a0a0b"
  night-flap: "#1b1d20"
  night-accent-soft: "#2e2716"
  night-ok: "#4ade80"
  night-ok-soft: "#12291a"
  night-warn: "#f0b660"
  night-warn-soft: "#2a2010"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "92px"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Barlow Semi Condensed, Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow Semi Condensed, Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Barlow, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.12em"
  flap:
    fontFamily: "Barlow Semi Condensed, Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "33px"
    fontWeight: 700
    lineHeight: 1
rounded:
  sm: "2px"
  md: "4px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(64px, 10vw, 128px)"
  page: "1240px"
  header: "64px"
  target: "44px"
components:
  button-sign:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-sign-hover:
    backgroundColor: "{colors.sign-yellow-hover}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sign-yellow}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  header-sign:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    height: "{spacing.header}"
  departure-board:
    backgroundColor: "{colors.board-black}"
    textColor: "{colors.flap-ink}"
    rounded: "{rounded.md}"
    padding: "clamp(14px, 2.4vw, 28px)"
  flap-cell:
    backgroundColor: "{colors.flap-charcoal}"
    textColor: "{colors.flap-ink}"
    typography: "{typography.flap}"
    rounded: "{rounded.sm}"
  gate-plate:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    width: "76px"
  gate-sign-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.flap-ink}"
    height: "76px"
  status-live:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.departure-green}"
    padding: "5px 9px"
  status-in-progress:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    padding: "5px 9px"
  boarding-pass:
    backgroundColor: "#fbfaf6"
    textColor: "{colors.ink}"
  boarding-pass-stub:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.ink}"
    padding: "18px 16px"
    width: "132px"
  input:
    backgroundColor: "{colors.concourse}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "50px"
---

# Design System: Al-Kahfi Portfolio

## Overview

**Creative North Star: "Papan Keberangkatan"**

The site is a daytime airport terminal. Warm concrete ground carries two materials that do all the talking: yellow wayfinding signs with black type for navigation and every primary action, and matte black split-flap boards for anything that is scheduled, measured or live. Projects are departures, sections are signed directions, the about page is a boarding pass and the contact form is a check-in desk. The visitor should be able to find the yellow action from anywhere, the way a traveller finds the exit sign.

Density is terminal-like: big, heavy condensed headings, square sign panels, catalogue grids that share their rules with no gutters, and short labelled rows. Nothing is a soft card. Depth comes from the boards and the boarding pass sitting on the concourse, not from floating surfaces.

At night the concourse goes dark but the signs and boards do not change: the header stays yellow, the boards stay black.

**Key Characteristics:**
- Sign yellow (#ffc629) with black type is the only action color; departure green is reserved for LIVE and NOW.
- Barlow throughout, Barlow Semi Condensed for display; tabular numerals on every number.
- Square corners (2px and 4px only); 2px black rules instead of shadows on most panels.
- Split-flap motion: characters spin and land left to right; the EN/ID toggle re-flaps every board.
- Every section title is a direction sign with a yellow arrow plate.

## Colors

A concrete-and-signage palette: warm greys for the ground, one saturated yellow for direction, black for boards and type, and a single green lamp for live.

### Primary
- **Sign Yellow** (sign-yellow): the header strip, section arrow plates, gate numbers, the boarding-pass stub, the "A" check-in counter, focus halo and text selection. Hover lightens to sign-yellow-hover. Always carries black (ink) type, never white.
- **Board Black** (board-black) with **Flap Charcoal** (flap-charcoal): the departure board and the "B" hiring counter. Flap cells are a two-tone split (#25272b top half, flap-charcoal bottom) with a #050506 hinge line.

### Tertiary
- **Departure Green** (departure-green): LIVE status on the board and gate chips, the NOW lamp in the flight log. Used only on black. In light-surface text contexts the darker ok (#157a3c) is used instead (availability dot, gate outcome lines).
- **WhatsApp Green** (whatsapp): the WhatsApp button and floating button only.

### Neutral
- **Concourse** (concourse) and **Concourse Shade** (concourse-shade): page ground and alternating section bands, the contact band, input fill.
- **Counter White** (counter-white): gate cards and the contact form panel.
- **Ink** (ink, ink-2, ink-3): headings and rules, body copy, captions and metadata.
- **Line** (line) and **Field** (field): hairline dividers in lists; input borders and the scrollbar thumb.
- **Flap Ink** (flap-ink) and **Flap Dim** (flap-dim): characters on the board; column headers and LANDED rows.

### Night terminal
`:root[data-theme='dark']` swaps the concourse to the night-* values, flips ink to near-white, and turns `--accent` yellow (so `btn-primary` becomes a yellow sign at night and a black sign by day). `--sign`, `--on-sign`, `--flap-ink` and the header do not change between themes.

### Named Rules
**The Wayfinding Rule.** Yellow means "go here". It marks navigation and the primary action of a section, always with black type, and is never used as decoration or body-text color on light ground.

**The Green Lamp Rule.** Departure green appears only for something that is live right now (LIVE, NOW, available) and only on black.

## Typography

**Display Font:** Barlow Semi Condensed (with Barlow, ui-sans-serif, system-ui)
**Body Font:** Barlow (with ui-sans-serif, system-ui, -apple-system, Segoe UI)

**Character:** A signage grotesk with its condensed sibling. Headings are heavy (700 to 800), tight-tracked and short-leaded like terminal signs; body stays regular at 18px. Loaded weights: Barlow 400/500/600/700 and 400 italic, Semi Condensed 600/700/800.

### Hierarchy
- **Display** (800, clamp(46px, 7vw, 92px) fluid, 92px max, 0.92): the hero headline only, max 15ch.
- **Headline** (800, clamp(36px, 5.2vw, 64px) fluid, 64px max, 1): section titles, each preceded by the yellow arrow plate.
- **Title** (700, 26px, 1.05): gate names, counter headings (up to 42px on the check-in counters), toolkit and process steps (24 to 28px).
- **Body** (400, 18px desktop / 17px under 720px, 1.55): prose at max 62 to 70ch; leads at 19 to 22px in ink-2.
- **Label** (600 to 700, 12 to 14px, 0.08 to 0.12em, uppercase): board column headers, boarding-pass field names, status chips, toolkit group names. Panel header bars (board title, pass head, check-in desk) use the display font at 18 to 28px, 700, 0.06 to 0.12em, uppercase, in sign yellow on black.
- **Flap** (display font, 700, 0.98 of the cell unit, 33px at full width): characters inside split-flap cells, sized from the board width.

### Named Rules
**The Tabular Rule.** `font-variant-numeric: tabular-nums` is set on body; every time, count, year and flight code aligns in columns.

## Layout

A single 1240px page column with a fluid gutter of clamp(16px, 4vw, 40px). Sections are padded clamp(64px, 10vw, 128px) top and bottom and alternate between concourse and concourse-shade. Section heads cap at 46rem with a 38rem lead. The sticky header is 64px; anchor scroll offsets by header height plus 16px.

The departure board is a container-query grid: one cell unit `--u = min(34px, 100cqi / 38)` sizes every flap so each row stays on one line; under 620px container width the destination takes its own line and the column header hides. Work gates form an edge-to-edge catalogue: a full-width lead gate, then a two-column grid from 720px where adjacent gates share their 2px borders. Smaller projects are a printed departures list in two columns from 860px.

Breakpoints in use: 480, 560, 640, 720, 860, 960 and 1000px. Under 720px, long card rows become a sideways swipe carousel (84% columns, scroll-snap). Tap targets are at least 44px.

## Elevation & Depth

Mostly flat. Panels separate from the concourse with 2px ink rules, not shadows. Shadows are kept for the two physical objects that sit on the concourse: the departure board (inset top highlight plus shadow-lg) and the boarding pass (shadow-lg, rotated -1deg). The floating WhatsApp button carries its own lift.

### Shadow Vocabulary
- **shadow-sm** (`0 1px 2px rgb(20 20 19 / 0.08)`): testimonial quotes.
- **shadow-md** (`0 2px 4px rgb(20 20 19 / 0.06), 0 12px 24px -10px rgb(20 20 19 / 0.22)`): defined, available for raised app-like surfaces.
- **shadow-lg** (`0 4px 8px rgb(20 20 19 / 0.08), 0 28px 48px -18px rgb(20 20 19 / 0.35)`): the board and the boarding pass. Night values deepen to pure black alpha.

### Named Rules
**The Objects-Only Rule.** A shadow means a physical object resting on the concourse (board, ticket, floating button). Signs, gates, counters and forms are flat with a 2px rule.

## Shapes

Square. Two radii only: 2px on buttons, inputs, toggles and flap cells; 4px on the board and testimonial frames. Gate cards, counters, status chips and the boarding pass have no radius at all. Circles are reserved for lamps (availability dot, NOW lamp) and the avatar. Borders are 2px ink on sign panels and gates, 3px ink for list top rules and the process line, 1px line for row dividers. The boarding-pass stub is set off by a 2px dashed perforation.

## Components

### Buttons
Sign panels: square, heavy, unmistakable.
- **Shape:** 2px radius, 2px border, min-height 48px (56px large), 0 20px padding, 17px 700, 20px icons.
- **Sign:** sign yellow, black type; hover lightens.
- **Primary:** black with yellow type by day, yellow with black type at night.
- **Secondary:** transparent with a 2px ink border; hover fills ink with concourse type.
- **WhatsApp:** WhatsApp green, white type.
- **Ticket (every WhatsApp link):** `TicketLink` renders a notched ticket: main part (WhatsApp green with white type, or ink with yellow type for the hero) and a 52px tear-off stub (sign yellow, black plane; black with a yellow plane on the yellow counter) behind a 2px dashed perforation, with 7px notches masked top and bottom at the perforation. Large size: 76px tall, display 28px, 76px stub. On hover or focus the plane takes off up-right and lands back in 0.9s. The floating button is the same ticket, fixed bottom-right, label hidden under 640px, and its plane takes off twice 3s after load.
- **Active:** translateY(1px). Focus: 3px ink outline at 3px offset plus a 6px yellow halo.

### Navigation (header sign)
Overhead wayfinding sign: yellow strip, 2px black bottom rule, stays yellow at night. Brand in display 21px 800 with a 2px-ringed avatar; section links 17px 600 with arrow icons and a 3px underline on hover (shown from 1000px). The EN/ID toggle and theme button are 2px black outlined; the pressed language inverts to black with yellow. A black "Start a project" block shows from 640px.

### Departure Board (signature)
Board black panel with a yellow uppercase title and a live clock. Hovering or focusing a row spins that row again. Rows: since, flight code, destination, status, each a run of flap cells. Characters spin through random glyphs every 55ms and settle left to right with a 0.11s flip; status tones are green LIVE, dim LANDED, yellow BOARDING. The last row, NEXT: YOUR TEAM, links to contact, renders its destination in yellow and blinks BOARDING four times. Hover lightens a row by 5% white; focus outlines in yellow.

### Gates (work cards)
Counter-white card with a 2px ink border. A 76px black sign bar holds a 76px yellow gate plate (display 30px 800) whose letters spin in like flaps (no cell housing) when the gate enters view and again on hover, the destination title, a kind line, and a yellow arrow that nudges up-right on hover. Media below is a full-page capture that scrolls top to bottom over 7s on hover. Status row: role, and an outcome line in ok green. Status chips: LIVE (black, departure green), IN PROGRESS (yellow, black), LANDED (black, dim), NOT PUBLIC (1px field outline).

### Check-in Counters (paths)
Two flat panels with a 2px black border: A in sign yellow, B on board black. Each heading carries a square counter letter in the inverse color; list items sit under a 2px currentColor rule with 3px-stroke check icons.

### Boarding Pass (about)
Off-white ticket (#fbfaf6) rotated -1deg with shadow-lg. Black head bar in yellow uppercase display; grayscale photo; label/value fields with flight-code values in display 22px 800. A 132px yellow stub, separated by a dashed perforation, carries a CSS barcode and downloads the CV; hovering the stub sweeps a red scanner line down the barcode. Under 560px the stub moves below and the rotation is removed.

### Flight Log (experience)
Ruled rows; running roles carry a black NOW chip with a green lamp. Extra points and earlier roles expand with a chevron that rotates 180deg.

### Inputs / Fields (check-in desk)
Concourse fill, 2px field border, 2px radius, 50px min-height, 17px. Hover darkens the border to ink-2; focus turns it ink with a 4px yellow halo. The form panel opens with a black desk bar in yellow uppercase display type.

### Motion
One easing, `cubic-bezier(0.16, 1, 0.3, 1)`, plus `cubic-bezier(0.45, 0, 0.2, 1)` for the route plane's flight. Hover transitions 0.18 to 0.3s; scroll reveal fades up 20px over 0.7s, only when JS runs and motion is welcome. Section-title arrows slide onto their yellow plate as the heading arrives. The process route draws segment by segment (0.35s stagger) while a plane flies from stop 1 to just short of stop 4 over 1.6s; on phones the line draws downward and the plane is hidden. Reduced motion shows final text immediately and collapses all transitions and animations.

## Do's and Don'ts

### Do:
- **Do** use sign yellow with black type for navigation and the one primary action per section.
- **Do** put anything scheduled, live or counted on a black board or chip, in tabular numerals.
- **Do** keep corners at 2px or 4px and separate panels with 2px ink rules.
- **Do** keep the header and boards identical in both themes; only the concourse changes at night.
- **Do** give every flap animation a static, reduced-motion fallback.

### Don't:
- **Don't** use departure green for anything that is not live right now, or on light ground.
- **Don't** set white type on sign yellow.
- **Don't** use soft rounded cards or floating shadows on signs, gates, counters or forms.
- **Don't** add a second accent hue; yellow, black and the green lamp are the whole signal vocabulary.
