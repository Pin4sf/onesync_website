# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OneSync Website - A Next.js 15 marketing site for OneSync/OneBand mental wellness wearable device. Premium dark-themed design with extensive animations.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test suite configured.

## Tech Stack

- **Framework**: Next.js 15.1.6 (App Router), React 19, TypeScript (strict)
- **Styling**: Tailwind CSS 3.4.17 with custom dark theme
- **Animation**: Framer Motion 12.29.2, GSAP 3.14.2, Lenis (smooth scroll)
- **UI**: Shadcn/ui components, Lucide React icons, CVA for variants

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home (composition of section components + preloader)
│   ├── contact/           # Contact page with form
│   ├── investor/          # Investor page (Lean Canvas, Business Model)
│   ├── product/           # Product page
│   ├── team/              # Team page
│   ├── technology/        # Technology page
│   ├── loading.tsx        # Global loading skeleton
│   └── error.tsx          # Global error boundary
├── components/
│   ├── backgrounds/       # GradientMesh, DotGrid
│   ├── layout/            # Header (scroll-aware), Footer
│   ├── sections/          # Full-width page sections (HeroSection, VisionSection, etc.)
│   ├── ui/                # Preloader, MagneticButton, TextReveal, CardSpotlight, etc.
│   └── placeholders/      # Placeholder/animation components
└── lib/
    ├── utils.ts           # cn() utility (clsx + tailwind-merge)
    └── motion.ts          # Framer Motion animation presets
```

## Key Patterns

### Import Alias
Use `@/` for imports: `import { cn } from "@/lib/utils"`

### Client Components
Add `"use client"` directive for components with interactivity or Framer Motion animations.

### Animation Presets
Import from `@/lib/motion`:
```typescript
import { fadeInUp, staggerContainer, heroAnimations } from "@/lib/motion"
```
Apply to motion elements: `<motion.div {...fadeInUp}>`

### Class Composition
Always use `cn()` for merging Tailwind classes:
```typescript
className={cn("base-classes", conditional && "conditional-class", className)}
```

## Design System

### Colors (defined in tailwind.config.ts)
- **Surfaces**: surface-950 (#0a0a0a) to surface-600 (#242424) - dark backgrounds
- **Brand**: emerald, emerald-light, emerald-dark, emerald-shimmer, emerald-glow
- **Text**: text-primary (#FFF), text-secondary (#E5E5E5), text-muted (#737373)

### Typography
- Fonts: Space Grotesk (display), Outfit (sans), Space Mono (mono)
- Custom sizes: display-2xl, display-xl, display, h1-h4, body-lg, body, body-sm

### Custom Utilities (globals.css)
- `.text-emerald-gradient`, `.text-emerald-shimmer` - gradient text effects
- `.glow-emerald`, `.glow-emerald-strong` - glow effects
- `.orb-emerald`, `.orb-gold` - decorative orb elements
- `.section-container` (1200px), `.section-wide` (1400px) - layout containers
- `.noise-overlay` - subtle grain texture overlay
- `.glass-dark`, `.glass-light` - glassmorphism card styles
- `.nav-link` - sliding emerald underline on hover
- `.card-grid` - sibling dimming via CSS `:has()`

## Adding New Sections

1. Create component in `src/components/sections/NewSection.tsx`
2. Add `"use client"` if using animations/interactivity
3. Use motion presets from `@/lib/motion`
4. Import and add to page composition in `src/app/page.tsx`

## Documentation

```
docs/
├── ASSET_REQUIREMENTS.md          # Image/video asset specs
├── AI_ASSET_GENERATION_GUIDE.md   # How to generate assets with AI tools
├── PREMIUM_ANIMATIONS_GUIDE.md    # Animation patterns reference
├── PRODUCT_PROMPTS.md             # AI prompts for consistent product generation
├── Research Docs/                 # Technical research PDFs
├── plans/                         # Design update & product brainstorm plans
├── audits/                        # Design audit reports
└── _archive/                      # Superseded docs (old implementation plan, etc.)
```

## Current Implementation Status

### Completed
- [x] 9 section homepage (Hero, Problem, CostOfStress, Vision, Product, AppShowcase, Market, Team, CTA)
- [x] Dark theme design system with light sections
- [x] Premium typography (Space Grotesk / Outfit / Space Mono)
- [x] Continuous gradient mesh background with animated emerald orbs
- [x] Preloader with stacked word reveal + percentage counter (session-aware)
- [x] Scroll-aware sticky header (hides on scroll down, reveals on scroll up)
- [x] MagneticButton on CTAs (Header, CTA section, Contact form)
- [x] TextReveal (word-by-word opacity on scroll) on VisionSection
- [x] AnimatedCounter statistics on MarketSection
- [x] App screenshots with 3D perspective parallax (AppShowcaseSection)
- [x] SVG circular text decoration on MarketSection
- [x] Contact page with validated form
- [x] Investor page (Lean Canvas, Business Model Canvas)
- [x] Loading skeletons + error boundaries for all routes
- [x] Breadcrumbs on sub-pages
- [x] Accessibility: skip-to-content, aria attributes, prefers-reduced-motion
- [x] Nav-link underlines, card-grid dimming, noise overlay, glass utilities
- [x] Vercel Analytics

### Still Needed
- [ ] Professional email domain (business decision, not code)
- [ ] Hero video background + floating product
- [ ] 360° product scroll canvas/video
- [ ] Interactive System Demo page (/demo) — conditional inference showcase
- [ ] Real product evidence / pilot data
- [ ] For Teams landing page (/teams)
- [ ] Lighthouse performance audit & optimization

## Asset Generation

### With Premium Plans (ChatGPT Plus / Gemini Advanced)

| Asset | Tool | Method |
|-------|------|--------|
| Product images | Gemini Nano Banana | Multi-angle from reference |
| 360° video | Gemini Veo 2 | 8-sec turntable from image |
| Consistent shots | ChatGPT DALL-E 3 | Gen ID method |
| App mockups | v0.dev or Gemini | Dark mode wellness UI |

### $0 Budget Alternatives

| Asset | Tool | Free Tier |
|-------|------|-----------|
| Product images | Leonardo AI | 150/day |
| App mockups | v0.dev | Unlimited |
| Hero video | Pika Labs | Credits |
| Icons | Recraft AI | Free tier |

**Prompts**: See `docs/PRODUCT_PROMPTS.md` for all refined AI prompts.

## Priority Order (Remaining)

1. Professional email + compliance badge audit (business)
2. Interactive System Demo page (/demo)
3. Hero video + floating product asset generation
4. 360° product scroll canvas/video
5. For Teams landing page (/teams)
6. Lighthouse audit & performance optimization
7. Deploy to production
