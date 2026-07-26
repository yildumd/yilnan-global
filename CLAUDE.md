# CLAUDE.md — Yilnan Global Concepts Company Site

## What this project is
The official **company site for Yilnan Global Concepts** (tagline: **"Your Idea. Our Code."**), a Nigeria-based **holding company / group** run by Yildum David Jonah (David) that builds ventures across **tech and food**, and also builds software for clients through its studio arm.

This is NOT just a portfolio. It presents Yilnan as a group with two clear tiers:
1. **Our Ventures** — businesses Yilnan owns and runs (tech + food).
2. **Our Work / Client Solutions** — software built for clients.

The distinction matters: a visitor should see both "this group owns and runs real businesses" (credibility + ambition) AND "they also build for others" (the service being sold). Ventures and Client Work are DISTINCT sections — never merge them into one flat "Projects" list.

## Stack
- React + Vite
- Tailwind CSS
- Framer Motion (animations)
- react-icons
- Deployed via GitHub (pushed through Git Bash; hosting TBD — likely Vercel to match past projects)

## Commands
- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Project structure (src/)
- `components/layout/` — Navbar.jsx, Footer.jsx
- `components/sections/` — Hero, About, Services, Industries, Projects, Process, Testimonials, CTA, Contact
- `components/ui/` — Button.jsx, Container.jsx, Section.jsx (reusable primitives — use these, don't reinvent)
- `assets/` — hero.png and icons
- `App.jsx` — assembles the sections
- `index.css` / `App.css` — global styles

## Conventions
- Reuse the existing `ui/` primitives (Button, Container, Section) for consistency — do not create new one-off wrappers when these fit.
- Keep the component-per-section pattern already in place.
- Tailwind utility classes for styling; keep the existing design language unless we explicitly redesign.
- Africa-first, professional, non-generic aesthetic — typography-led, clean, not a template look.

## What we're building / roadmap
1. **Restructure into a holding-company site** — split the single "Projects" section into TWO distinct sections: **Our Ventures** (Yilnan-owned) and **Our Work / Client Solutions** (built for clients). This is the core change.
2. **Polish all existing sections** — copy, layout, responsiveness, animations.
3. **Add a new "Yilnan Builds" giveaway section** (see below).
4. Populate **Services** from David's 12-category rate card (the studio offering).
5. Ensure the Hero + About clearly communicate the group/holding-company identity, not a plain dev studio.

## Site sections (target structure)
- Hero — group identity: "a group building across tech and food"
- About — the Yilnan story, holding-company framing
- **Our Ventures** — Yilnan-owned businesses (see below)
- **Our Work / Client Solutions** — client projects (see below)
- Services / What We Do — the studio offering (12-category rate card)
- Yilnan Builds — monthly giveaway
- Process — how Yilnan works with clients
- Testimonials
- Contact / CTA

## The "Yilnan Builds" giveaway (important — get the framing right)
A monthly community giveaway: Yilnan builds a website for ONE selected business per month; the winner pays only for hosting/domain.

**Critical:** This is NOT a raffle or random draw. Under Nigerian law (NLRC / National Lottery Act + Advertising Code), prize distribution by *chance* is a regulated lottery, and words like "raffle"/"raffle draw"/"win" are restricted. To stay clear of this:
- Selection is **merit-based** (a contest of judgement, not chance). Businesses apply with a short pitch; David (optionally + a small panel) selects based on genuine need, story/impact, and readiness.
- Use the word **"giveaway"** or "selection," never "raffle."
- Include an application form on this site (this also drives site traffic).
- Winner gets a required "Built by Yilnan Global Concepts" footer credit + a "meet this month's business" feature post.
- Scope guardrail: fixed template, single-page or max 3-page site, delivered within ~5–7 days. Winner pays hosting/domain (put in a simple one-page agreement).

Also tease (do not build yet): a **2027 startup fund** — Yilnan plans to invest ~₦1M in a selected startup roughly every 6 months starting next year. Mark as "coming 2027."

## OUR VENTURES (Yilnan-owned businesses — the "we build and run our own" tier)
Show ONLY live/launched ventures publicly. Early-stage concepts stay private until launch.
These are companies Yilnan owns/operates, presented as equal-tier group ventures across sectors:
- **AgriSync AI** — agritech. AI agricultural platform (React + Vite + Firebase PWA, Android via Capacitor). AI crop diagnosis (Claude API), produce marketplace, farm GPS registration, carbon scoring, SOS safety, admin dashboard. Live at agrisyncai.farm.
- **Mbegu Flavours** — food/spice. Yilnan's export-grade spice brand (David's food venture). Near-complete factory in Jos; export-grade blends: Pepper Soup Spice (launching first), Mai Suya (Classic + Hot), Naija Everyday. Present as a FULL company venture under "Our Ventures" — this shows Yilnan builds across tech AND food. Make clear it's a food/spice brand (not a software service), and that Yilnan built its digital presence.

