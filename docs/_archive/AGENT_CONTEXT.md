# OneSync Website - Agent Quick Context

> **TL;DR**: Building a premium wearable product website (like Apple Watch/AirPods pages) for mental wellness device called OneBand. Dark theme. Emerald accent.

---

## Product Description (OneBand)

```
Material:  Woven braided mesh textile (NOT silicone)
Color:     Dark charcoal/anthracite black
Sensor:    Small eye-shaped metallic silver element
Aesthetic: Premium minimalist (Oura Ring / Whoop style)
```

Reference images available in project. Use `docs/PRODUCT_PROMPTS.md` for AI generation.

---

## Instant Context

**Product**: OneBand - mental wellness wearable that monitors cognitive health
**Company**: OneSync
**Tech**: Next.js 15, React 19, Tailwind, Framer Motion, GSAP
**Theme**: Premium dark (#0a0a0a), emerald accent (#0B5844, #50E3A4)
**Goal**: Apple/Samsung product page quality with scroll animations

---

## What Exists

```
src/
├── app/page.tsx           # Home - 9 section components
├── components/sections/   # HeroSection, ProductSection, etc.
├── components/ui/         # SectionLabel, StatBlock, TeamCard
├── lib/motion.ts          # Animation presets (basic)
└── lib/utils.ts           # cn() utility
```

**Current Issues**:
1. Generic Inter font - needs premium typography
2. No scroll-linked animations - needs GSAP ScrollTrigger
3. Placeholder images - needs real assets
4. Hard section cuts - needs continuous background
5. Basic animations - needs sticky scroll, canvas sequences

---

## What to Build

| Priority | Feature | Reference |
|----------|---------|-----------|
| 1 | Premium fonts (Space Grotesk/Outfit) | Typography upgrade |
| 2 | Continuous gradient mesh background | Flowing orbs |
| 3 | GSAP ScrollTrigger sticky sections | Apple-style pins |
| 4 | Hero with video + floating product | Premium hero |
| 5 | 360° product scroll canvas | Apple AirPods style |
| 6 | Animated counter statistics | Kinetic numbers |
| 7 | App mockup parallax | 3D perspective |

---

## Asset Generation

### Premium (ChatGPT Plus / Gemini Advanced)

| Asset | Tool | Method |
|-------|------|--------|
| Multi-angle shots | Gemini Nano Banana | Upload ref image → generate angles |
| 360° video | Gemini Veo 2 | Upload ref → 8-sec turntable video |
| Consistent shots | ChatGPT DALL-E 3 | Gen ID method (~87% consistency) |

### $0 Budget

| Asset | Tool | Limit |
|-------|------|-------|
| Product images | Leonardo AI | 150/day |
| App mockups | v0.dev | Unlimited |
| Hero video | Pika Labs | Free credits |
| Icons | Recraft AI / Lucide | Free tier |

**All prompts**: `docs/PRODUCT_PROMPTS.md`

---

## Design Tokens

```css
/* Colors */
--emerald: #0B5844
--emerald-glow: #50E3A4
--surface-950: #0a0a0a
--surface-900: #0f0f0f
--text-primary: #FFFFFF
--text-muted: #737373

/* Animation */
--ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1)
--duration-fast: 150-300ms
--duration-slow: 600-800ms
```

---

## Key Files to Read

1. `docs/IMPLEMENTATION_PLAN.md` - Full plan with code examples
2. `docs/PRODUCT_PROMPTS.md` - AI prompts for consistent product generation
3. `tailwind.config.ts` - Design system tokens
4. `src/app/globals.css` - Custom utilities
5. `src/lib/motion.ts` - Animation presets

---

## Quick Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
vercel --prod    # Deploy to Vercel
```

---

## Do's and Don'ts

**DO**:
- Use emerald gradient for brand elements
- Respect prefers-reduced-motion
- Test at 375px, 768px, 1024px, 1440px
- Use animation presets from motion.ts
- Keep sections in existing component structure

**DON'T**:
- Use generic Inter font (upgrade to premium)
- Create hard background cuts between sections
- Skip scroll-linked animations
- Use emojis as icons
- Ignore mobile responsiveness

---

## Phase Priorities

1. **Foundation**: Fonts, gradient mesh, GSAP setup
2. **Assets**: Generate via free AI tools
3. **Hero**: Video bg + floating product
4. **Product**: 360° scroll canvas
5. **Polish**: Counters, micro-interactions
6. **Deploy**: Vercel free tier

---

*For full details, see `/docs/IMPLEMENTATION_PLAN.md`*
