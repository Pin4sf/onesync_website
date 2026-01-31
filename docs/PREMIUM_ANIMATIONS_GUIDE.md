# OneSync Premium Animations & Effects Guide

> Technical guide for implementing Apple-level scroll animations, 3D effects, and premium interactions to elevate the landing page experience.

---

## Table of Contents

1. [Animation Philosophy](#animation-philosophy)
2. [Library Stack Recommendation](#library-stack-recommendation)
3. [Apple-Style Scroll Animations](#apple-style-scroll-animations)
4. [Hero Section Enhancements](#hero-section-enhancements)
5. [3D Product Showcase](#3d-product-showcase)
6. [Smooth Scroll Implementation](#smooth-scroll-implementation)
7. [Premium Micro-interactions](#premium-micro-interactions)
8. [Performance Optimization](#performance-optimization)
9. [Implementation Roadmap](#implementation-roadmap)

---

## Animation Philosophy

### Apple's Design Principles (Applied)

1. **Purposeful Motion** - Every animation communicates meaning
2. **Natural Physics** - Movements feel organic with proper easing
3. **Scroll Storytelling** - Content reveals progressively as you scroll
4. **Restrained Luxury** - Premium doesn't mean excessive

### Key Metrics to Maintain

| Metric | Target | Current |
|--------|--------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | TBD |
| FID (First Input Delay) | < 100ms | TBD |
| CLS (Cumulative Layout Shift) | < 0.1 | TBD |
| Animation Frame Rate | 60fps | - |

---

## Library Stack Recommendation

### Tier 1: Essential (Install First)

```bash
npm install gsap lenis
```

| Library | Size | Purpose |
|---------|------|---------|
| **GSAP** | 62KB | Industry-standard animation library |
| **ScrollTrigger** | Included | Scroll-linked animations |
| **Lenis** | 3KB | Smooth scroll physics |

### Tier 2: 3D Enhancement (Optional)

```bash
npm install three @react-three/fiber @react-three/drei
```

| Library | Size | Purpose |
|---------|------|---------|
| **Three.js** | 150KB | WebGL 3D rendering |
| **React Three Fiber** | 25KB | React integration |
| **Drei** | 45KB | Useful 3D helpers |

### Current Stack (Keep)

- **Framer Motion** - Already installed, works well for component animations
- **Tailwind CSS** - Utility classes for responsive design

---

## Apple-Style Scroll Animations

### Option A: Image Sequence Animation (Recommended)

This is how Apple achieves their product rotation on scroll.

**How It Works:**
1. Pre-render 60-120 frames of product rotating
2. Load all frames into memory
3. Use GSAP ScrollTrigger to scrub through frames based on scroll position
4. Display current frame on canvas

**Implementation:**

```tsx
// src/components/ProductRotation.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;

export function ProductRotation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ current: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload all frames
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/product/sequence/frame-${String(i).padStart(3, "0")}.webp`;
      images.push(img);
    }
    imagesRef.current = images;

    // Wait for first frame to set canvas size
    images[0].onload = () => {
      canvas.width = images[0].width;
      canvas.height = images[0].height;
      ctx.drawImage(images[0], 0, 0);
    };

    // Render function
    const render = () => {
      const img = images[Math.round(frameRef.current.current)];
      if (img?.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      }
    };

    // GSAP ScrollTrigger animation
    gsap.to(frameRef.current, {
      current: FRAME_COUNT - 1,
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top center",
        end: "bottom center",
        scrub: 0.5, // Smooth scrubbing
        onUpdate: render,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="h-[300vh] flex items-start justify-center pt-32">
      <canvas
        ref={canvasRef}
        className="sticky top-1/2 -translate-y-1/2 max-w-full"
      />
    </div>
  );
}
```

**Pros:**
- Buttery smooth performance
- Exact control over every frame
- Works on all devices
- No real-time 3D rendering overhead

**Cons:**
- Requires pre-rendered frames (asset creation)
- ~2-6MB additional download

---

### Option B: Real-Time 3D with React Three Fiber

**Implementation:**

```tsx
// src/components/Product3D.tsx
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function ProductModel() {
  const { scene } = useGLTF("/3d/oneband.glb");
  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current.rotation, {
      y: Math.PI * 2, // Full rotation
      scrollTrigger: {
        trigger: "#product-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <group ref={ref}>
      <primitive object={scene} scale={viewport.width / 5} />
    </group>
  );
}

export function Product3D() {
  return (
    <div id="product-section" className="h-[200vh]">
      <div className="sticky top-0 h-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#D4A853"
          />
          <ProductModel />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
          />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </div>
  );
}
```

**Pros:**
- Interactive (can respond to mouse)
- Single file download (GLB model)
- Dynamic lighting effects possible

**Cons:**
- Higher GPU usage
- May struggle on older devices
- Requires optimized 3D model

---

### Option C: CSS 3D Transforms + GSAP (Simplest)

**For simpler rotation without 3D model:**

```tsx
// src/components/ProductParallax.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function ProductParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Create timeline for multiple effects
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Rotate and scale as you scroll
    tl.fromTo(
      image,
      { rotateY: -30, scale: 0.8, opacity: 0.5 },
      { rotateY: 30, scale: 1.1, opacity: 1, ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[150vh] perspective-1000">
      <div className="sticky top-1/2 -translate-y-1/2 flex justify-center">
        <div
          ref={imageRef}
          className="transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/product/oneband-hero.png"
            alt="OneBand"
            width={600}
            height={400}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
```

---

## Hero Section Enhancements

### Video Background Implementation

```tsx
// src/components/sections/HeroSection.tsx (Enhanced)
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroAnimations } from "@/lib/motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Only play video on desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Static poster for mobile/fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('/video/hero-poster.jpg')" }}
        />

        {/* Video for desktop */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/video/hero-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/video/hero-background.mp4" type="video/mp4" />
          <source src="/video/hero-background.webm" type="video/webm" />
        </video>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950/60 via-surface-950/40 to-surface-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.span
          {...heroAnimations.label}
          className="inline-block text-xs uppercase tracking-[0.3em] text-text-muted mb-6"
        >
          Introducing
        </motion.span>

        <motion.h1
          {...heroAnimations.title}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="text-gold-gradient">ONE</span>
          <span className="text-text-primary">BAND</span>
        </motion.h1>

        <motion.p
          {...heroAnimations.tagline}
          className="text-xl md:text-2xl text-text-secondary max-w-xl mx-auto mb-12"
        >
          Beyond Vital Signs. Into the Mind.
        </motion.p>

        <motion.div {...heroAnimations.cta}>
          <a
            href="#product"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-surface-950 font-semibold rounded-full hover:bg-gold-light transition-all hover:scale-105"
          >
            Explore
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-text-muted animate-bounce" />
      </motion.div>
    </section>
  );
}
```

---

### Particle Effect Background (Alternative)

```tsx
// src/components/ParticleField.tsx
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function ParticleField() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#D4A853" },
          links: {
            color: "#D4A853",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
          },
          number: { value: 50, density: { enable: true, area: 800 } },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
```

---

## Smooth Scroll Implementation

### Lenis Setup for Next.js

```tsx
// src/components/SmoothScroll.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}
```

**Usage in layout:**

```tsx
// src/app/layout.tsx
import { SmoothScroll } from "@/components/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
```

---

## Premium Micro-interactions

### Magnetic Button Effect

```tsx
// src/components/ui/MagneticButton.tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
```

### Text Reveal Animation

```tsx
// src/components/ui/TextReveal.tsx
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TextReveal({ children, className }: { children: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (!chars) return;

    gsap.fromTo(
      chars,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children.split("").map((char, i) => (
        <span key={i} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
```

### Counter Animation (Enhanced)

```tsx
// src/components/ui/AnimatedCounter.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (endValue - startValue) * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
```

---

## Performance Optimization

### Lazy Loading 3D Components

```tsx
// src/components/Lazy3D.tsx
import dynamic from "next/dynamic";

export const Product3D = dynamic(
  () => import("./Product3D").then((mod) => mod.Product3D),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse text-text-muted">Loading 3D...</div>
      </div>
    ),
    ssr: false,
  }
);
```

### Intersection Observer for Videos

```tsx
// src/hooks/useVideoPlayback.ts
import { useEffect, useRef } from "react";

export function useVideoPlayback() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return videoRef;
}
```

### Reduced Motion Support

```tsx
// src/hooks/useReducedMotion.ts
import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)

| Task | Priority | Effort |
|------|----------|--------|
| Install GSAP + Lenis | 🔴 High | 1 hour |
| Add smooth scroll wrapper | 🔴 High | 2 hours |
| Update HeroSection with video | 🔴 High | 4 hours |
| Add scroll indicator animation | 🟢 Low | 1 hour |

### Phase 2: Product Showcase (Week 2)

| Task | Priority | Effort |
|------|----------|--------|
| Create image sequence loader | 🔴 High | 4 hours |
| Implement scroll-linked rotation | 🔴 High | 6 hours |
| Add parallax backgrounds | 🟡 Medium | 3 hours |
| Optimize for mobile | 🟡 Medium | 2 hours |

### Phase 3: Polish (Week 3)

| Task | Priority | Effort |
|------|----------|--------|
| Add magnetic buttons | 🟢 Low | 2 hours |
| Implement text reveals | 🟡 Medium | 3 hours |
| Add counter animations | 🟡 Medium | 2 hours |
| Performance audit | 🔴 High | 4 hours |

### Phase 4: 3D Enhancement (Optional)

| Task | Priority | Effort |
|------|----------|--------|
| Setup React Three Fiber | 🟡 Medium | 3 hours |
| Create product 3D scene | 🟡 Medium | 8 hours |
| Add interactive controls | 🟢 Low | 4 hours |
| Optimize GLB model | 🟡 Medium | 2 hours |

---

## Reference Sites

### Apple-Level Landing Pages
- [Apple Vision Pro](https://www.apple.com/apple-vision-pro/)
- [Apple Watch](https://www.apple.com/apple-watch-series-9/)
- [Nothing Phone](https://nothing.tech/pages/phone-2)
- [Linear](https://linear.app/)
- [Vercel](https://vercel.com/)

### Inspiration for Scroll Animations
- [Awwwards](https://www.awwwards.com/)
- [Codrops](https://tympanus.net/codrops/)
- [GSAP Showcase](https://greensock.com/showcase/)

---

## Quick Start Commands

```bash
# Install animation libraries
npm install gsap lenis

# Optional: 3D libraries
npm install three @react-three/fiber @react-three/drei

# Optional: Particles
npm install react-tsparticles tsparticles-slim

# Run development server
npm run dev
```

---

**Last Updated:** January 2026
