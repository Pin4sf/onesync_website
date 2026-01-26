# Run Web Design Audit

This is the **step-by-step playbook** for running a comprehensive design audit on OneSync using Vercel Agent Skills.

## Goal

Execute a thorough design and UX audit on the OneSync frontend codebase to identify accessibility violations, responsive design issues, performance bottlenecks, and opportunities for visual improvement.

## Prerequisites

Before running an audit, ensure:
- [ ] `@vercel/skills` is installed (`npm install -D @vercel/skills`)
- [ ] `web-design-guidelines` skill is added
- [ ] You have access to the entire `src/` directory
- [ ] The project builds successfully (`npm run build`)

## Instructions for the Agent

### Phase 1: Preparation

1. **Load the web-design-guidelines skill**
   - Ensure the skill is available and up to date
   - Verify skill capabilities and supported checks

2. **Review OneSync context**
   - Tech stack: Next.js 15, React 19, Tailwind CSS 3.4
   - UI library: Radix UI
   - Target: Impressive, non-generic, professional design
   - Read: `agent/skills.config.md` for custom rules

3. **Define audit scope**
   - Primary: `src/app/` (pages and layouts)
   - Primary: `src/components/` (UI components)
   - Secondary: `public/` (static assets)
   - Secondary: `src/lib/` (UI utilities)

### Phase 2: Code Analysis

4. **Scan frontend code systematically**
   - Start with critical pages (`src/app/page.tsx`, layout files)
   - Move to high-traffic pages (demo, technology, about)
   - Audit shared components (headers, footers, buttons)
   - Check utility components and layouts

5. **Apply design guidelines**
   - Accessibility (WCAG AA compliance)
   - Responsive design (mobile-first)
   - Semantic HTML structure
   - Visual hierarchy and spacing
   - Performance patterns
   - Interactive states
   - SEO optimization

### Phase 3: Issue Identification

6. **Categorize findings by priority**
   - **Critical**: Accessibility violations, broken responsive layouts
   - **High**: Significant UX issues, performance problems
   - **Medium**: Design inconsistencies, best practice violations
   - **Low**: Optional enhancements, nice-to-haves

7. **Document each issue with**
   - Exact file path and line number
   - Clear problem description
   - User impact explanation
   - Specific, actionable fix
   - Code examples (before/after)

### Phase 4: Report Generation

8. **Produce a structured audit report**

Use this exact format:

````markdown
# OneSync Frontend Design Audit Report

**Date:** [Current Date]  
**Audited By:** [Agent Name/Version]  
**Scope:** src/app/, src/components/, src/lib/  
**Skill Used:** web-design-guidelines v[X.Y.Z]

---

## Executive Summary

| Metric | Count |
|--------|-------|
| Files Audited | X |
| Total Issues | Y |
| Critical | A |
| High | B |
| Medium | C |
| Low | D |

### Key Findings
- [Brief summary of most critical issues]
- [Overall assessment of codebase quality]
- [Top 3 recommended actions]

---

## Critical Accessibility Issues

### [Issue Title]
**Priority:** CRITICAL  
**File:** `path/to/file.tsx`  
**Line:** XX

**Problem:**  
Description of the issue.

**Why it matters:**  
Impact on users and compliance.

**Suggested fix:**
```tsx
// Code example
```

**Benefit:**  
What improves after the fix.

---

[Repeat for all CRITICAL issues]

---

## High Priority UX & Layout Issues

[Same format as above for HIGH issues]

---

## Medium Priority Design Issues

[Same format as above for MEDIUM issues]

---

## Low Priority Improvements

[Same format as above for LOW issues]

---

## Positive Findings

### What's Already Done Well
- ✅ [Positive aspect 1]
- ✅ [Positive aspect 2]
- ✅ [Positive aspect 3]

---

## Performance Metrics

### Current State
- Estimated FCP: [X]s
- Estimated LCP: [X]s
- Potential CLS issues: [Count]

### Recommended Targets
- FCP < 1.8s
- LCP < 2.5s
- CLS < 0.1

---

## Next Steps

### Immediate Actions (Do First)
1. Fix critical accessibility violations
2. Address broken responsive layouts
3. Resolve semantic HTML issues

### Short-term Improvements (This Sprint)
4. Implement missing interactive states
5. Optimize image loading
6. Improve mobile usability

