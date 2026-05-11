# DvBody Component

Typography component for rendering body copy, paragraphs, and long-form text with consistent, readable styling.

## Quick Start

```html
<template>
  <DvBody>Standard paragraph text</DvBody>
  <DvBody lead>Lead paragraph with emphasis</DvBody>
  <DvBody as="div">Rendered as a div element</DvBody>
</template>

<script setup lang="ts">
import { DvBody } from '@bguerin/davinci-ui'
</script>
```



## Props

| Prop  | Type                  | Default | Description |
| ----- | --------------------- | ------- | ----------- |
| `as`  | `'p' \| 'div' \| 'span'` | `'p'`   | The HTML element to render. Choose based on semantic meaning. |
| `lead` | `boolean`             | `false` | Larger font size and line height for opening paragraphs or prominent text. |

## Slots

**Default**: Accepts any content to be rendered within the component.

## Accessibility

✅ **WCAG AA Compliant**
- Semantic HTML with `as` prop for proper element selection
- Optimal color contrast and readability
- Proper font sizing and line height
- Maximum width (65ch) prevents eye strain

**Best Practice:** Pair with `DvHeading` to maintain proper document structure.

## Design Considerations

### Semantic HTML

Choose the `as` prop based on meaning:
- `as="p"` → For actual paragraphs in flowing text
- `as="div"` → For layout blocks without semantic meaning
- `as="span"` → For inline text (use sparingly)

### Lead Variant

Use `lead` sparingly for opening paragraphs, creating visual hierarchy, or emphasizing important introductory content.

### Customization

Override typography via CSS variables:

```css
.custom-body {
  --davinci-body-font-size: 1rem;
  --davinci-body-line-height: 1.6;
  --davinci-body-max-width: 70ch;
}
```

## Best Practices

- ✅ Use for all body copy and paragraphs
- ✅ Pair with `DvHeading` for document structure
- ✅ Use `lead` sparingly
- ✅ Choose appropriate `as` prop

- ❌ Don't use `lead` on every paragraph
- ❌ Don't ignore heading hierarchy
- ❌ Don't force `as="span"` for semantic content

## Related Components

- [DvHeading](../DvHeading/README.md) - Section titles
- [DvCaption](../DvCaption/README.md) - Supporting text
- [DvLabel](../DvLabel/README.md) - Form labels

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Typography → DvBody**.
