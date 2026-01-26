# OneSync Website

A product-grade frontend system that demonstrates the OneSync philosophy in action: edge-first intelligence, conditional inference, and privacy-by-design.

This repository is intentionally structured so that **product thinking, design intent, and implementation never drift apart**, even when using AI-assisted development tools like Antigravity, Cursor, and Claude.

---

## 1. What This Repository Is

This repo contains:

- A **Next.js frontend** that simulates the OneSync product experience
- A **documentation layer** that acts as the single source of truth
- A **demo system** that shows how insights appear, disappear, and explain themselves

This is not a marketing-only site.
This is a **product understanding and trust-building surface**.

---

## 2. Core Philosophy (Non-Negotiable)

All code and content in this repository must follow these principles:

- Edge-first computation
- Features over raw data
- Conditional inference (NO INFERENCE is a valid output)
- Athlete-controlled consent
- Calm, infrastructure-like UI
- No medical or diagnostic claims

If something violates these principles, it does not belong in this repo.

---

## 3. High-Level System Architecture

The website represents the OneSync system through simulation.

Conceptual flow:

OneBand (device)
→ OneSync Mobile (consent + encryption)
→ OneSync Cloud (aggregation + trends)
→ Website UI (explanation + demo)

Important:
- The website never handles raw biosignals
- All data shown is mock or feature-level
- Uncertainty and confidence are always visible

---

## 4. Repository Structure

```
onesync-website/
│
├── docs/                # SINGLE SOURCE OF TRUTH (do not skip)
│   ├── product/         # Product intent and scope
│   ├── design/          # Visual and UX philosophy
│   ├── tech/            # Technology decisions
│   ├── architecture/    # Frontend + demo logic
│   └── README.md        # How to use the docs
│
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Home
│   ├── demo/            # Product in action
│   ├── system/          # Architecture explanation
│   └── privacy/         # Governance and consent
│
├── components/          # Reusable UI components
│   ├── insights/        # Insight cards, confidence meters
│   ├── system/          # Diagrams, flow visuals
│   └── ui/              # shadcn/ui components
│
├── lib/                 # Logic and mock system behavior
│   ├── system-states.ts # Canonical demo states
│   ├── mock-data/       # Feature-level mock data
│   └── types.ts         # Shared TypeScript types
│
├── content/             # MDX used directly by the site
│   ├── pages/
│   └── legal/
│
├── .cursorrules         # Cursor behavior constraints
├── .claude/             # Claude context and guidance
├── package.json
└── README.md
```

---

## 5. The Docs Folder (Critical)

The `/docs` directory is the **single source of truth**.

Rules:
- Docs explain *what* and *why*
- Code explains *how*
- If code and docs disagree, docs win

### Key files

- `docs/product/prod.md` – Product scope and intent
- `docs/product/site.md` – Website structure and inspiration
- `docs/design/design.md` – UI/UX philosophy
- `docs/tech/tech-stack.md` – Technology decisions

All AI tools must reference these files.

---

## 6. Demo System Architecture (Frontend Logic)

The demo is built around **explicit system states**, not random numbers.

### System State Model

Each state represents a realistic condition:

- ideal_sleep
- light_motion
- high_motion
- poor_contact
- training_impact

Each state defines:
- Available modalities
- Signal quality
- Confidence levels
- Which insights are allowed or gated

Switching states updates the entire UI.

This mirrors how the real OneBand + OneSync system behaves.

---

## 7. Key UI Components and Responsibilities

### InsightCard

Displays:
- Insight value or NO INFERENCE
- Confidence indicator
- Modalities used
- Explanation when unavailable

NO INFERENCE is treated as a first-class outcome.

---

### SignalQualityIndicator

Shows:
- Motion quality
- Contact quality
- Optical quality

Used to explain why inference is allowed or blocked.

---

### ModeSwitcher

Simulates operating modes:
- Sleep
- ADL
- Training

Changing mode affects:
- Data availability
- Confidence
- UI behavior

---

### DataFlowDiagram

Visualizes:
- Where computation happens
- What data moves
- What never leaves the device

Used to replace long text explanations.

---

## 8. AI Tooling Workflow

This repo is designed for AI-assisted development.

### Antigravity

- Used for rapid generation and iteration
- Always anchored to `/docs`
- Never allowed to invent product behavior

### Cursor

- Enforced via `.cursorrules`
- Must follow product and design docs

### Claude

- Context stored in `.claude/context.md`
- Used for reasoning, refactoring, and explanation

---

## 9. Development Workflow

Recommended flow:

1. Update or add a doc in `/docs`
2. Clarify intent before writing code
3. Use Antigravity or Cursor to generate UI
4. Refine manually
5. Keep mock data aligned with system states

Do not code first and rationalize later.

---

## 10. What This Repo Is Not

- Not a medical device
- Not a fitness influencer app
- Not a real-time biosignal processor
- Not a raw data dashboard

It is a **controlled, explainable representation** of a real system.

---

## 11. Future Expansion

This architecture allows seamless evolution into:

- Authenticated dashboards
- Real backend APIs
- Team and athlete portals
- Investor and partner demos

Without rewriting the foundation.

---

## 12. Final Note

This repository is intentionally calm, disciplined, and explicit.

If something feels flashy, noisy, or overconfident, it is probably wrong.

Trust is the product.

