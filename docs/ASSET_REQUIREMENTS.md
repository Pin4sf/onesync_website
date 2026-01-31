# OneSync Website - Complete Asset Requirements

> Comprehensive guide for all visual assets, videos, 3D renders, and creative media needed to elevate the OneSync/OneBand landing page to Apple-level premium quality.

---

## Table of Contents

1. [Asset Overview Dashboard](#asset-overview-dashboard)
2. [Hero Section Assets](#1-hero-section-assets)
3. [Product Photography](#2-product-photography)
4. [App Screenshots](#3-app-screenshots)
5. [Team Photography](#4-team-photography)
6. [Video Assets](#5-video-assets)
7. [3D Renders & Animation Assets](#6-3d-renders--animation-assets)
8. [Icon & Graphic Assets](#7-icon--graphic-assets)
9. [Technical Specifications](#8-technical-specifications)
10. [File Naming Conventions](#9-file-naming-conventions)
11. [Delivery Checklist](#10-delivery-checklist)

---

## Asset Overview Dashboard

| Category | Total Assets | Priority | Status |
|----------|-------------|----------|--------|
| Hero Background | 3 | 🔴 Critical | Needed |
| Product Photos | 12-15 | 🔴 Critical | Needed |
| App Screenshots | 6-9 | 🟡 High | Needed |
| Team Headshots | 4 | 🟡 High | Needed |
| Video Content | 2-3 | 🔴 Critical | Needed |
| 3D Renders | 60-120 frames | 🟡 High | Needed |
| Icons/Graphics | 8-12 | 🟢 Medium | Partial |

---

## 1. Hero Section Assets

### 1.1 Hero Background Video (Primary)

**Purpose:** Atmospheric, cinematic loop playing behind the hero text to create premium Apple-like feel.

| Specification | Requirement |
|--------------|-------------|
| **Filename** | `hero-background.mp4`, `hero-background.webm` |
| **Resolution** | 1920x1080 (Full HD) minimum, 4K preferred |
| **Duration** | 8-15 seconds (seamless loop) |
| **File Size** | < 5MB (optimized), < 15MB (source) |
| **Frame Rate** | 24fps or 30fps |
| **Codec** | H.264 (MP4), VP9 (WebM) |
| **Audio** | None (muted playback) |

**Creative Direction:**
```
Option A: Abstract Gold Particles
- Slow-moving gold/amber particles floating in dark space
- Subtle depth of field with bokeh effect
- Evokes "neural connections" or "cognitive signals"
- Reference: https://www.apple.com/apple-vision-pro/

Option B: Product Reveal
- OneBand slowly rotating in dramatic lighting
- Dark background with single gold-tinted light source
- Smoke/mist elements for atmosphere
- Reference: Apple Watch launch videos

Option C: Biometric Visualization
- Abstract representation of brain waves/heart signals
- Gold lines flowing and pulsing
- Data visualization aesthetic
- Reference: https://www.whoop.com/
```

**Delivery Formats:**
```
/public/video/
├── hero-background.mp4          (H.264, 1920x1080, <5MB)
├── hero-background.webm         (VP9, 1920x1080, <4MB)
├── hero-background-mobile.mp4   (H.264, 720x1280, <2MB)
└── hero-poster.jpg              (Static fallback, 1920x1080)
```

---

### 1.2 Hero Static Fallback Images

**Purpose:** Mobile devices, slow connections, reduced-motion preferences.

| Specification | Requirement |
|--------------|-------------|
| **Filenames** | `hero-poster.jpg`, `hero-poster-mobile.jpg` |
| **Desktop** | 1920x1080 @ 80% quality |
| **Mobile** | 1080x1920 (portrait) @ 80% quality |
| **Format** | JPEG + WebP versions |

**Creative Direction:**
- Single dramatic frame from the video
- Product centered with atmospheric lighting
- Dark gradient overlay for text readability

---

## 2. Product Photography

### 2.1 Hero Product Shot (Primary)

**Purpose:** Main product reveal after hero section.

| Specification | Requirement |
|--------------|-------------|
| **Filename** | `oneband-hero.png` |
| **Resolution** | 2400x1600 minimum |
| **Format** | PNG with transparency |
| **Background** | Transparent or pure black (#0a0a0a) |

**Creative Direction:**
```
- 3/4 angle view showing band curve and display
- Dramatic side lighting (gold/warm tone)
- Shadow beneath product for grounding
- Ultra-clean, no dust or imperfections
- Reference: Apple Watch product photography
```

---

### 2.2 Apple-Style Scroll Animation Sequence ⭐

**Purpose:** 60-120 frame image sequence for scroll-triggered product rotation.

| Specification | Requirement |
|--------------|-------------|
| **Folder** | `/public/product/sequence/` |
| **Naming** | `frame-001.webp` through `frame-120.webp` |
| **Resolution** | 1200x1200 (square, consistent) |
| **Format** | WebP (60% quality, ~30-50KB each) |
| **Total Frames** | 60 minimum, 120 for smooth |
| **Total Size** | ~2-6MB for full sequence |

**Animation Concept:**
```
Frame 1-30:    Front view → Side profile (90° rotation)
Frame 31-60:   Side profile → Back view (90° rotation)
Frame 61-90:   Back view → Opposite side (90° rotation)
Frame 91-120:  Opposite side → Front (complete loop)

Alternative (simpler):
Frame 1-60:    Full 360° rotation
```

**Technical Notes:**
- All frames must be EXACTLY the same dimensions
- Product must stay perfectly centered
- Consistent lighting across all frames
- Rendered from 3D model for precision

---

### 2.3 Lifestyle/Context Photography

**Purpose:** Product in real-world contexts for credibility.

| Asset | Description | Dimensions |
|-------|-------------|------------|
| `oneband-wrist.jpg` | On human wrist, natural pose | 1600x1200 |
| `oneband-lifestyle.jpg` | Professional wearing during work | 1600x1200 |
| `oneband-meditation.jpg` | Wellness/meditation context | 1600x1200 |
| `oneband-surface.jpg` | Product on stone/premium surface | 1600x1200 |
| `oneband-charging.jpg` | On charging dock | 1200x1200 |

**Creative Direction:**
```
- Soft, natural lighting
- Shallow depth of field (f/2.8 or wider)
- Muted, professional color grading
- Diverse hand models representing target audience
- Premium environments (not clinical)
```

---

### 2.4 Product Detail Shots

**Purpose:** Feature callouts and close-ups.

| Asset | Description | Dimensions |
|-------|-------------|------------|
| `oneband-sensor.jpg` | Bottom sensor array close-up | 1200x800 |
| `oneband-clasp.jpg` | Band clasp/closure detail | 1200x800 |
| `oneband-display.jpg` | Display with UI visible | 1200x800 |
| `oneband-material.jpg` | Band material texture | 1200x800 |

---

## 3. App Screenshots

### 3.1 Primary App Screens (Required)

**Purpose:** App showcase section demonstrating key features.

| Specification | Requirement |
|--------------|-------------|
| **Folder** | `/public/app/` |
| **Dimensions** | 1290x2796 (iPhone 15 Pro Max) |
| **Format** | PNG (for device mockups) or WebP |
| **Device Frame** | Optional - can add via CSS |

**Required Screens:**

| Filename | Screen Content |
|----------|----------------|
| `app-neural.png` | Neural Analysis dashboard |
| `app-analytics.png` | Analytics/insights view |
| `app-body.png` | Body tracking/vitals |
| `app-home.png` | Home/dashboard screen |
| `app-stress.png` | Stress level visualization |
| `app-sleep.png` | Sleep analysis view |

**Creative Direction:**
```
- Show real (or realistic) data visualizations
- Gold accent color (#D4A853) for highlights
- Dark mode UI matching website aesthetic
- Clean, uncluttered interface design
- Status bar showing realistic time/battery
```

---

### 3.2 App Feature Details

| Filename | Description |
|----------|-------------|
| `app-prediction.png` | "Not tracking, but prediction" feature |
| `app-twin.png` | Digital twin visualization |
| `app-ai.png` | AI-driven cognition insights |

---

## 4. Team Photography

### 4.1 Founder Headshots

**Purpose:** Team section credibility.

| Specification | Requirement |
|--------------|-------------|
| **Folder** | `/public/team/` |
| **Dimensions** | 800x800 (square, 1:1 ratio) |
| **Format** | JPEG @ 85% quality |
| **Background** | Neutral gray or black gradient |

**Required Photos:**

| Filename | Team Member |
|----------|-------------|
| `ark.jpg` | Ark - CEO |
| `shivansh.jpg` | Shivansh - CTO |
| `ansh.jpg` | Ansh - CPO |
| `mayur.jpg` | Mayur - CFO |

**Creative Direction:**
```
- Professional, approachable expression
- Consistent lighting across all photos
- Business casual or smart casual attire
- Slight smile, direct eye contact
- Shot from chest up, face fills ~60% of frame
- Consistent post-processing/color grade
```

---

## 5. Video Assets

### 5.1 Product Demo Video (Optional Enhancement)

**Purpose:** Embedded video showing product in action.

| Specification | Requirement |
|--------------|-------------|
| **Filename** | `product-demo.mp4` |
| **Duration** | 30-60 seconds |
| **Resolution** | 1920x1080 |
| **File Size** | < 20MB |

**Content Suggestion:**
```
0-10s:  Product reveal with dramatic lighting
10-25s: App pairing and first sync
25-45s: Key features in action (stress detection, etc.)
45-60s: Lifestyle shots with call-to-action
```

---

### 5.2 Background Texture Videos

**Purpose:** Subtle animated backgrounds for sections.

| Filename | Description | Duration |
|----------|-------------|----------|
| `texture-particles.mp4` | Gold particles floating | 10s loop |
| `texture-gradient.mp4` | Slow color shift gradient | 15s loop |
| `texture-noise.mp4` | Subtle film grain | 5s loop |

---

## 6. 3D Renders & Animation Assets

### 6.1 Product 3D Model Requirements

**Purpose:** For creating scroll sequences and interactive experiences.

| Specification | Requirement |
|--------------|-------------|
| **Format** | `.glb` / `.gltf` (for Three.js) |
| **Polygon Count** | < 100k triangles (optimized) |
| **Textures** | PBR materials (albedo, normal, roughness) |
| **UV Mapping** | Clean, no overlapping |

**Delivery:**
```
/public/3d/
├── oneband.glb              (Optimized model, <5MB)
├── oneband-hd.glb           (High-detail, <20MB)
└── textures/
    ├── baseColor.webp
    ├── normal.webp
    ├── roughness.webp
    └── metallic.webp
```

---

### 6.2 Pre-rendered Frame Sequences

**For Apple-style scroll animations (alternative to real-time 3D):**

| Sequence | Frames | Purpose |
|----------|--------|---------|
| `rotation-360/` | 120 frames | Full product rotation |
| `explode/` | 60 frames | Exploded view animation |
| `glow/` | 30 frames | Pulsing glow effect |

---

## 7. Icon & Graphic Assets

### 7.1 Feature Icons (SVG)

**Purpose:** Clean, consistent iconography.

| Filename | Description |
|----------|-------------|
| `icon-brain.svg` | Cognitive/neural icon |
| `icon-heart.svg` | Physical health icon |
| `icon-battery.svg` | Long battery life |
| `icon-water.svg` | Waterproof feature |
| `icon-sync.svg` | 24/7 passive sensing |
| `icon-privacy.svg` | Privacy/lock icon |
| `icon-ai.svg` | AI/machine learning |
| `icon-prediction.svg` | Predictive analytics |

**Specifications:**
```
- 24x24 base size (scalable)
- Single color (currentColor for CSS control)
- 2px stroke weight
- Consistent corner radius
- Lucide-style design language
```

---

### 7.2 Decorative Graphics

| Filename | Description | Format |
|----------|-------------|--------|
| `gradient-orb.png` | Gold glow orb | PNG w/ alpha |
| `noise-texture.png` | Subtle grain overlay | PNG, tileable |
| `grid-pattern.svg` | Dot grid background | SVG |

---

## 8. Technical Specifications

### 8.1 Image Optimization Guide

| Format | Use Case | Quality | Max Size |
|--------|----------|---------|----------|
| WebP | Photos, UI | 80% | 200KB |
| PNG | Transparency | - | 500KB |
| JPEG | Photos (fallback) | 85% | 300KB |
| SVG | Icons, logos | - | 10KB |

### 8.2 Video Optimization Guide

| Platform | Resolution | Bitrate | Codec |
|----------|------------|---------|-------|
| Desktop | 1920x1080 | 2-4 Mbps | H.264 |
| Mobile | 1280x720 | 1-2 Mbps | H.264 |
| Fallback | WebM | 2-3 Mbps | VP9 |

### 8.3 Color Profile

All assets should use **sRGB** color profile for web consistency.

**Brand Colors for Reference:**
```
Gold Primary:    #D4A853
Gold Light:      #E5C078
Gold Dark:       #B8923D
Surface Dark:    #0a0a0a
Surface Card:    #0f0f0f
Text Primary:    #FFFFFF
Text Muted:      #737373
```

---

## 9. File Naming Conventions

### Pattern
```
[category]-[descriptor]-[variant].[extension]

Examples:
- oneband-hero.png
- oneband-hero-mobile.webp
- app-neural.png
- team-ark.jpg
- icon-brain.svg
- hero-background.mp4
```

### Folder Structure
```
/public/
├── video/
│   ├── hero-background.mp4
│   ├── hero-background.webm
│   └── hero-poster.jpg
├── product/
│   ├── oneband-hero.png
│   ├── oneband-wrist.jpg
│   ├── oneband-lifestyle.jpg
│   └── sequence/
│       ├── frame-001.webp
│       ├── frame-002.webp
│       └── ... (120 frames)
├── app/
│   ├── app-neural.png
│   ├── app-analytics.png
│   └── app-body.png
├── team/
│   ├── ark.jpg
│   ├── shivansh.jpg
│   ├── ansh.jpg
│   └── mayur.jpg
├── 3d/
│   └── oneband.glb
└── icons/
    ├── icon-brain.svg
    └── icon-heart.svg
```

---

## 10. Delivery Checklist

### Phase 1: Critical (Launch Blockers)
- [ ] Hero background video (MP4 + WebM + poster)
- [ ] Hero product shot (oneband-hero.png)
- [ ] App screenshots (3 minimum)
- [ ] Team headshots (4 photos)

### Phase 2: High Priority (Within 1 Week)
- [ ] Product rotation sequence (60-120 frames)
- [ ] All app screenshots (6-9 screens)
- [ ] Lifestyle photography (3-5 shots)
- [ ] Product detail shots (4 shots)

### Phase 3: Enhancement (Within 2 Weeks)
- [ ] 3D model (GLB format)
- [ ] Additional video content
- [ ] Decorative graphics
- [ ] Full icon set

---

## Asset Creation Resources

### Photography
- **Stock alternative:** Unsplash (for lifestyle backgrounds)
- **AI generation:** Midjourney for concept mockups
- **3D rendering:** Blender, Cinema 4D, KeyShot

### Video
- **Stock footage:** Artgrid, Pexels
- **Motion graphics:** After Effects, DaVinci Resolve
- **Optimization:** HandBrake, FFmpeg

### 3D Models
- **Creation:** Blender, Fusion 360
- **Optimization:** gltf-pipeline, Draco compression
- **Viewer test:** https://gltf-viewer.donmccurdy.com/

---

## Questions?

For asset specifications or creative direction questions, contact the development team.

**Last Updated:** January 2026
