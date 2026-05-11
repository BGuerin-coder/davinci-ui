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

## Getting Started

```bash
pnpm install
pnpm dev          # Dev mode
pnpm storybook    # Launch Storybook
pnpm build        # Build library
```

## Stack

| Tool              | Role          |
| ----------------- | ------------- |
| Vue 3             | UI Framework  |
| TypeScript        | Type safety   |
| Vite              | Bundler       |
| Storybook         | Documentation |
| Vitest            | Unit testing  |
| ESLint + Prettier | Code quality  |

## Contributing

Want to help build davinci-ui? See our [**Contributing Guide**](./CONTRIBUTING.md) for:
- Development setup
- Component creation guidelines
- Testing & accessibility requirements
- Git workflow and PR process

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

> _"Learning never exhausts the mind." — Leonardo da Vinci_
