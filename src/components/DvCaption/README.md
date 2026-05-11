# DvCaption Component

Compact typography component for supporting text, metadata, timestamps, and secondary information with semantic HTML support.

## Usage

```html
<template>
  <DvCaption>Last updated 2 hours ago</DvCaption>
  <DvCaption as="time" datetime="2026-05-11T14:30:00Z">May 11, 2026</DvCaption>
  <DvCaption>Posted by Sarah • 5 min read</DvCaption>
</template>

<script setup lang="ts">
import { DvCaption } from '@bguerin/davinci-ui'
</script>
```

## Props

| Prop  | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| `as` | `'span' \| 'p' \| 'time'` | `'span'` | The HTML element to render. Use `time` for timestamps with datetime attribute, `span` for inline text, `p` for block text. |

## Attributes

When `as="time"`, use the native `datetime` attribute for machine-readable timestamps:

```html
<DvCaption as="time" datetime="2026-05-11T14:30:00Z">May 11, 2026 at 2:30 PM</DvCaption>
```

## Slots

**Default**: Accepts caption text and inline elements.

```html
<DvCaption>
  Posted by <strong>John Doe</strong> • <time datetime="2026-05-11T14:00:00Z">2 hours ago</time>
</DvCaption>
```

## Accessibility

✅ **WCAG AA Compliant**
- Semantic `<time>` element for machine-readable timestamps
- Proper color contrast and readability
- Smaller font size suitable for supporting information

**Best Practices:**
- Use `as="time"` with `datetime` attribute for all timestamps
- Ensure sufficient color contrast (not pure decorative)
- Use only for supporting information, not primary content

## Design Considerations

### Timestamps

Use `as="time"` with `datetime` for search engines and screen readers:
```html
<!-- ✅ Good: Machine-readable and human-readable -->
<DvCaption as="time" datetime="2026-05-11T14:30:00Z">May 11, 2026</DvCaption>

<!-- ❌ Bad: Only human-readable -->
<DvCaption>May 11, 2026</DvCaption>
```

### Metadata and Hints

For form hints, error messages, or supporting text:
```html
<DvCaption>Maximum 50 characters</DvCaption>
<DvCaption role="alert">Email format invalid</DvCaption>
<DvCaption>Posted by Sarah • 5 min read</DvCaption>
```

### Block vs. Inline

Choose appropriate element for layout:
```html
<!-- Inline: metadata on same line -->
<DvCaption>By John Doe • 5 min read</DvCaption>

<!-- Block: separate line -->
<DvCaption as="p">This is a longer description or note.</DvCaption>
```

## Best Practices

✅ **Do:**
- Use `as="time"` with `datetime` for timestamps
- Use for supporting, secondary information
- Keep captions concise and scannable
- Maintain proper color contrast

❌ **Don't:**
- Use for primary content (use DvBody instead)
- Forget `datetime` attribute on time elements
- Make captions too long or dense
- Use as pure decoration

## Related Components

- [DvBody](../DvBody/README.md) - For main body text
- [DvLabel](../DvLabel/README.md) - For form labels
- [DvInput](../DvInput/README.md) - For form fields with captions

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Typography → DvCaption**.
