# Web Design Audit Instructions

Use the **web-design-guidelines** skill to audit the OneSync frontend codebase.

## Audit Scope

Audit the following directories in priority order:

### Primary Scope
```
src/app/              # Next.js pages and layouts
src/components/       # Reusable UI components
```

### Secondary Scope
```
src/lib/             # UI-related utilities (if applicable)
public/              # Static assets (images, fonts, etc.)
```

## What to Check

### 1. Accessibility (CRITICAL)
- [ ] All images have meaningful `alt` attributes
- [ ] Form inputs have associated `label` elements or `aria-label`
- [ ] Interactive elements are keyboard accessible (tab navigation)
- [ ] Focus indicators are visible and clear
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] ARIA attributes are used correctly
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Skip links for keyboard navigation
- [ ] Screen reader compatibility

### 2. Responsive Layout (HIGH)
- [ ] Mobile-first design approach
- [ ] Breakpoints are consistent with Tailwind config
- [ ] Text remains readable on all screen sizes
- [ ] Touch targets are minimum 44x44px on mobile
- [ ] Horizontal scrolling is intentional, not accidental
- [ ] Images scale properly without distortion
- [ ] Navigation works on mobile (hamburger menu, etc.)
- [ ] Tables are responsive or have horizontal scroll

### 3. Semantic HTML (HIGH)
- [ ] Proper use of semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- [ ] Lists use `<ul>`, `<ol>`, `<li>` appropriately
- [ ] Buttons are `<button>` not `<div>` with click handlers
- [ ] Links are `<a>` with proper `href`
- [ ] Forms use `<form>` element
- [ ] Headers use `<header>`, footers use `<footer>`
- [ ] No div soup - semantic alternatives preferred

### 4. Visual Hierarchy and Spacing (MEDIUM)
- [ ] Consistent spacing using Tailwind scale
- [ ] Typography hierarchy is clear (size, weight, color)
- [ ] White space is used effectively
- [ ] Visual grouping of related content
- [ ] Call-to-action buttons are prominent
- [ ] Alignment is consistent
- [ ] Grid/flexbox used appropriately

### 5. Performance Impacting Patterns (HIGH)
- [ ] Images use Next.js `<Image>` component with optimization
- [ ] Images have width/height to prevent layout shift
- [ ] Lazy loading for below-fold content
- [ ] No render-blocking CSS (Tailwind handles this)
- [ ] Font loading strategy (font-display: swap)
- [ ] Excessive DOM depth (>15 levels)
- [ ] Unnecessary re-renders in components
- [ ] Client components only when necessary (prefer Server Components)

### 6. Mobile Usability (HIGH)
- [ ] Text is large enough (min 16px base)
- [ ] Tap targets are appropriately sized
- [ ] Forms are mobile-friendly (proper input types)
- [ ] No hover-dependent interactions (or mobile alternatives)
- [ ] Viewport meta tag is present
- [ ] Fixed elements don't block content

### 7. Interactive States (MEDIUM)
- [ ] Hover states for interactive elements
- [ ] Active/pressed states for buttons
- [ ] Focus states for keyboard navigation
- [ ] Disabled states are visually distinct
- [ ] Loading states for async operations
- [ ] Error states with clear messaging
- [ ] Empty states when no data

### 8. Color and Contrast (HIGH)
- [ ] Text-background contrast meets WCAG AA
- [ ] Interactive elements have sufficient contrast
- [ ] Color is not the only indicator (icons, labels too)
- [ ] Dark mode support (if applicable)
- [ ] Consistent color palette from Tailwind config

### 9. Typography (MEDIUM)
- [ ] Font stack is web-safe or loaded properly
- [ ] Line height is comfortable (1.5 for body text)
- [ ] Line length is optimal (50-75 characters)
- [ ] Font sizes are consistent
- [ ] Font weights are used meaningfully
- [ ] No overly long text blocks

