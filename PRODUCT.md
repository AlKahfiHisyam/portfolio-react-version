# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences reach this site, usually from a LinkedIn profile, a WhatsApp forward or a CV link:

- **Clients and business owners** (often Indonesian SMEs, often non-technical) who need a company website, an internal system or a dashboard built, and decide on trust and fit rather than tech stack. Many prefer WhatsApp and Bahasa Indonesia.
- **Recruiters and hiring managers** (Indonesian companies and remote-first teams) skimming quickly, often on a phone, for role fit, experience and a CV.
- **Technical evaluators** (for example a startup CTO hiring a remote contractor) who judge ownership, depth and care in the work.

## Product Purpose

The personal portfolio of Al-Kahfi Fajrhul Hisyam, a full stack developer in Gresik, Indonesia. Its job is to get the right visitor to make contact: a client to start a project, a company to start a hiring conversation. Success is a visitor reaching out (WhatsApp, email, contact form or CV download) after one visit.

Al-Kahfi is currently open to all three: freelance projects, remote contracts, and a new full-time role.

## Positioning

Builds the systems companies run on day to day, not just marketing sites: since June 2022 he has built PISMART, the HR platform at PT Pupuk Indonesia (Laravel and Golang backend, frontend moving from jQuery to Next.js), alongside freelance work for clients in Indonesia and a 2025 remote contract with a US digital health company. Few freelancers available to an Indonesian SME can point to a production enterprise HR system.

## Operating Context

- Visitors arrive cold and decide within one visit; the site must work on a phone first.
- Indonesian clients expect WhatsApp as the contact channel; recruiters expect a downloadable CV.
- The site is English by default with a full English/Indonesian toggle (confirmed by the owner).
- Hosted as a static Vite build; the contact form posts to Formspree.

## Capabilities and Constraints

- Stack: React 19, Vite, CSS Modules. No backend of its own.
- Content lives in `src/data/portfolio.js`.
- Live GitHub data comes from the unauthenticated GitHub API (60 requests per hour per IP) and a community contributions mirror; both can fail and must degrade silently.
- Undecided: whether to show rates or price ranges (not provided; do not invent).

## Brand Commitments

- Name shown as "Al-Kahfi Hisyam" (full name Al-Kahfi Fajrhul Hisyam).
- Contact: career.alkahfi@gmail.com, WhatsApp +62 858-5478-9879, linkedin.com/in/careeralkahfi, github.com/AlKahfiHisyam.
- Visual direction (chosen 2026-11-20, replacing the 2026-11-18 category-standard look): "Papan Keberangkatan", a daytime airport terminal world with split-flap departure boards and yellow wayfinding signs. See the surface brief for the direction contract.
- The previous "space" theme and the reference site pujayana.com are not binding; pujayana.com explicitly forbids imitation of its design, so nothing may be copied from it.

## Evidence on Hand

- Work history and project list in `src/data/portfolio.js` (PISMART 20+ modules; 10+ freelance web apps; 25 web templates at Build With Angga).
- Images in `public/assets/projects/`: PISMART promotional banner, Agendakota dashboard screenshot on a laptop, logos for Private MD Labs, Tracer Study UNAIR, Build With Angga, JLOG, Tergar, Kost Cemara, Psycho AI.
- The owner will supply, not yet on hand: real (redacted) app screenshots, a profile photo, a CV PDF, testimonials and outcome numbers. Until they arrive, the site must not show placeholder quotes, invented numbers or fake screenshots; slots stay hidden.

## Product Principles

1. Every screen moves the visitor toward contact; the hire action is always one tap away.
2. Prove, don't claim: real work, real screens, real results, nothing invented.
3. Speak to the visitor's job (what I can build for you, what I did for my employer) before the tech stack.
4. Respect the phone and the hurry: fast, short, readable in 30 seconds.
5. Bilingual by design, not by translation afterthought.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast, 3:1 for field boundaries, 44px touch targets, keyboard focus, reduced motion respected.
