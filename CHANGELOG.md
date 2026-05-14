# Changelog

## [0.1.3] - 2026-05-14

### Fixed
- Fixed missing import for style.css in index.ts

### Changed
- Renamed interface types for consistency across components
- Removed GitHub Packages publishing steps from workflow

## [0.1.2] - 2026-05-12

### Fixed
- Fixed CSS export path in package.json (style.css → davinci-ui.css)
- Fixed component exports to use named exports (DvButton, DvBody, etc.)

### Added
- GitHub Packages publishing in release workflow

## [0.1.1] - 2026-05-12

### Fixed
- Fixed pnpm build script error in CI workflows (pinned to v10)
- Fixed type definition naming (index.d.ts → davinci-ui.d.ts)

### Added
- Complete component documentation for all 7 components
- Installation and usage guide for library consumers
- CONTRIBUTING.md with comprehensive development guidelines

### Changed
- Standardized component README format and structure

## [0.1.0] - 2026-05-03

- Initial release
- 6 components: Button, Input, Tag, Label, Caption, Body
- TypeScript support
- Accessibility (WCAG AA)
