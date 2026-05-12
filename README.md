![Lint](https://github.com/bguerin-coder/davinci-ui/workflows/Lint/badge.svg) • ![Build](https://github.com/bguerin-coder/davinci-ui/workflows/Build/badge.svg) • ![Test](https://github.com/bguerin-coder/davinci-ui/workflows/Test/badge.svg)

# 🎨 davinci-ui

> _Where art meets engineering._

A modern, accessible and lightweight Vue3 component library • built with TypeScript,
Vite and Storybook. Inspired by Leonardo da Vinci's vision of merging art and precision.

## Features

- **Vue3** + **TypeScript** + **Vite**
- **Design tokens** • colors, spacing, typography
- **Accessible** • WCAG AA compliant (aria, keyboard nav, focus trap)
- **Storybook** • fully documented components
- **Dark / Light mode** • CSS custom properties based theming
- **Tree-shakable** • import only what you need

## Installation

### Package Manager

Choose your preferred package manager:

**npm**
```bash
npm install @bguerin/davinci-ui
```

**pnpm** (recommended)
```bash
pnpm add @bguerin/davinci-ui
```

**yarn**
```bash
yarn add @bguerin/davinci-ui
```

### Browser Compatibility

- **Chrome/Edge:** Latest 2 versions
- **Firefox:** Latest 2 versions
- **Safari:** Latest 2 versions
- **IE 11:** Not supported (uses ES6+ features)

## Quick Start

### 1. Import CSS

Add to your main application file (`main.ts` or `main.js`):

```typescript
import '@bguerin/davinci-ui/style.css'
```

### 2. Use Your First Component

```html
<template>
  <DvButton @click="handleClick">Click me</DvButton>
</template>

<script setup lang="ts">
import { DvButton } from '@bguerin/davinci-ui'

const handleClick = () => console.log('Button clicked!')
</script>
```

That's it! 🎉 Your first davinci-ui component is ready.

## Usage Examples

### Tree-Shaking (Optimal)

Import only what you need:
```typescript
// ✅ Good: Only DvButton is bundled
import { DvButton } from '@bguerin/davinci-ui'

// ❌ Avoid: Entire library bundled
import * as dvinciUI from '@bguerin/davinci-ui'
```

### TypeScript Support

Full TypeScript support with proper types:

```typescript
import { DvButton } from '@bguerin/davinci-ui'
import type { ButtonProps } from '@bguerin/davinci-ui'

const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
}
```

### Styling & Theming

Customize colors using CSS variables:

```css
:root {
  /* Override design tokens */
  --davinci-color-primary: #0066ff;
  --davinci-color-neutral-bg: #ffffff;
  --davinci-text-size-md: 16px;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --davinci-color-primary: #4d94ff;
    --davinci-color-neutral-bg: #1a1a1a;
  }
}
```

See [Design Tokens](./src/tokens/DesignTokens.stories.ts) for all available tokens.

### Module Formats

davinci-ui supports both ESM and CommonJS:

- **ESM** (recommended): `import { DvButton } from '@bguerin/davinci-ui'`
- **CommonJS**: `const { DvButton } = require('@bguerin/davinci-ui')`

## Component Documentation

### Browse Components

View all components interactively in **Storybook**:

1. Install the package (see above)
2. Check the [Live Storybook](https://69c6864864539d1dc86b1d6a-omfjogjcrb.chromatic.com/) for examples and variants
3. See [Component READMEs](./src/components/) for detailed usage

### Accessible by Default

All components are **WCAG AA compliant** and include:
- Semantic HTML
- Keyboard navigation
- Screen reader support
- Proper ARIA attributes

## FAQ

**Q: Does davinci-ui work with Vue 2?**
A: No, davinci-ui requires Vue 3. For Vue 2, consider other component libraries.

**Q: Can I customize component styles?**
A: Yes! davinci-ui uses CSS custom properties (design tokens) for theming. Override them in your CSS.

**Q: Are components fully accessible?**
A: Yes, all components meet WCAG AA standards and are tested with screen readers and keyboard navigation.

**Q: Can I use davinci-ui in a Next.js/Nuxt project?**
A: davinci-ui is a Vue 3 library. Nuxt 3 has full support. For Next.js, you'd need a wrapper or different library.

**Q: Is TypeScript required?**
A: No, but highly recommended for better IDE support and type safety.

## Getting Started (Local Development)

For contributors and developers setting up the project locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Launch Storybook for component development
pnpm storybook

# Build for production
pnpm build

# Run tests
pnpm test

# Run lint
pnpm lint
```

See [**CONTRIBUTING.md**](./CONTRIBUTING.md) for detailed development guidelines.

## Stack

| Tool              | Role          |
| ----------------- | ------------- |
| Vue 3             | UI Framework  |
| TypeScript        | Type safety   |
| Vite              | Bundler       |
| Storybook         | Documentation |
| Vitest            | Unit testing  |
| ESLint + Prettier | Code quality  |

## Project Structure

```bash
src/
├── components/     # UI Components
├── tokens/         # Design tokens (colors, spacing, typo)
├── composables/    # useToast, useTheme...
└── index.ts        # Public exports
```

## Todo

### ✅ Setup

- [x] Init Vite + Vue3 + TypeScript
- [x] Configure pnpm
- [x] Init Storybook
- [x] ESLint + Prettier
- [x] Vitest setup
- [x] Chromatic deployment (Storybook hosting)

### ✅ Design Tokens

- [x] Color palette (primary, neutral, semantic)
- [x] Spacing scale
- [x] Typography scale
- [x] CSS custom properties generation
- [x] Dark / Light theme switch

### ✅ Components • Tier 1

- [x] Button • variants, sizes, loading, disabled
- [x] Badge / Tag • variants, slots
- [x] Input / TextField • label, error, helper, a11y
- [x] Typography • heading, body, caption components

### ✅ Release

- [x] Deploy Storybook on Chromatic
- [x] GitHub Actions CI (lint + test + build)
- [x] Publish on npm

### Documentation

- [ ] ➡️ Storybook stories for each component
- [ ] README per component
- [ ] Contribution guide
- [ ] Changelog

### Components • Tier 2

- [ ] Modal / Dialog • focus trap, Escape, aria-modal
- [ ] Toast • queue, auto-dismiss, useToast() composable
- [ ] Dropdown / Select • keyboard nav, custom styling
- [ ] Card • header, body, footer, image slots, skeleton

### Components • Tier 3

- [ ] Tabs • keyboard nav, router-link support
- [ ] DataTable • sort, pagination, configurable columns

## Author

Benjamin Guerin • Tech Lead Frontend & UI/UX • [spateline.fr](https://spateline.fr) • [GitHub](https://github.com/BGuerin-coder)

## Contributing

Want to help build davinci-ui? See our [**Contributing Guide**](./CONTRIBUTING.md) for:
- Development setup
- Component creation guidelines
- Testing & accessibility requirements
- Git workflow and PR process

> _"Learning never exhausts the mind." — Leonardo da Vinci_
