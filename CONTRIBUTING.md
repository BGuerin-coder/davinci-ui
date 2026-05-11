# Contributing to davinci-ui

Thank you for your interest in contributing! This guide explains our workflow, standards, and expectations for all contributors.

## Getting Started

### Local Development Setup

1. **Clone and install dependencies:**

```bash
git clone https://github.com/BGuerin-coder/davinci-ui.git
cd davinci-ui
pnpm install
```

2. **Run Storybook to see components:**

```bash
pnpm storybook
```

Visit `http://localhost:6006` to browse all components.

3. **Run tests:**

```bash
pnpm test              # Unit tests with coverage
pnpm test-storybook    # Storybook visual tests
```

4. **Lint code:**

```bash
pnpm lint
```

5. **Build package:**

```bash
pnpm build
```

## Project Architecture

### Structure

```
src/
├── components/          # All Vue components
│   ├── DvButton/
│   │   ├── DvButton.vue           # Component logic
│   │   ├── DvButton.test.ts       # Unit tests
│   │   ├── DvButton.stories.ts    # Storybook stories
│   │   ├── README.md              # Component documentation
│   │   └── stories/               # Additional story examples
│   ├── DvInput/
│   └── ...
├── css/                 # Component styles (CSS modules)
├── tokens/              # Design tokens and theme
└── utils/               # Shared utilities
```

### Technology Stack

- **Framework:** Vue 3 (Composition API)
- **Language:** TypeScript
- **Styling:** CSS (design tokens, no preprocessor)
- **Testing:** Vitest + Vue Test Utils + Playwright
- **Documentation:** Storybook v10
- **Accessibility:** WCAG AA compliant

### Key Conventions

- **Component Naming:** Always prefix with `Dv` (e.g., `DvButton`, `DvInput`)
- **File Naming:** Match component name exactly (e.g., `DvButton.vue`)
- **Exports:** Export from `src/index.ts` for public API
- **Styling:** Use design tokens in `src/tokens/` for colors, typography, spacing

## Creating a Component

### Step-by-Step Checklist

- [ ] Create component folder: `src/components/DvComponentName/`
- [ ] Create `DvComponentName.vue` with proper TypeScript and JSDoc
- [ ] Create `DvComponentName.test.ts` with unit tests
- [ ] Create `DvComponentName.stories.ts` with multiple stories (default + variants)
- [ ] Create `README.md` with usage, props, accessibility notes
- [ ] Export component from `src/index.ts`
- [ ] Test in Storybook: `pnpm storybook`
- [ ] Verify tests pass: `pnpm test`
- [ ] Verify lint passes: `pnpm lint`

### Component Template

**DvComponentName.vue:**

```html
<template>
  <div class="dv-component-name" :class="componentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import "../../css/component-name.css";

  /**
   * Component description and purpose.
   * @example
   * <DvComponentName prop="value">Slot content</DvComponentName>
   */
  interface ComponentProps {
    prop?: string;
  }

  withDefaults(defineProps<ComponentProps>(), {
    prop: "default-value",
  });

  const componentClasses = computed(() => ({
    // Dynamic classes
  }));
</script>
```

**DvComponentName.test.ts:**

```typescript
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DvComponentName from "./DvComponentName.vue";

describe("DvComponentName", () => {
  it("renders with default prop", () => {
    const wrapper = mount(DvComponentName);
    expect(wrapper.text()).toContain("expected text");
  });

  it("applies prop correctly", () => {
    const wrapper = mount(DvComponentName, {
      props: { prop: "custom" },
    });
    expect(wrapper.classes()).toContain("expected-class");
  });
});
```

## Testing Requirements

### Unit Tests (Mandatory)

Every component must have unit tests covering:

- Default rendering
- All props variations
- Event emissions
- Error states
- Accessibility attributes

Run with: `pnpm test`

### Storybook Stories (Mandatory)

Every component must have Storybook stories for:

- **Default**: Basic usage
- **Variants**: All meaningful prop combinations (size, variant, disabled, etc.)
- **States**: Loading, error, empty states
- **Accessibility**: A11y addon verification

Story requirements:

- Clear documentation in story descriptions
- Interactive controls (`argTypes`) for all props
- Proper `tags: ["autodocs"]` for auto-documentation

Run with: `pnpm storybook`

## Code Standards

### Vue 3 & TypeScript

- Use **Composition API** with `<script setup>`
- Define all props with TypeScript interfaces
- Add JSDoc comments above component setup
- Use TypeScript strict mode
- Avoid `any` types

### Accessibility (WCAG AA)

**Mandatory for all components:**

- Semantic HTML elements
- Proper ARIA attributes (`aria-label`, `aria-describedby`, `role`, etc.)
- Keyboard navigation support
- Color contrast ratio ≥ 4.5:1 for normal text
- Focus indicators visible
- Alt text for images/icons

**Test with:**

