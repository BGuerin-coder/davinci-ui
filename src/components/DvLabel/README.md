# DvLabel Component

Label component for form inputs and descriptive text with semantic HTML support and optional uppercase styling.

## Usage

```vue
<template>
  <DvLabel for="email">Email Address</DvLabel>
  <input id="email" type="email" />

  <DvLabel uppercase>Important</DvLabel>

  <DvLabel as="span">Just descriptive text</DvLabel>
</template>

<script setup lang="ts">
import { DvLabel } from '@bguerin/davinci-ui'
</script>
```

## Props

| Prop  | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| `as` | `'label' \| 'span' \| 'div'` | `'label'` | The HTML element to render. Use `label` for form labels, `span` for inline text, `div` for block text. |
| `uppercase` | `boolean` | `false` | Renders text in uppercase for emphasis or UI conventions. |

## Attributes

When `as="label"`, use the native `for` attribute to associate with an input:

```vue
<DvLabel for="password">Password</DvLabel>
<input id="password" type="password" />
```

## Slots

**Default**: Accepts label text and inline elements.

```vue
<DvLabel for="terms">
  I agree to the <a href="/terms">terms and conditions</a>
</DvLabel>
```

## Events

None. DvLabel is a presentational component.

## Accessibility

✅ **WCAG AA Compliant**
- Semantic `<label>` element when `as="label"` for form field association
- Proper text styling for readability
- Works with screen readers for form navigation

**Best Practices:**
- Always use `as="label"` with `for` attribute for form inputs
- Use `span` or `div` for non-form text
- Provide clear, descriptive labels for all form fields

## Design Considerations

### Form Labels

Use semantic label for form association:
```vue
<DvLabel for="username">Username</DvLabel>
<input id="username" type="text" />
```

This ensures clicking the label focuses the input and helps screen readers announce the label.

### Uppercase Styling

Use for emphasis or UI conventions:
```vue
<DvLabel uppercase>Required</DvLabel>
<DvLabel uppercase>New</DvLabel>
```

### Non-Form Labels

For descriptive text that's not a form label:
```vue
<DvLabel as="span">Posted by: John Doe</DvLabel>
<DvLabel as="div">Last updated: 2 hours ago</DvLabel>
```

## Best Practices

✅ **Do:**
- Use `as="label"` with `for` attribute for form inputs
- Provide descriptive, concise labels
- Use `uppercase` sparingly for emphasis
- Group labels with their inputs logically

❌ **Don't:**
- Forget `for` attribute on form labels
- Use label for styling when other components fit better
- Make labels too long or unclear
- Use `as="label"` without a corresponding input

## Related Components

- [DvInput](../DvInput/README.md) - For form input fields
- [DvCaption](../DvCaption/README.md) - For smaller supporting text
- [DvBody](../DvBody/README.md) - For regular text content

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Typography → DvLabel**.