**Do NOT display publicly yet (pipeline — keep private until launch):** AjoX, SphereLearn(n), Yilnan HealthOS-as-product. These stay documented here for context but must not appear on the live site until David says they've launched.

## OUR WORK / CLIENT SOLUTIONS (software built for clients — the studio offering)
- **Bethstream Solutions** — networking/security company site (React + Vite + Firebase + Cloudinary), WhatsApp ordering, admin dashboard. Live at bethstreamsolutions.com.
- **Ryaniva** — logistics platform (client: Mrs. Gloria Magit). In Play Store closed testing (Alpha).
- **LevyTrack** — digital trader registration + levy collection for Plateau State informal markets (Flutter + Firebase). Government-partnership pathway.
- **Yilnan HealthOS / Hope Haven Hospital app** — hospital management (React + Vite + Supabase), 7 department accounts, patient e-wallet, pharmacy inventory, Claude-powered AI assistant (YILAI). Deployed at yilnan.vercel.app.
- **GuardPath** — community security intelligence platform for Plateau State (React Native + Expo + Firebase).

**Remove from site entirely:** Fiye Foods (drop it — do not display).
**Do NOT display publicly yet (not hosted / not launched):** Lee & Ray Agency (real client but site not yet hosted — hold until live). Keep documented here, off the public site.

## Stats / numbers rule (IMPORTANT)
The current site has PLACEHOLDER stats (150+ businesses, 98% retention, 40% efficiency). These are NOT real — do not keep or reuse them. Use only honest, defensible figures, e.g.:
- 2 live ventures owned (AgriSync AI, Mbegu Flavours)
- 7+ client projects shipped (real count)
- 6+ sectors: agritech, food, health, logistics, govtech, security
- Live products in market
Never invent metrics. Modest and real beats big and hollow.

## Tone / copy guidance
- Confident, credible, warm. Speaks to Nigerian/African SMEs and founders.
- Lead with the group identity: Yilnan is a company that BUILDS AND OWNS ventures (tech + food), and also builds for clients. Not "just a dev shop for hire."
- Emphasise: locally relevant, Africa-first solutions across agritech, govtech, logistics, health, food.
- The ownership angle is the differentiator — "we build products we believe in enough to own" is more persuasive to a client than a portfolio alone. Weave this in.
- Avoid hype/filler. Concrete outcomes over buzzwords.

## Things to always do
- Read files before editing; summarise a plan before large multi-file changes.
- Keep commits small and descriptive.
- Preserve the existing design system unless a redesign is explicitly requested.
- CLEANUP: the current site references Fiye Foods and Lee & Ray in Projects AND likely in Testimonials. Remove Fiye Foods everywhere; remove Lee & Ray from public display everywhere (Projects + Testimonials) until its site is hosted. Don't leave orphaned testimonials for clients not shown.
