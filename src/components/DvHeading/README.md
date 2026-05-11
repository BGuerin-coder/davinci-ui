# DvHeading Component

Semantic heading component for creating document structure with support for all heading levels (h1-h6) and optional text truncation.

## Usage

```vue
<template>
  <DvHeading level="h1">Main Page Title</DvHeading>
  <DvHeading level="h2">Section Title</DvHeading>
  <DvHeading level="h3" truncate>Long Title That Gets Truncated With Ellipsis</DvHeading>
</template>

<script setup lang="ts">
import { DvHeading } from '@bguerin/davinci-ui'
</script>
```

## Props

| Prop  | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'` | The heading level to render. Use semantic levels that match your document structure. |
| `truncate` | `boolean` | `false` | Truncates text with ellipsis when overflow occurs. Useful for titles with max-width containers. |

## Slots

**Default**: Accepts heading text and inline elements.

```vue
<DvHeading level="h2">
  Section Title <span class="subtitle">(with emphasis)</span>
</DvHeading>
```

## Accessibility

✅ **WCAG AA Compliant**
- Semantic HTML heading elements for screen readers
- Proper heading hierarchy support
- Auto-calculated tooltip on truncated headings

**Best Practice:** Maintain proper heading hierarchy (h1 → h2 → h3, etc.) for document structure and accessibility.

```vue
<!-- ✅ Good: Proper hierarchy -->
<DvHeading level="h1">Main Title</DvHeading>
<DvHeading level="h2">Section</DvHeading>
<DvHeading level="h3">Subsection</DvHeading>

<!-- ❌ Bad: Skipped levels -->
<DvHeading level="h1">Main Title</DvHeading>
<DvHeading level="h3">Skipped h2!</DvHeading>
```

## Design Considerations

### Heading Hierarchy

Always use semantic heading levels:
- **h1**: Page or section title (usually one per page)
- **h2**: Major sections
- **h3**: Subsections
- **h4+**: Nested content

### Truncation

Use `truncate` for constrained layouts:
```vue
<div style="max-width: 300px">
  <DvHeading level="h2" truncate>Very Long Title That Will Be Cut Off</DvHeading>
</div>
```

When truncated, the full text is available in the title attribute for browser tooltips.

## Best Practices

✅ **Do:**
- Use proper heading hierarchy
- Use only one `h1` per page
- Match heading structure to content sections
- Use `truncate` when needed for responsive layouts

❌ **Don't:**
- Skip heading levels (h1 → h4)
- Use headings for styling (use other components instead)
- Use `truncate` without setting max-width on parent
- Use multiple h1 on same page

## Related Components

- [DvBody](../DvBody/README.md) - For body copy after headings
- [DvCaption](../DvCaption/README.md) - For subheadings or metadata
- [DvLabel](../DvLabel/README.md) - For labels and form text

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Typography → DvHeading**.
