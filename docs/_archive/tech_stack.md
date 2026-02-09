# OneSync Website – Technology Stack

## 1. Guiding Principles for the Tech Stack

The tech stack must:
- Be fast and lightweight
- Support static-first rendering
- Allow interactive demos
- Scale into dashboards later
- Enforce clarity and discipline

Avoid unnecessary abstraction or hype-driven tools.

---

## 2. Frontend Framework

### Next.js (App Router)

Why:
- Static Site Generation for performance
- Server Components reduce client JS
- Excellent SEO
- Easy expansion into authenticated dashboards

Usage:
- Static pages for marketing and system explanation
- Interactive demo page with mock data

---

## 3. Language

### TypeScript

Why:
- Enforces correctness
- Makes UI states explicit
- Scales safely as complexity grows

---

## 4. Styling System

### Tailwind CSS

Why:
- Predictable design constraints
- No CSS sprawl
- Fast iteration

Tailwind config acts as design tokens:
- Colors
- Spacing
- Typography
- Status indicators

---

## 5. UI Components

### shadcn/ui

Why:
- Accessible
- Minimal styling
- Fully owned components

Used for:
- Cards
- Buttons
- Tabs
- Accordions
- Modals

---

## 6. Content Management

### MDX

Why:
- Markdown clarity
- React components inside content
- Version controlled

Used for:
- System explanations
- Privacy pages
- Architecture walkthroughs

---

## 7. Visuals and Diagrams

### SVG + React

Why:
- Precise
- Lightweight
- Accessible
- Animatable

Optional:
- Framer Motion for subtle transitions

---

## 8. State Management

Initial phase:
- Local component state only

Future:
- React Context for UI state
- TanStack Query for server data

---

## 9. Mock Data Layer

Purpose:
- Simulate real system behavior
- Demonstrate conditional inference

Implementation:
- TypeScript objects
- Defined system states

---

## 10. Backend (Later Phase)

Initial:
- Next.js API routes

Future:
- Separate backend service
- Feature-only APIs

---

## 11. Authentication (Future)

### Auth.js (NextAuth)

Used only when dashboards or gated demos exist.

---

## 12. Database (Future)

### PostgreSQL + Prisma

Used for:
- User roles
- Audit logs
- Consent history

---

## 13. Hosting and Deployment

### Vercel

Why:
- Native Next.js support
- Global CDN
- Preview deployments

---

## 14. Monitoring and Reliability

- Web Vitals
- Lighthouse
- Sentry for error tracking

---

## 15. Security Baseline

- HTTPS only
- CSP headers
- No client secrets
- Minimal analytics

---

## 16. Repo Structure (Recommended)

/app
/components
/content
/lib
/styles

Mirrors product clarity and separation of concerns.

