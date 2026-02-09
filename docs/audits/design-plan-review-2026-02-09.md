# OneSync Website Design Update Plan -- Comprehensive Review

**Date:** February 9, 2026
**Reviewed By:** 3 Specialist Agents (Senior UI/UX Designer, Senior Frontend Engineer, Series A Investor)
**Plan Under Review:** `docs/plans/2026-02-09-website-design-update.md`
**Supporting Plan:** `docs/plans/2026-02-09-product-brainstorm.md`

---

## SCORECARD SUMMARY

| Dimension | UI/UX Designer | Frontend Engineer | Investor | Weighted Avg |
|-----------|:-:|:-:|:-:|:-:|
| **Alignment with Design Philosophy** | 42 | -- | -- | 42 |
| **Visual Quality** | 68 | -- | 62 | 65 |
| **Technical Feasibility** | -- | 62 | -- | 62 |
| **Performance Impact** | -- | 38 | -- | 38 |
| **Accessibility** | 55 | -- | -- | 55 |
| **Interaction Design** | 52 | -- | -- | 52 |
| **Bundle Size / Code Quality** | -- | 35 / 55 | -- | 45 |
| **Market Positioning** | -- | -- | 71 | 71 |
| **Trust & Credibility** | -- | -- | 44 | 44 |
| **Conversion Potential** | -- | -- | 38 | 38 |
| **OVERALL** | **48** | **48** | **52** | **49** |

### Verdict: **APPROVE WITH MAJOR CONDITIONS** (49/100)

All three reviewers independently arrived at nearly identical scores (48, 48, 52) with the same core conclusion: the plan is technically competent but fundamentally misaligned with priorities.

---

## THE CORE PROBLEM (Unanimous Across All 3 Reviewers)

> **The plan optimizes for visual spectacle when the project's own design document explicitly rejects that approach, and the business needs demand product evidence over polish.**

The design philosophy says *"Motion should teach, not impress"* and *"infrastructure you can trust."* Yet ~50% of proposed items are decorative showpieces (magnetic buttons, blend-mode cursors, WebGL gradients, command palettes) that serve neither the philosophy nor institutional buyer conversion.

---

## ITEMS TO CUT (Unanimous or 2/3 Agreement)

| Item | All 3 Agree? | Why |
|------|:-:|-----|
| **#21 Command Palette (cmdk)** | 3/3 | 4-page site doesn't need Cmd+K. Engineering vanity. Also has React 19 peer dep issues |
| **#19 WebGL Mesh Gradient** | 3/3 | Unmaintained (MiniGL), WebGL context budget risk, battery drain on mobile, contradicts "deep graphite / near-black" |
| **#15 Blend-Mode Cursor Expansion** | 3/3 | 120px cursor blob is "distracting animation" -- exact thing philosophy forbids. Current cursor is already over-engineered |
| **#11 Magnetic CTA Buttons** | 2/3 | "Aerospace interfaces don't have bouncy buttons" |
| **#13 SplitType Text Reveal (rotateX: -90)** | 2/3 | Theatrical, hydration risk, SSR issues. Replace with React-native char splitting |
| **#20 Horizontal Scroll Gallery** | 2/3 | Scroll hijacking a11y hazard; no content justification |

---

## ITEMS TO PRIORITIZE (Unanimous or 2/3 Agreement)

| Priority | Item | Why |
|:--:|------|-----|
| 1 | **Accessibility fixes** (prefers-reduced-motion, ARIA, focus-visible, skip link) | Ethically mandatory, zero performance cost, addresses 3 critical audit findings |
| 2 | **Skeleton loading screens** + error boundaries (loading.tsx / error.tsx) | Real UX gap -- site has no loading states except privacy page |
| 3 | **Interactive System Demo (/demo)** | THE most important item per investor review. Shows conditional inference -- your #1 differentiator |
| 4 | **Scroll-aware sticky header** | Standard UX, easy upgrade from existing scroll listener |
| 5 | **Meta tags + tabular numbers** (Tier 1 quick wins) | 15-min fixes showing craft. theme-color partially done already |

---

## CRITICAL RED FLAGS FROM INVESTOR REVIEW

These are **non-design issues** that matter more than any animation:

1. **Gmail contact (`01nesync@gmail.com`)** -- Disqualifying for defense/enterprise buyers. Get a professional domain email immediately
2. **"HIPAA Ready" / "FDA Pathway" / "SOC 2 Compliant" badges** -- If aspirational, this is material misrepresentation. Label as "Planned" or remove
3. **No conversion flow** -- Primary CTA is a mailto link. No form, no Calendly, no HubSpot. Enterprise buyers won't compose emails to Gmail
4. **No product evidence** -- No pilot data, no validation metrics, no case studies. The site is "a pitch deck as a webpage"
5. **Conditional inference not on homepage** -- Your single best differentiator ("honest enough to say I don't know") is absent from all live pages

