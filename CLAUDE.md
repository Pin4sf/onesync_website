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
│   ├── page.tsx           # Home (composition of section components)
│   ├── product/           # Product page
│   ├── team/              # Team page
│   └── technology/        # Technology page
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Full-width page sections (HeroSection, VisionSection, etc.)
│   ├── ui/                # Shadcn/ui + custom primitives (GlowOrb, StatBlock, TeamCard)
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
- Fonts: Inter (sans), Space Mono (mono)
- Custom sizes: display-2xl, display-xl, display, h1-h4, body-lg, body, body-sm

### Custom Utilities (globals.css)
- `.text-emerald-gradient`, `.text-emerald-shimmer` - gradient text effects
- `.glow-emerald`, `.glow-emerald-strong` - glow effects
- `.orb-emerald`, `.orb-gold` - decorative orb elements
- `.section-container` (1200px), `.section-wide` (1400px) - layout containers

## Adding New Sections

1. Create component in `src/components/sections/NewSection.tsx`
2. Add `"use client"` if using animations/interactivity
3. Use motion presets from `@/lib/motion`
4. Import and add to page composition in `src/app/page.tsx`

## Documentation

Asset specs and design guidelines in `docs/`:
- `IMPLEMENTATION_PLAN.md` - **START HERE** - Complete implementation plan with phases, code examples, and prompts
- `AGENT_CONTEXT.md` - Quick context for new agent sessions
- `ASSET_REQUIREMENTS.md` - image/video specs
- `PREMIUM_ANIMATIONS_GUIDE.md` - animation patterns
- `AI_ASSET_GENERATION_GUIDE.md` - How to generate assets with AI tools

## Current Implementation Status

**Target**: Apple/Samsung product page quality with scroll animations

### Completed
- [x] Basic section structure (9 sections)
- [x] Dark theme design system
- [x] Framer Motion integration
- [x] Responsive layout

### In Progress / Needed
- [ ] Premium typography (replace Inter with Space Grotesk/Outfit)
- [ ] Continuous gradient mesh background
- [ ] GSAP ScrollTrigger sticky scroll sections
- [ ] Hero video background + floating product
- [ ] 360° product scroll canvas
- [ ] Animated counter statistics
- [ ] Real product/app assets (generate via AI tools)

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
**Full Plan**: See `docs/IMPLEMENTATION_PLAN.md` for detailed workflow.

## Priority Order

1. Typography upgrade (fonts)
2. Gradient mesh background
3. GSAP ScrollTrigger setup
4. Generate assets with AI tools
5. Hero section upgrade
6. Product 360° canvas
7. Polish and deploy