### 10. Next.js & React Best Practices (MEDIUM)
- [ ] Server Components used by default
- [ ] Client Components only when needed (`'use client'`)
- [ ] Metadata API for SEO
- [ ] Loading UI patterns
- [ ] Error boundaries
- [ ] Suspense boundaries for streaming
- [ ] Proper key props in lists

## Output Format

For **each issue found**, provide:

```markdown
### [PRIORITY] Issue Title

**File:** `src/app/page.tsx`  
**Location:** Line 42 or Component `HeroSection`

**Problem:**  
Clear, concise description of what's wrong.

**Why it matters:**  
Impact on users (accessibility, UX, performance, SEO).

**Suggested fix:**  
```tsx
// Before
<div onClick={handleClick}>Click me</div>

// After
<button onClick={handleClick}>Click me</button>
```

**Benefit:**  
What improves after the fix (e.g., keyboard accessible, better SEO).
```

### Priority Levels

- **[CRITICAL]**: Accessibility violations, broken functionality
- **[HIGH]**: Significant UX issues, performance problems
- **[MEDIUM]**: Consistency improvements, best practices
- **[LOW]**: Optional enhancements, nice-to-haves

## Report Structure

Organize the audit report as follows:

```markdown
# OneSync Frontend Design Audit Report

**Date:** [Date]  
**Scope:** src/app/, src/components/  
**Skill Used:** web-design-guidelines

## Executive Summary
- Total files audited: X
- Issues found: Y
- Critical: A
- High: B
- Medium: C
- Low: D

## Critical Accessibility Issues
[List all CRITICAL issues]

## High Priority UX & Layout Issues
[List all HIGH issues]

## Medium Priority Design Issues
[List all MEDIUM issues]

## Low Priority Improvements
[List all LOW issues]

## Positive Findings
[What's already done well]

## Next Steps
[Recommended action items in priority order]
```

## Do NOT

❌ **Do not** rewrite large sections of code without asking  
❌ **Do not** introduce new libraries or dependencies  
❌ **Do not** change business logic or functionality  
❌ **Do not** modify API routes or server-side logic  
❌ **Do not** change the tech stack (Next.js, Tailwind, etc.)  
❌ **Do not** make assumptions about user requirements  

## Guidelines

✅ **Do** focus on design, UX, and accessibility  
✅ **Do** provide specific, actionable feedback  
✅ **Do** reference line numbers and file paths  
✅ **Do** explain the "why" behind recommendations  
✅ **Do** prioritize critical issues first  
✅ **Do** acknowledge what's done well  
✅ **Do** consider mobile-first approach  
✅ **Do** respect the existing Tailwind design system  

## Context for OneSync

OneSync is a modern Next.js application with:
- **Tech**: Next.js 15, React 19, Tailwind CSS 3.4, TypeScript
- **UI Library**: Radix UI for accessible primitives
- **Target Users**: Developers and tech-savvy users
- **Key Pages**: Landing, Demo, Technology, About
- **Design Goal**: Impressive, non-generic, professional

Keep this context in mind when auditing.

## Example Audit Entry

```markdown
### [HIGH] Missing Alt Text on Hero Image

**File:** `src/app/page.tsx`  
**Location:** Line 28, `<Image />` component

**Problem:**  
The hero section background image is missing an `alt` attribute:
```tsx
<Image src="/hero-bg.jpg" width={1920} height={1080} />
```

**Why it matters:**  
- Screen readers cannot describe the image to visually impaired users
- Fails WCAG 2.1 Level A (critical accessibility issue)
- Poor SEO - search engines can't understand image content
- Broken UX if image fails to load

**Suggested fix:**  
```tsx
<Image 
  src="/hero-bg.jpg" 
  width={1920} 
  height={1080}
  alt="OneSync platform interface showing real-time synchronization dashboard"
/>
```

**Benefit:**  
- Accessible to screen reader users
- Better SEO ranking
- Graceful degradation if image fails
- Compliance with WCAG standards
```

---

**Remember:** The goal is to provide a comprehensive, actionable audit that helps OneSync achieve premium frontend quality. Be thorough but constructive.