---

## TECHNICAL RISKS FROM ENGINEER REVIEW

| Risk | Severity | Detail |
|------|:--------:|--------|
| **WebGL context exhaustion** | Critical | 3 WebGL contexts (R3F ModelViewer + mesh gradient + 360 canvas) = context loss on mobile |
| **Lenis + View Transitions conflict** | Critical | Lenis replaces native scroll; View Transitions snapshot will disagree on scroll position |
| **GSAP vs Framer Motion viewport disagreement** | High | ScrollTrigger uses scroll proxy; Framer Motion uses IntersectionObserver. Different results with Lenis |
| **SplitType hydration mismatch** | High | DOM manipulation in useEffect creates server/client HTML divergence |
| **Memory leak in SmoothScroll.tsx** | Medium | Line 57 creates new function ref on cleanup, never removes original callback |
| **~561KB JS already shipped** | High | Plan adds ~80KB more. Marketing sites at this tier ship 280-350KB |

### Better Alternatives Proposed

| Instead of | Use |
|-----------|-----|
| `next-transition-router` | Framer Motion `AnimatePresence` + `template.tsx` (no extra dep) |
| Canvas 360 viewer | Enhance existing Three.js `ModelViewer` with scroll-driven rotation (15 lines of code) |
| SplitType | React component that maps chars to spans at render time (SSR-safe) |
| WebGL MiniGL | CSS `conic-gradient` + `backdrop-filter: blur()` blobs (zero JS) |

---

## INDUSTRY BENCHMARK FINDINGS

| Topic | Finding |
|-------|---------|
| **View Transitions API** | Still experimental in Next.js 15.2+. Known conflicts with `cacheComponents`. Safari support unreliable. Skip for now |
| **GSAP in Next.js 15** | Now 100% free (all plugins). Use `useGSAP()` hook from `@gsap/react` + centralized registration |
| **Aceternity UI** | Active but ~1/3 components broken with Tailwind v4. Copy-paste = you own maintenance |
| **cmdk** | Peer dep conflict with React 19. Needs `--legacy-peer-deps` workaround |
| **next-transition-router** | Single maintainer, small community. Pin version, have fallback plan |
| **Awwwards 2025-2026** | No health-tech SOTD winners. Oura won 2025 Webby for Best Visual Design. Progressive disclosure + dark theme + scroll reveals = the pattern |

---

## RESOURCE ALLOCATION VERDICT

> **"The team is building a world-class container for content that doesn't yet exist."** -- Investor Review

The design update plan proposes **30+ hours** on visual polish. Meanwhile the business needs:
- A working demo of conditional inference
- Professional contact infrastructure
- A single signed LOI or pilot
- Real product/validation data

**Recommendation: Cut 80% of the design plan. Redirect effort to product evidence and conversion.**

---

## FINAL RECOMMENDATION

### APPROVE WITH THESE CONDITIONS:

**Phase 0 (This week -- business critical):**
1. Professional email domain (kill the Gmail)
2. Audit/fix compliance badges (HIPAA, FDA, SOC 2)
3. Add contact form (Calendly or HubSpot)
4. Gate the pitch deck (email capture)

**Phase 1 (Week 1-2 -- approved design items):**
5. Accessibility fixes (all items from Part 6)
6. Meta tags + tabular numbers + noise texture (Items 1, 2, 4)
7. Skeleton loading + error boundaries (Items 9 + audit)
8. Scroll-aware sticky header (Item 5)
9. Staggered scroll reveal polish (Item 8)

**Phase 2 (Week 2-4 -- highest-value new content):**
10. Interactive System Demo page (`/demo`) -- conditional inference showcase
11. `/teams` landing page with ROI calculator
12. Breadcrumbs on sub-pages (Item 10)
13. Page transitions via `template.tsx` + Framer Motion (not next-transition-router)

**Phase 3 (Only after Phase 2 ships):**
14. GSAP sticky scroll section (Item 14) -- one section only
15. Glassmorphism card upgrade (Item 7)
16. Link hover underlines (Item 17)
17. CSS `:has()` sibling dimming (Item 4.11)

**DEFER INDEFINITELY:** Items 11, 13, 15, 18, 19, 20, 21

---

*Score: 49/100 as proposed. With conditions applied, projected score: ~72/100.*
