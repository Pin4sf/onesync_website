# OneSync Website Design Update & UI/UX Improvements Plan

**Date:** February 9, 2026
**Branch:** `feature/brainstorm-enhancements`
**Status:** Approved for implementation

## Context

The OneSync website has strong design foundations — premium dark theme, emerald brand colors, Framer Motion animations, and a clean component architecture. However, compared to Awwwards-winning sites and premium tech product pages (Linear, Vercel, Apple, WHOOP, Stripe), there are significant gaps in microinteractions, page transitions, navigation polish, loading states, scroll experiences, and overall interaction quality.

This plan synthesizes research from 3 parallel agents covering:
1. **Current codebase audit** — comprehensive review of all components, animations, design tokens, and UX gaps
2. **Awwwards/design trend research** — 2025-2026 patterns for microinteractions, transitions, cursors, dark themes, typography, scroll animations
3. **Premium tech product site analysis** — patterns from Linear, Vercel, Apple, Stripe, WHOOP, Oura, Raycast, Arc, Figma, Notion

**Philosophy alignment**: All improvements respect the existing design doc's core principle: *"infrastructure you can trust"* — calm, confident, precise, never sensational. Motion should teach, not impress.

---

## Part 1: Current State Audit Summary

### What Works Well
- Premium visual design with glassmorphism and modern patterns
- Strong color system (surface-950 #0a0a0a → emerald brand)
- Comprehensive animation library in `src/lib/motion.ts`
- Custom cursor with size change on hover targets
- Magnetic hover effects on footer links
- Smooth scroll via Lenis
- Responsive layout with mobile-first approach
- Light typography weights (300) for premium feel

### Critical Gaps

| Gap | Severity | Impact |
|-----|----------|--------|
| No page transition animations | High | Jarring navigation experience |
| No loading states (except privacy page) | High | Poor perceived performance |
| No breadcrumb navigation | Medium | Disorientation on sub-pages |
| No form validation/feedback | High | Poor form UX |
| Missing accessibility (skip links, ARIA, focus) | Critical | WCAG non-compliance |
| No toast/notification system | Medium | No user feedback |
| GSAP ScrollTrigger registered but barely used | Medium | Missed premium scroll experience |
| No error boundaries | Medium | Blank page on errors |
| Footer email form has no success/error states | Medium | Broken feedback loop |
| Social media links missing | Low | Incomplete footer |

---

## Part 2: Prioritized Improvements (Impact-to-Effort)

### Tier 1: Quick Wins (< 1 hour each)

1. **Dark theme meta tags**
   - Add `<meta name="theme-color" content="#0a0a0a">` to layout
   - Add `color-scheme: dark` to `<html>` element
   - Aligns browser chrome with site theme

2. **Tabular numbers for data displays**
   - Add `font-variant-numeric: tabular-nums` to stat components
   - Prevents layout shift when numbers change

3. **Enable View Transitions (experimental)**
   - Add `viewTransition: true` to `next.config.js` experimental
   - Progressive enhancement — Chromium-only but free

4. **Noise texture overlay on dark sections**
   - SVG filter with `feTurbulence`, opacity 0.08
   - Adds subtle grain that elevates the flat dark background

### Tier 2: Foundation Improvements (1-4 hours each)

5. **Scroll-aware sticky header**
   - Hides on scroll down, reveals on scroll up
   - Framer Motion `useMotionValueEvent` on `scrollY`
   - Backdrop blur + emerald accent border

6. **Ambient gradient orbs behind hero**
   - Floating emerald/purple gradient orbs with blur-[120px]
   - Animated pulse with staggered delays
   - Creates depth behind glass panels

7. **Dark glassmorphism cards**
   - `bg-white/5 backdrop-blur-xl border border-white/10`
   - Shadow: `0 8px 32px 0 rgba(0,0,0,0.36)`
   - Replace standard cards on feature sections

8. **Staggered scroll reveal polish**
   - Already have `staggerContainer` + `staggerItem` in motion.ts
   - Apply consistently to all grid/card sections
   - Add `viewport={{ once: true, margin: "-100px" }}`

9. **Skeleton loading screens**
   - Dark-themed with emerald shimmer animation
   - `baseColor="#0a0a0a"`, `highlightColor="#1a1a1a"`
   - Create `loading.tsx` for each route

10. **Breadcrumbs on sub-pages**
    - Minimal opacity pattern (30-40% inactive, 80-100% current)
    - Animated stagger on mount
    - Only on Product, Technology, Team pages

### Tier 3: Premium Interactions (4-8 hours each)

11. **Magnetic CTA buttons**
    - GSAP `quickTo()` or Framer Motion spring
    - Apply to primary CTAs ("Request Demo", "Get Early Access")
    - Elastic snap-back on mouse leave

12. **Page transitions with next-transition-router**
    ```bash
    npm install next-transition-router
    ```
    - GSAP-powered fade + slight scale (opacity 0→1, scale 0.98→1)
    - Wrap layout with `TransitionRouter`
    - Enter/leave callbacks with GSAP timeline

13. **Text reveal animations (SplitType)**
    ```bash
    npm install split-type
    ```
    - Character-by-character reveal on hero headline
    - GSAP ScrollTrigger for section headings
    - `opacity: 0, y: 20, rotateX: -90` per character

14. **GSAP sticky scroll sections**
    - Pin technology/features section with `ScrollTrigger.pin()`
    - Content swaps while viewport stays locked
    - Apple product page technique

15. **Custom blend-mode cursor**
    - `mix-blend-difference` on white circle
    - Spring-based following with Framer Motion
    - Size variants: default (32px), hover (64px), text (120px)

16. **Card spotlight effect**
    - CSS `::before` with `conic-gradient` that follows cursor
    - Opacity 0 → 0.6 on hover
    - Apply to feature cards

17. **Link hover: sliding emerald underline**
    - `::after` pseudo-element with `transform: scaleX(0)` → `scaleX(1)`
    - Emerald gradient: `linear-gradient(90deg, #10b981, #34d399)`
    - Transform-origin: left

### Tier 4: Advanced Features (8+ hours each)

18. **Canvas scroll product 360**
    - Preload 60-120 frames of OneBand
    - Sticky canvas with GSAP ScrollTrigger
    - Map scroll progress to frame index
    - Alternative: scroll-controlled video playback

19. **Stripe-style mesh gradient background**
    - WebGL with MiniGL / whatamesh
    - Emerald palette: `#00381F`, `#0B5844`, `#187E5F`, `#2AA17A`
    - Replace static dark gradient on hero

20. **Horizontal scroll gallery**
    - GSAP ScrollTrigger with pin
    - Product features showcase
    - Mobile: vertical fallback

21. **Command palette (Cmd+K)**
    ```bash
    npm install cmdk
    ```
    - Quick navigation between pages/sections
    - Signals technical sophistication
    - Developer-aware audience will expect this

---

## Part 3: Recommended Component Libraries

### Aceternity UI (ui.aceternity.com)
Copy-paste compatible with Next.js + Tailwind + Framer Motion. No library install needed.

| Component | Use Case | Priority |
|-----------|----------|----------|
| Aurora Background | Hero section ambient background | High |
| Sticky Scroll Reveal | Technology/features pinned sections | High |
| Glare Card | Linear-style reflective hover for cards | High |
| Text Generate Effect | Hero tagline word-by-word reveal | High |
| Card Spotlight | Feature cards with radial gradient hover | Medium |
| 3D Card Effect | Feature cards with hover elevation | Medium |
| Hero Parallax | Product page hero with scroll rotation | Medium |
| Macbook Scroll | App showcase (image emerges from device) | Medium |
| Tracing Beam | Timeline/journey visualization | Low |
| Background Beams | Hero section decorative elements | Low |

### Magic UI (magicui.design)
Built on ShadCN foundation. 150+ animated components.

| Animation | Use Case | Priority |
|-----------|----------|----------|
| `animate-shiny-text` | Hero tagline shimmer | High |
| `animate-aurora` | Ambient background color shift | Medium |
| `animate-ripple` | CTA button click feedback | Medium |
| `animate-marquee` | Partner logos / testimonials | Medium |
| `animate-orbit` | Product showcase orbiting data | Low |

### Motion Primitives (motion-primitives.com)
50+ responsive components with Framer Motion + Tailwind.

| Component | Use Case | Priority |
|-----------|----------|----------|
| TextScramble | Stat counters that scramble then resolve | High |
| TextShimmer | Brand text highlight effect | Medium |
| AnimatedGroup | Synchronized card/feature reveals | Medium |
| InfiniteSlider | Continuous testimonial carousel | Medium |
| BorderTrail | Animated borders on CTA buttons | Medium |
| MorphingDialog | Product detail modals | Low |
| Cursor | Custom branded cursor | Low |

### New Libraries to Install

```bash
npm install next-transition-router  # Page transitions
npm install cmdk                     # Command palette
npm install nuqs                     # URL state management
npm install split-type               # Text splitting for animations
```

---

## Part 4: Interaction Patterns (Code Reference)

### 4.1 Magnetic Button

**Framer Motion version:**
```tsx
"use client";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * 0.3,
      y: (clientY - (top + height / 2)) * 0.3,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
```

### 4.2 Scroll-Aware Sticky Header

```tsx
"use client";
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export function StickyHeader({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface-950/85 border-b border-white/5"
    >
      {children}
    </motion.header>
  );
}
```

### 4.3 Page Transitions (next-transition-router + GSAP)

```tsx
// src/components/providers/TransitionProvider.tsx
import { TransitionRouter } from 'next-transition-router';
import gsap from 'gsap';

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  return (
    <TransitionRouter
      leave={(next) => {
        gsap.fromTo("main", { opacity: 1 }, { opacity: 0, duration: 0.3, onComplete: next });
      }}
      enter={(next) => {
        gsap.fromTo("main", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, onComplete: next });
      }}
    >
      {children}
    </TransitionRouter>
  );
}
```

### 4.4 Dark Skeleton with Emerald Shimmer

```tsx
export function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-lg bg-surface-900",
      className
    )}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-emerald/5 to-transparent" />
    </div>
  );
}
```

```css
/* globals.css */
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
```

### 4.5 Noise Texture Overlay

```css
.noise-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 182px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
}
```

### 4.6 Glassmorphism Card

```html
<div class="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-2xl">
  <!-- content -->
</div>
```

### 4.7 Blend-Mode Custom Cursor

```tsx
"use client";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BlendCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference bg-white"
      style={{ x: springX, y: springY }}
      animate={variant}
      variants={{
        default: { width: 32, height: 32 },
        hover: { width: 64, height: 64 },
        text: { width: 120, height: 120, backgroundColor: "rgba(255,255,255,0.1)" },
      }}
    />
  );
}
```

### 4.8 Text Reveal with SplitType

```tsx
"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({ children, className }: { children: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const split = new SplitType(ref.current, { types: 'chars,words' });

    gsap.from(split.chars, {
      opacity: 0, y: 20, rotateX: -90,
      stagger: 0.02, duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => { split.revert(); };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
```

### 4.9 GSAP Horizontal Scroll Gallery

```tsx
"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScrollGallery({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels) return;
    const totalWidth = panels.scrollWidth - window.innerWidth;

    const tween = gsap.to(panels, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => { tween.kill(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={panelsRef} className="flex gap-8 will-change-transform">
        {children}
      </div>
    </div>
  );
}
```

### 4.10 Animated Breadcrumbs

```tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Breadcrumbs({ segments }: { segments: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-2 py-4">
      {segments.map((segment, i) => (
        <motion.span
          key={segment.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2"
        >
          {i > 0 && <span className="text-white/20">/</span>}
          {segment.href ? (
            <Link href={segment.href} className="text-sm text-white/40 hover:text-white/60 transition-colors">
              {segment.label}
            </Link>
          ) : (
            <span className="text-sm text-white/80">{segment.label}</span>
          )}
        </motion.span>
      ))}
    </nav>
  );
}
```

### 4.11 CSS :has() Sibling Dimming

```css
.card-grid:has(.card:hover) .card:not(:hover) {
  opacity: 0.5;
  filter: blur(1px);
  transition: all 0.3s ease;
}
```

### 4.12 Link Hover: Sliding Underline

```css
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #34d399);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
```

---

## Part 5: Competitive Site Analysis Summary

### Key Patterns from Top Sites

| Site | Key Pattern to Adopt | How |
|------|---------------------|-----|
| **Linear** | Glare card effect, monochrome-with-accent | Aceternity Glare Card component |
| **Vercel** | Sliding nav indicator, loading state patterns | Custom AnimatedNavTabs component |
| **Apple** | Canvas scroll sequence, sticky text reveals | GSAP ScrollTrigger + canvas |
| **Stripe** | Mesh gradient background, animated code blocks | WebGL MiniGL + emerald colors |
| **WHOOP** | Data-forward storytelling, dark base + bold accent | Progressive disclosure for health data |
| **Oura** | Progressive disclosure, lifecycle photography + CGI | Lead with emotion, reveal science layer |
| **Notion** | Breadcrumb navigation, progressive disclosure | Animated breadcrumbs component |
| **Raycast** | Command palette (Cmd+K), keyboard-first | `cmdk` library integration |
| **Figma** | Interactive product demos on marketing page | Embed app simulation, not just screenshots |
| **Arc** | "Mental calm" aesthetic, spatial design | Reduce visual noise, respect whitespace |

### Design System Guidelines from Vercel

Critical rules to adopt:
- **Animation hierarchy**: CSS > Web Animations API > JavaScript libraries
- **GPU-only properties**: Only animate `transform` and `opacity`; never `transition: all`
- **Interruptible animations**: Users must be able to cancel any animation via input
- **Nested border radius**: Child radius must be less than or equal to parent radius
- **Layered shadows**: Combine ambient + direct light sources, minimum 2 shadow layers
- **Non-breaking spaces**: Use `&nbsp;` between values and units (e.g., `10&nbsp;MB`)

---

## Part 6: Accessibility Fixes (From Existing Audit)

These fixes from `docs/audits/design-audit-2026-01-26.md` should be implemented alongside the visual improvements:

| Fix | Severity | File |
|-----|----------|------|
| Add `prefers-reduced-motion` support | Critical | `globals.css` |
| Add ARIA labels to hamburger menu | Critical | `Header.tsx` |
| Add focus-visible styles to buttons | High | Multiple |
| Add skip-to-main-content link | Medium | `layout.tsx` |
| Add `aria-hidden` to decorative icons | High | Multiple |
| Fix color contrast (text-gray-500) | High | Multiple |
| Convert hero buttons to Links | High | Hero section |
| Add error boundaries | Medium | All pages |
| Add loading states | Medium | All routes |

---

## Part 7: Dark Theme Enhancement Checklist

- [ ] Add noise texture overlay to all dark sections (opacity 0.08)
- [ ] Add ambient emerald/purple gradient orbs to hero section
- [ ] Apply glassmorphism to feature cards and stat blocks
- [ ] Implement conic-gradient rotating glow on primary product card
- [ ] Set `<meta name="theme-color" content="#0a0a0a">`
- [ ] Set `color-scheme: dark` on `<html>` element
- [ ] Add layered shadows (ambient + direct) to elevated elements
- [ ] Use desaturated emerald tones on dark surfaces (avoid saturated vibrating colors)
- [ ] Ensure WCAG 4.5:1 contrast for all text

---

## Implementation Approach (For Next Session)

### Phase 1: Foundation (1-2 hours)
1. Meta tags + color-scheme
2. Noise texture overlay
3. Ambient gradient orbs
4. Skeleton loading screens for all routes
5. `prefers-reduced-motion` support

### Phase 2: Navigation & Transitions (2-4 hours)
6. Scroll-aware sticky header
7. Breadcrumbs on sub-pages
8. Page transitions with next-transition-router
9. Active page highlighting in nav

### Phase 3: Interactions (4-6 hours)
10. Magnetic CTA buttons
11. Glassmorphism cards
12. Text reveal animations
13. Link hover underline effects
14. Card spotlight/glare effects

### Phase 4: Advanced Scroll (4-8 hours)
15. GSAP sticky scroll sections
16. Canvas product 360 or scroll-controlled video
17. Horizontal scroll gallery
18. Parallax depth layers

### Phase 5: Polish (2-4 hours)
19. Custom blend-mode cursor
20. Command palette (Cmd+K)
21. CSS :has() sibling dimming
22. Form validation & toast notifications

---

## Sources

### Awwwards & Design Trends
- [Awwwards Dark Mode Collection](https://www.awwwards.com/awwwards/collections/dark-mode/)
- [Web Design Trends 2026 - Pixlogix](https://www.pixlogix.com/web-design-trends-2026/)
- [Web Design Trends 2026 - Figma](https://www.figma.com/resource-library/web-design-trends/)
- [Microinteractions - Webflow](https://webflow.com/blog/microinteractions)
- [Button Micro-interactions - SitePoint](https://www.sitepoint.com/button-micro-interactions/)

### Libraries & Components
- [Aceternity UI](https://ui.aceternity.com/components)
- [Magic UI](https://magicui.design/)
- [Motion Primitives](https://motion-primitives.com/)
- [Cursify](https://cursify.vercel.app/)
- [next-transition-router](https://github.com/ismamz/next-transition-router)
- [cmdk](https://cmdk.paco.me/)

### Technical References
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines)
- [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)
- [SplitType](https://github.com/lukePeavey/SplitType)
- [Next.js View Transitions](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition)

### Site Analysis
- [Linear UI Redesign](https://linear.app/now/how-we-redesigned-the-linear-ui)
- [WHOOP Case Study (BASIC/DEPT)](https://www.basicagency.com/case-studies/whoop)
- [Oura Ring Redesign by Instrument](https://www.instrument.com/work/oura-smart-ring)
- [Stripe Gradient Effect Tutorial](https://kevinhufnagl.com/how-to-stripe-website-gradient-effect/)
- [Apple Scroll Animation Tutorial](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/)
