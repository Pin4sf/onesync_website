# OneSync Agent Skills

This directory contains Vercel Agent Skills configuration for automated design and frontend quality auditing.

## What is This?

Think of this as a **design QA bot** for OneSync. It's a review layer that:
- ✅ Runs locally or in CI
- ✅ Loads Vercel agent skills
- ✅ Audits frontend code against web design rules
- ✅ Gives structured feedback before merge or deploy

**Important:** This does NOT modify OneSync runtime logic. It's purely a review tool.

## Directory Structure

```
agent/
├─ README.md                 # This file
├─ skills.config.md         # Skills configuration and documentation
├─ web-design-audit.md      # Audit instructions for agents
└─ run-design-audit.md      # Step-by-step audit playbook
```

## Quick Start

### Install Skills CLI (One Time)

```bash
npm install -D @vercel/skills
```

Verify:
```bash
npx skills --help
```

### Add Web Design Guidelines Skill

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
```

### Run a Manual Audit

When working with an AI agent that supports skills:

1. Reference the skill: "Use the web-design-guidelines skill"
2. Point to instructions: "Follow agent/web-design-audit.md"
3. Request audit: "Audit OneSync frontend code"
4. Get report: "Produce a structured report"

## What Gets Audited?

- **Accessibility**: ARIA labels, contrast ratios, keyboard navigation
- **Responsive Design**: Mobile usability, breakpoints, flexible layouts
- **Semantic HTML**: Proper element usage, heading hierarchy
- **Visual Hierarchy**: Spacing, typography, color usage
- **Performance**: Layout shifts, image optimization, render-blocking patterns
- **UX Patterns**: Interactive states, error handling, loading states

## Mental Model

```
Code = what your app does
Agent skills = how your app should feel
```

You've separated concerns like a pro. This is how high-end teams scale quality.

## Integration Options

### Manual (Current)
Run audits on-demand via AI agent interactions

### CI/CD (Future)
- Automated PR comments with design feedback
- Pre-merge design quality gates
- Deployment checks

### Example GitHub Action
```yaml
name: Design Audit
on: pull_request

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npx skills audit --skill web-design-guidelines
      # Attach report to PR comments
```

## Why This Matters for OneSync

You're effectively building:
- ✨ Design linting without hard rules
- 👁️ UX review without designers  
- 📏 Consistency across contributors
- 🧠 A senior frontend reviewer mindset

This is exactly how high-end teams scale quality at MIT level.

## Next Steps

- [ ] Install @vercel/skills CLI
- [ ] Add web-design-guidelines skill
- [ ] Run first manual audit
- [ ] Review and fix critical issues
- [ ] Set up PR template with audit checklist
- [ ] Consider custom OneSync-specific skills
- [ ] Integrate into CI/CD pipeline

## Resources

- [Vercel Agent Skills](https://vercel.com/blog/introducing-vercel-ai-sdk-agent-skills)
- [Web Design Guidelines Skill](https://github.com/vercel-labs/agent-skills)
- OneSync Docs: `../docs/`

---

**Remember:** This is a design + review layer, not a code modification tool. It helps you make better decisions before shipping.