- Screen reader testing (NVDA, VoiceOver)
- Keyboard-only navigation
- Storybook A11y addon (`pnpm storybook`)

### Performance

- Minimize re-renders with proper computed/memoization
- Avoid unnecessary watchers
- Code-split when needed
- Monitor bundle size impact

### Style Guidelines

- Use design tokens from `src/tokens/`
- CSS classes follow pattern: `.dv-component-name--modifier`
- No inline styles (use CSS files)
- Mobile-first responsive design

## Git Workflow

### Branch Naming

Use GitHub issue number in branch name:

```bash
git checkout -b 123-feature-description
git checkout -b 123-fix-button-accessibility
git checkout -b 123-update-documentation
```

### Commit Messages

Follow **Conventional Commits** format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat:` New feature (e.g., `feat: add DvButton component`)
- `fix:` Bug fix (e.g., `fix: button click handler`)
- `chore:` Maintenance, dependencies (e.g., `chore: update dependencies`)
- `docs:` Documentation only (e.g., `docs: update README`)
- `test:` Tests only (e.g., `test: improve button coverage`)
- `style:` Code style, formatting (e.g., `style: lint fixes`)

**Examples:**

```
feat(button): add disabled prop with aria attributes
fix(input): prevent duplicate event emissions
chore: update storybook to v10.3.1
docs(contributing): clarify testing requirements
```

### Pull Requests

**Title Format:** Use issue number

```
[#123] Add DvButton component
[#456] Fix input focus management
```

**Description Template:**

```markdown
## Description

Brief explanation of what this PR does.

## Related Issue

Closes #123

## Testing

- [ ] Unit tests pass (`pnpm test`)
- [ ] Storybook stories created and verified
- [ ] Accessibility checked (keyboard nav, screen reader, contrast)
- [ ] Linting passes (`pnpm lint`)
- [ ] Manual testing completed

## Changes

- Change 1
- Change 2

## Screenshots (if applicable)
```

**Requirements before merging:**

- ✅ All tests pass (CI must pass)
- ✅ 1 approval from project maintainer
- ✅ No merge conflicts
- ✅ Branch up-to-date with main

## Code Review Process

### What We Review

**Strict focus on:**

1. **Accessibility** - WCAG AA compliance, ARIA, keyboard support
2. **Performance** - No unnecessary re-renders, proper optimization
3. **Code Quality** - TypeScript types, patterns, maintainability
4. **Testing** - Coverage, meaningful tests, Storybook stories
5. **Standards** - Naming, structure, conventions alignment

### Review Checklist

- [ ] Accessibility requirements met (WCAG AA)
- [ ] All tests pass and have good coverage
- [ ] Storybook stories are complete (default + variants)
- [ ] TypeScript types are proper (no `any`)
- [ ] Component follows naming conventions (Dv prefix)
- [ ] Documentation is clear (JSDoc + README)
- [ ] Code is performant (no unnecessary re-renders)
- [ ] No lint errors
- [ ] Design tokens used correctly

### Merge Authority

Only **project maintainer** (Benjamin Guerin) can merge PRs after:

1. ✅ Passing CI pipeline
2. ✅ Maintainer approval
3. ✅ All requirements met

## Common Development Tasks

### Add a New Component

```bash
# Create from issue #123
git checkout -b 123-add-component-name

# Follow component template above, then:
pnpm storybook              # Verify in Storybook
pnpm test                   # Run tests
pnpm lint                   # Check lint
git commit -m "feat: add DvComponentName component"
git push origin 123-add-component-name

# Create PR on GitHub with [#123] in title
```

### Update Existing Component

```bash
git checkout -b 456-fix-component-issue

# Edit component, tests, stories, README
pnpm test
pnpm lint

git commit -m "fix(component-name): improve accessibility"
git push origin 456-fix-component-issue
```

### Run Tests Locally

```bash
pnpm test                   # All unit tests
pnpm test --watch           # Watch mode
pnpm test --coverage        # Coverage report
pnpm test-storybook         # Visual regression tests
```

## Alignment with Senior Frontend Lead Guidelines

This project follows a **learning-oriented, question-driven approach**:

- **Code reviews ask questions** rather than impose solutions
- **Patterns are explained**, not just copied
- **Accessibility is non-negotiable** (WCAG AA minimum)
- **Code ownership** through understanding trade-offs
- **Mentoring** through thoughtful feedback

Maintain this philosophy in PRs and reviews.

## Resources

- **Vue 3 Docs:** https://vuejs.org/
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Storybook Vue Guide:** https://storybook.js.org/docs/vue/get-started/introduction
- **Design Tokens:** See `src/tokens/DesignTokens.stories.ts`

## Questions?

- Check existing PRs and issues for similar work
- Review Storybook for component examples
- Ask questions in PR comments (we encourage clarifying questions!)
- Refer to `.github/copilot-instructions.md` for code philosophy

Thank you for contributing to davinci-ui! 🎨