### Long-term Enhancements (Backlog)
7. Design system refinement
8. Performance optimization
9. Advanced accessibility features

---

## Appendix

### Audit Methodology
- Skill: web-design-guidelines
- Manual review: Yes/No
- Automated tools: [List any tools used]

### References
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Next.js Performance Docs](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Tailwind Best Practices](https://tailwindcss.com/docs)

---

**End of Report**
````

### Phase 5: Prioritization

9. **Prioritize high-impact issues first**
   - Accessibility violations (legal/compliance risk)
   - Broken mobile layouts (user experience impact)
   - Performance bottlenecks (business metrics impact)
   - SEO issues (discoverability impact)

10. **Provide actionable recommendations**
    - Each fix should be specific and implementable
    - Include code examples where possible
    - Estimate effort (small/medium/large)
    - Group related issues for batch fixing

## Report Sections

The final report **must include** these sections:

1. ✅ **Executive Summary** - High-level overview
2. ✅ **Critical Accessibility Issues** - WCAG violations
3. ✅ **High Priority UX & Layout Issues** - Major problems
4. ✅ **Medium Priority Design Issues** - Best practices
5. ✅ **Low Priority Improvements** - Nice-to-haves
6. ✅ **Positive Findings** - What's done well
7. ✅ **Performance Metrics** - Load times, CLS, etc.
8. ✅ **Next Steps** - Prioritized action items

## Quality Standards

The audit report should be:
- **Comprehensive**: Cover all checklist items
- **Specific**: Exact file paths and line numbers
- **Actionable**: Clear fixes, not vague suggestions
- **Prioritized**: Critical issues first
- **Contextual**: Understand OneSync's goals
- **Constructive**: Balance criticism with praise
- **Professional**: Formatted, organized, complete

## Example Workflow

### Step-by-step execution:

```bash
# 1. Agent loads skill
Skill: web-design-guidelines

# 2. Agent reads audit instructions
File: agent/web-design-audit.md

# 3. Agent scans codebase
Files: src/app/**/*.tsx, src/components/**/*.tsx

# 4. Agent applies checklist
- Accessibility: ✅ Check
- Responsive: ✅ Check  
- Semantic HTML: ✅ Check
- Visual Hierarchy: ✅ Check
- Performance: ✅ Check
- Mobile: ✅ Check
- States: ✅ Check
- Colors: ✅ Check
- Typography: ✅ Check
- Next.js: ✅ Check

# 5. Agent generates report
Output: Structured markdown report

# 6. Agent prioritizes issues
Order: CRITICAL → HIGH → MEDIUM → LOW

# 7. Agent provides next steps
Actions: Prioritized fix list
```

## Integration Points

### With Development Workflow
- Run before creating PR
- Include in code review checklist
- Reference in commit messages

### With CI/CD
- Automate on PR creation
- Block merge on critical issues (optional)
- Post results as PR comment

### With Project Management
- Create tickets from issues
- Estimate effort for fixes
- Track design debt over time

## Success Criteria

An audit is complete when:
- ✅ All files in scope have been reviewed
- ✅ All checklist items have been evaluated
- ✅ Issues are categorized by priority
- ✅ Every issue has a suggested fix
- ✅ Report is formatted and actionable
- ✅ Next steps are clearly defined
- ✅ Positive findings are acknowledged

## Tips for Effective Audits

1. **Be thorough but efficient** - Don't spend hours on low-priority issues
2. **Provide context** - Explain why something matters
3. **Show examples** - Code snippets are more helpful than prose
4. **Balance criticism** - Acknowledge what's done well
5. **Think holistically** - Consider the overall user experience
6. **Stay current** - Use latest Next.js and React patterns
7. **Be pragmatic** - Not every issue needs immediate fixing

## Common Pitfalls to Avoid

❌ Vague recommendations ("improve accessibility")  
❌ No code examples  
❌ No priority levels  
❌ Ignoring positive aspects  
❌ Overly technical jargon  
❌ Rewriting entire files  
❌ Introducing new dependencies without discussion  

## Output Destination

Save the audit report as:
```
onesync/docs/audits/design-audit-YYYY-MM-DD.md
```

Or output directly for immediate review.

---

**Remember:** The goal is not to find every tiny issue, but to identify high-impact improvements that make OneSync more accessible, usable, and professional. Quality over quantity.

**This audit should take a senior frontend developer's mindset and apply it systematically to the entire codebase.**
