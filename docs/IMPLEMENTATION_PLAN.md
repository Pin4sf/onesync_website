# OneSync Website - Complete Implementation Plan

> **Purpose**: This document serves as the master plan for building the OneSync/OneBand premium wearable product website. Share this with any AI agent or team member for full context.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Current State Analysis](#current-state-analysis)
3. [Target State (Apple/Samsung Quality)](#target-state)
4. [Asset Generation Guide ($0 Budget)](#asset-generation-guide)
5. [Implementation Phases](#implementation-phases)
6. [Technical Specifications](#technical-specifications)
7. [Prompts Library](#prompts-library)
8. [Deployment Guide](#deployment-guide)

---

## Project Overview

### What We're Building

**OneSync** is a mental wellness technology company creating **OneBand** - a premium wearable device that monitors cognitive health metrics. The website needs to match the premium feel of Apple and Samsung product pages.

### Tech Stack

- **Framework**: Next.js 15.1.6 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 3.4.17 with custom dark theme
- **Animation**: Framer Motion 12.29.2, GSAP 3.14.2, Lenis (smooth scroll)
- **UI**: Shadcn/ui components, Lucide React icons

### Brand Identity

| Element | Value |
|---------|-------|
| Primary Color | Royal Emerald `#0B5844` |
| Accent/Glow | `#50E3A4` |
| Background | `#0a0a0a` (surface-950) |
| Text Primary | `#FFFFFF` |
| Text Secondary | `#E5E5E5` |
| Text Muted | `#737373` |

### Current Pages

- `/` - Home (landing page with 9 sections)
- `/product` - Product details
- `/technology` - Technology explanation
- `/team` - Founding team

---

## Current State Analysis

### Existing Section Components

| Section | File | Status | Issues |
|---------|------|--------|--------|
| HeroSection | `src/components/sections/HeroSection.tsx` | Needs upgrade | Generic particle bg, no product visual |
| ProblemSection | `src/components/sections/ProblemSection.tsx` | Good | Stats could animate |
| CostOfStressSection | `src/components/sections/CostOfStressSection.tsx` | Good | Standard cards |
| VisionSection | `src/components/sections/VisionSection.tsx` | Good | Quote section works |
| ProductSection | `src/components/sections/ProductSection.tsx` | Needs upgrade | Placeholder image, no 360 view |
| AppShowcaseSection | `src/components/sections/AppShowcaseSection.tsx` | Needs upgrade | Placeholder mockups |
| MarketSection | `src/components/sections/MarketSection.tsx` | Needs upgrade | Stats need animation |
| TeamSection | `src/components/sections/TeamSection.tsx` | Good | Needs real photos |
| CTASection | `src/components/sections/CTASection.tsx` | Good | Standard CTA |

### Critical Gaps Identified

1. **Typography**: Using generic Inter font - needs premium alternatives
2. **Scroll Animations**: Only basic fadeInUp - needs GSAP ScrollTrigger sticky scroll
3. **Hero**: CSS particles - needs video/WebGL + floating product
4. **Product Showcase**: No 360° view, no scroll-controlled rotation
5. **Background**: Hard section cuts - needs continuous gradient mesh
6. **Statistics**: No counter animations - needs kinetic reveals
7. **Assets**: All placeholders - needs real product images, app mockups

---

## Target State

### Inspiration Sources

- **Apple AirPods Pro**: Canvas-based scroll sequences, sticky text reveals
- **Apple Watch**: Giant typography, feature-synced animations
- **Samsung Galaxy Buds3 Pro**: Video containers, smooth transitions, custom fonts

### Key Features to Implement

| Feature | Priority | Complexity | Reference |
|---------|----------|------------|-----------|
| Scroll Canvas (360° product) | Critical | High | Apple AirPods |
| Sticky Scroll Sections | Critical | Medium | Apple Watch |
| Premium Typography | Critical | Low | Custom fonts |
| Continuous Background | High | Medium | Gradient mesh |
| Animated Statistics | High | Low | Counter animations |
| Hero Video/WebGL | High | Medium | Abstract visuals |
| Magnetic Buttons | Medium | Low | Micro-interactions |
| App Mockup Parallax | Medium | Medium | 3D perspective |

---

## Asset Generation Guide ($0 Budget)

### Free Tools Summary

| Asset Type | Primary Tool | Backup Tool | Free Limits |
|------------|--------------|-------------|-------------|
| Product Images | Leonardo AI | Ideogram 3.0 | 150/day (Leonardo) |
| 360° Sequence | Spline | Blender | 3 exports/mo (Spline) |
| Hero Video | Pika Labs | Runway | Credits-based |
| App Mockups | v0.dev | Figma | Unlimited (v0) |
| Icons | Recraft AI | Lucide | Free tier |
| Backgrounds | CSS Code | Figma | Free |

### Premium Tools (ChatGPT Plus / Gemini Advanced)

| Asset Type | Tool | Capability |
|------------|------|------------|
| Product Images | Gemini Nano Banana | Multi-angle consistency from reference image |
| Turntable Video | Gemini Veo 2 | 8-sec 720p video from image |
| Consistent Shots | ChatGPT DALL-E 3 | Gen ID method for ~87% consistency |
| Lifestyle Shots | ChatGPT or Gemini | Context-aware product placement |

**Recommended Approach**: Use Gemini Veo 2 for turntable video instead of 200-frame image sequence.
See `docs/PRODUCT_PROMPTS.md` for all refined prompts.

### Tool Links

- **Leonardo AI**: https://leonardo.ai (150 free generations/day)
- **Ideogram**: https://ideogram.ai (best for text/logos)
- **Flux Free**: https://flux-ai.io (photorealistic)
- **Spline**: https://spline.design (3D in browser, free tier)
- **Pika Labs**: https://pika.art (AI video, free credits)
- **v0.dev**: https://v0.dev (AI UI generation, free)
- **Recraft AI**: https://recraft.ai (AI icons, free tier)
- **Figma**: https://figma.com (design, free)

### Asset Requirements Checklist

#### Product Photography (OneBand)

- [ ] Hero shot (floating, 45° angle) - 4000x3000px PNG
- [ ] 360° rotation sequence - 72-120 frames, 1920x1080px WebP
- [ ] On-wrist lifestyle shots (3-5) - 2400x1600px JPG
- [ ] Detail macro shots (2-3) - 1600x1200px JPG
- [ ] Color variants (if any) - 2000x1500px PNG

#### Mobile App Screens

- [ ] Dashboard/Home screen - 1290x2796px PNG
- [ ] Neural Analysis screen - 1290x2796px PNG
- [ ] Analytics/Trends screen - 1290x2796px PNG
- [ ] Settings/Profile screen - 1290x2796px PNG
- [ ] Notification/Insights screen - 1290x2796px PNG

#### Video Assets

- [ ] Hero background loop - 1920x1080px MP4, 10-15 sec
- [ ] Product reveal (optional) - 1080p MP4, 3-5 sec

#### Graphics

- [ ] Custom icon set (20+ icons) - 24x24 SVG
- [ ] Gradient mesh background - CSS or SVG
- [ ] Noise/grain texture overlay - 1920x1080 PNG

---

## Implementation Phases

### Phase 1: Foundation (Days 1-2)

**Goal**: Upgrade core systems without new assets

#### 1.1 Typography Upgrade

```bash
# Add to layout.tsx
import { Outfit, Space_Grotesk } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})
```

**Font Pairing Options** (all free on Google Fonts):

| Option | Display | Body | Vibe |
|--------|---------|------|------|
| A | Space Grotesk | Outfit | Tech/Modern |
| B | Sora | Plus Jakarta Sans | Friendly/Premium |
| C | Cabinet Grotesk* | Inter | Apple-like |

*Cabinet Grotesk via Fontshare (free)

#### 1.2 Continuous Background System

Create `src/components/backgrounds/GradientMesh.tsx`:

```tsx
"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export function GradientMesh() {
  const { scrollYProgress } = useScroll();

  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-surface-950" />

      {/* Animated orbs */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[20%] left-[20%] w-[600px] h-[600px]
                   bg-emerald/10 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-[60%] right-[10%] w-[400px] h-[400px]
                   bg-emerald-glow/5 rounded-full blur-[100px]"
      />
    </div>
  );
}
```

#### 1.3 GSAP ScrollTrigger Setup

Create `src/hooks/useScrollTrigger.ts`:

```typescript
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useStickySection(options?: {
  start?: string;
  end?: string;
  scrub?: number | boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: options?.start || "top top",
      end: options?.end || "+=200%",
      pin: true,
      scrub: options?.scrub ?? 1,
    });

    return () => trigger.kill();
  }, [options]);

  return ref;
}
```

### Phase 2: Asset Generation (Days 3-5)

**Goal**: Generate all visual assets using free tools

#### 2.1 Product Images via Leonardo AI

**Workflow**:
1. Go to https://leonardo.ai
2. Select "Photoreal" or "Leonardo Diffusion XL" model
3. Use prompts from [Prompts Library](#prompts-library) section
4. Generate 4-5 variations, select best
5. Upscale to 4K using Leonardo's upscaler
6. Download and optimize with Squoosh

#### 2.2 360° Product Video via Gemini Veo 2 (RECOMMENDED)

**Workflow** (requires Gemini Advanced subscription):
1. Go to https://gemini.google.com
2. Upload your best product reference image (standing upright shot)
3. Use the Veo 2 turntable prompt from `docs/PRODUCT_PROMPTS.md`
4. Generate 8-second turntable rotation video
5. Download and convert to WebM + MP4 using CloudConvert
6. Use scroll-controlled video playback instead of canvas sequence

**Why Video > Image Sequence**:
- No need for 200 separate frames
- Consistent product appearance (same source image)
- Simpler implementation
- Smaller file size (~2-5MB vs 20-30MB for images)

#### 2.2b Alternative: Multi-Angle Images via Gemini Nano Banana

If video doesn't work well:
1. Upload reference image to Gemini
2. Generate 6-8 angles using prompts from `docs/PRODUCT_PROMPTS.md`
3. Use CSS transitions between angles on scroll
4. Fallback to hover-triggered angle changes

#### 2.3 App Mockups via v0.dev

**Workflow**:
1. Go to https://v0.dev
2. Use prompts from [Prompts Library](#prompts-library)
3. Generate each screen
4. Screenshot the preview (or export code)
5. Place in iPhone 15 Pro mockup frame

#### 2.4 Hero Video via Pika Labs

**Workflow**:
1. Go to https://pika.art
2. Use abstract wellness prompt from library
3. Generate 3-4 second clip
4. Loop in video editor or CSS
5. Export as WebM + MP4 fallback

### Phase 3: Hero Section Upgrade (Days 6-7)

**Goal**: Premium hero with video background and floating product

```tsx
// src/components/sections/HeroSection.tsx - Upgraded
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { heroAnimations } from "@/lib/motion";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const productY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const productScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className="relative h-[150vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/video/hero-bg.webm" type="video/webm" />
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/50 via-transparent to-surface-950" />

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.p {...heroAnimations.label} className="text-label text-text-muted mb-6">
            Introducing
          </motion.p>

          <motion.h1 {...heroAnimations.title} className="text-display-2xl mb-6">
            <span className="text-emerald-gradient">ONEBAND</span>
          </motion.h1>

          <motion.p {...heroAnimations.tagline} className="text-2xl text-text-secondary mb-12">
            Beyond Vital Signs. Into the Mind
          </motion.p>
        </motion.div>

        {/* Floating Product */}
        <motion.div
          style={{ y: productY, scale: productScale }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <img
            src="/product/oneband-hero.png"
            alt="OneBand"
            className="w-[400px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
```

### Phase 4: Product Section with Scroll-Controlled Video (Days 8-10)

**Goal**: 360° product rotation controlled by scroll using video

```tsx
// src/components/sections/ProductShowcase.tsx
"use client";

import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scroll-controlled video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is loaded
    video.pause();

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center section-container">
          {/* Text content with scroll-linked opacity */}
          <ProductFeatures scrollProgress={scrollYProgress} />

          {/* Video (scroll-controlled) */}
          <div className="relative">
            <video
              ref={videoRef}
              src="/product/oneband-turntable.webm"
              muted
              playsInline
              preload="auto"
              className="w-full max-w-2xl rounded-2xl"
            >
              <source src="/product/oneband-turntable.webm" type="video/webm" />
              <source src="/product/oneband-turntable.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature text that changes with scroll
function ProductFeatures({ scrollProgress }: { scrollProgress: any }) {
  const features = [
    { title: "24/7 Passive Sensing", desc: "Continuous monitoring without interruption" },
    { title: "Premium Materials", desc: "Woven mesh textile for all-day comfort" },
    { title: "Advanced Sensors", desc: "Medical-grade biometric tracking" },
  ];

  const currentFeature = useTransform(
    scrollProgress,
    [0, 0.33, 0.66, 1],
    [0, 1, 2, 2]
  );

  return (
    <motion.div className="space-y-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          style={{
            opacity: useTransform(
              currentFeature,
              [index - 0.5, index, index + 0.5],
              [0.3, 1, 0.3]
            )
          }}
        >
          <h3 className="text-h2 text-text-primary mb-2">{feature.title}</h3>
          <p className="text-body-lg text-text-secondary">{feature.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Video Requirements**:
- Format: WebM (primary) + MP4 (fallback)
- Resolution: 720p or 1080p
- Duration: 8 seconds (full rotation)
- File size: Target <5MB
- Generated via: Gemini Veo 2 from product reference image

### Phase 5: Statistics & Polish (Days 11-12)

**Goal**: Animated counters, micro-interactions, final polish

#### Animated Counter Component

```tsx
// src/components/ui/AnimatedCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
```

### Phase 6: Deployment (Day 13)

**Goal**: Deploy to Vercel (free tier)

```bash
# Install Vercel CLI
npm i -g vercel

# Build and test locally
npm run build
npm start

# Deploy
vercel

# Set up custom domain (optional)
vercel domains add yourdomain.com
```

**Vercel Free Tier Includes**:
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- 100GB bandwidth/month
- Serverless functions

---

## Technical Specifications

### Animation Presets (add to motion.ts)

```typescript
// Scroll-linked presets
export const scrollReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export const staggerReveal = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }
};

// Magnetic button effect
export const magneticHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 }
};
```

### File Structure (Target)

```
src/
├── app/
│   ├── page.tsx                 # Home composition
│   ├── layout.tsx               # Root layout with fonts
│   └── globals.css              # Global styles
├── components/
│   ├── animations/
│   │   ├── ScrollCanvas.tsx     # 360° product viewer
│   │   ├── ParallaxLayer.tsx    # Scroll-linked parallax
│   │   └── CountUp.tsx          # Animated counter
│   ├── backgrounds/
│   │   ├── GradientMesh.tsx     # Continuous background
│   │   └── VideoBackground.tsx  # Hero video
│   ├── layout/
│   │   ├── Header.tsx           # Navigation
│   │   └── Footer.tsx           # Footer
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero with video
│   │   ├── ProductShowcase.tsx  # 360° product scroll
│   │   ├── AppShowcase.tsx      # App mockups
│   │   └── ...                  # Other sections
│   └── ui/
│       ├── MagneticButton.tsx   # Hover-follow CTA
│       ├── AnimatedCounter.tsx  # Number animation
│       └── ...                  # Other UI components
├── hooks/
│   ├── useScrollTrigger.ts      # GSAP ScrollTrigger
│   └── useCanvasSequence.ts     # Image sequence player
├── lib/
│   ├── motion.ts                # Animation presets
│   └── utils.ts                 # Utilities
└── public/
    ├── product/
    │   ├── oneband-hero.png
    │   └── sequence/            # 360° frames
    ├── app/
    │   ├── dashboard.png
    │   └── ...                  # App screenshots
    └── video/
        ├── hero-bg.webm
        └── hero-bg.mp4
```

---

## Prompts Library

### Product Photography (Leonardo AI / Flux)

```
HERO SHOT:
"Professional product photography of a premium minimalist fitness wristband called OneBand, sleek matte black silicone band with a small rectangular sensor housing featuring a subtle emerald green LED indicator light, floating at a 45-degree angle against pure black background, dramatic studio lighting from above-left creating soft highlights on the matte surface, Apple product photography style with shallow depth of field, 8K resolution, photorealistic, no text or logos"

360° ANGLES (generate for each angle):
"Professional product photography of minimalist black fitness wristband, matte silicone material, small emerald LED indicator, [ANGLE] degree view, studio lighting, pure black background, photorealistic, 8K --ar 16:9"

Angles to generate: 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330

ON-WRIST LIFESTYLE:
"Close-up photograph of a person's wrist wearing a sleek minimalist black fitness band with small green LED, [SKIN_TONE] skin, natural morning light streaming through window, lifestyle photography, shallow depth of field with bokeh background, wellness and mindfulness aesthetic, warm tones"

MACRO DETAIL:
"Extreme macro photography of fitness band sensor array, tiny emerald LED lights, premium matte black silicone texture visible, studio lighting revealing micro-textures, tech product photography, 8K detail, shallow depth of field"
```

### App UI Mockups (v0.dev)

```
DASHBOARD SCREEN:
"Create a mobile app dashboard for a wellness wearable companion app called OneSync.
Dark mode design with #0a0a0a background.
Emerald green accent color #50E3A4.
Show:
- Large circular 'Wellness Score' gauge (85/100) in center-top
- HRV trend line chart below (last 7 days)
- Sleep quality horizontal progress bar
- Stress level indicator
- Bottom navigation with Home, Insights, Profile icons
Style: Premium fintech meets Apple Health
Font: SF Pro or Inter
Include subtle card borders with #1a1a1a"

NEURAL ANALYSIS SCREEN:
"Create a brain activity visualization screen for mental wellness app.
Dark mode #0a0a0a background.
Center: Abstract circular visualization representing brain activity with emerald/cyan gradient lines radiating outward.
Around it:
- Focus Level: 78%
- Mental Clarity: High
- Cognitive Load: Low
Top: 'Neural Analysis' title with back arrow
Bottom: 'Start Session' button in emerald #50E3A4
Minimal UI, data-rich but clean, futuristic health tech aesthetic"

ANALYTICS SCREEN:
"Design a weekly analytics screen for health tracking app.
Dark mode (#0f0f0f background).
Include:
- Week selector at top
- Large line chart showing mood/energy trends over 7 days (emerald line on dark grid)
- Three stat cards below: Avg Sleep (7.2h), Avg Stress (Low), Recovery (89%)
- 'View Detailed Report' link at bottom
Premium data visualization style, subtle animations implied"
```

### Hero Video Background (Pika Labs)

```
ABSTRACT NEURAL:
"Abstract visualization of neural pathways and synaptic connections, deep emerald green and cyan energy streams flowing organically on pure black void, soft bioluminescent particle effects, microscopic brain activity aesthetic, slow hypnotic movement, cinematic lighting, seamless loop"

WELLNESS FLOW:
"Abstract flowing liquid emerald green energy ribbons on pure black background, soft glowing bioluminescent particles drifting slowly, meditation and wellness aesthetic, organic movement patterns, macro photography style, seamless loop"

DATA STREAMS:
"Abstract visualization of biometric data as flowing light particles, heart rate waves and sleep patterns represented as emerald and cyan light ribbons, futuristic health technology aesthetic, dark background, slow cinematic movement, seamless loop"
```

### Icons (Recraft AI)

```
Style: Minimal line icons, 2px stroke weight, rounded line caps and joins
Color: Single color (white #FFFFFF or emerald #50E3A4)
Size: 24x24px viewBox

Generate icons for:
1. "Brain with pulse wave - neural activity icon"
2. "Heart with ECG line - heart rate monitoring"
3. "Moon with stars - sleep tracking"
4. "Gauge meter with low-to-high - stress level"
5. "Battery with wellness leaf - energy/recovery"
6. "Wristband device - wearable tracker"
7. "Lotus flower - meditation/mindfulness"
8. "Two circular arrows - sync/connection"
9. "Bell with pulse ring - smart notification"
10. "Gear with brain pattern - cognitive settings"
11. "Graph trending upward - analytics/progress"
12. "Person silhouette with data points - body tracking"
13. "Cloud with checkmark - data synced"
14. "Shield with heart - health protection"
15. "Calendar with checkmark - daily goals"
```

---

## Deployment Guide

### Pre-Deployment Checklist

- [ ] All images optimized (WebP format, <200KB each)
- [ ] Video compressed (WebM primary, MP4 fallback, <5MB)
- [ ] Fonts preloaded in layout.tsx
- [ ] Meta tags and OG images set
- [ ] favicon.ico and apple-touch-icon added
- [ ] Analytics configured (if needed)
- [ ] 404 page created
- [ ] Responsive tested (375px, 768px, 1024px, 1440px)
- [ ] Lighthouse score checked (aim for 90+)
- [ ] prefers-reduced-motion tested

### Vercel Deployment

```bash
# 1. Build locally first
npm run build

# 2. If build succeeds, deploy
vercel

# 3. For production
vercel --prod

# 4. Configure domain (optional)
vercel domains add onesync.io
```

### Environment Variables (if needed)

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://onesync.io
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Performance Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizeCss: true,
  },
}
```

---

## Quick Start Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod

# Analyze bundle
npm run build && npx @next/bundle-analyzer
```

---

## Resources & References

### Design Inspiration
- [Apple AirPods Pro](https://www.apple.com/airpods-pro/) - Scroll canvas, sticky reveals
- [Apple Watch](https://www.apple.com/watch/) - Giant typography, feature sync
- [Samsung Galaxy Buds3 Pro](https://www.samsung.com/us/mobile-audio/galaxy-buds3-pro/) - Video integration

### Technical Tutorials
- [CSS-Tricks: Apple Scroll Animations](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/)
- [Awwwards: Product Scroll Animation](https://www.awwwards.com/inspiration/product-scroll-triggered-animation-apple-airpods-pro)
- [Cards Parallax with Framer Motion](https://blog.olivierlarose.com/tutorials/cards-parallax)

### Free Asset Tools
- [Leonardo AI](https://leonardo.ai) - 150 free/day
- [Spline](https://spline.design) - Free 3D
- [v0.dev](https://v0.dev) - Free UI generation
- [Pika Labs](https://pika.art) - Free video credits
- [Recraft AI](https://recraft.ai) - Free icons

---

## Agent Instructions

When working on this project, any AI agent should:

1. **Read this plan first** to understand context
2. **Check `/docs/ASSET_REQUIREMENTS.md`** for asset specs
3. **Follow the design system** in `tailwind.config.ts` and `globals.css`
4. **Use animation presets** from `src/lib/motion.ts`
5. **Prioritize phases in order** - don't skip ahead
6. **Test responsive** at 375px, 768px, 1024px, 1440px
7. **Respect prefers-reduced-motion** for all animations

---

*Last Updated: January 2025*
*Version: 1.0*
