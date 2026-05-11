# DvButton Component

Interactive button component for user actions with multiple variants, sizes, icons, and loading states. Essential for calls-to-action throughout your application.

## Usage

```html
<template>
  <DvButton>Click me</DvButton>
  <DvButton variant="secondary">Secondary</DvButton>
  <DvButton variant="danger" @click="handleDelete">Delete</DvButton>
  <DvButton icon="trash-2" label="Delete" />
  <DvButton loading label="Saving..." />
</template>

<script setup lang="ts">
import { DvButton } from '@bguerin/davinci-ui'

const handleDelete = () => console.log('deleted')
</script>
```

## Props

| Prop  | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| `label` | `string` | `'Button'` | Button text content. |
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | Visual style: primary for main actions, secondary for alternatives, danger for destructive actions, ghost for subtle actions. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size. |
| `disabled` | `boolean` | `false` | Disables the button and prevents interaction. |
| `loading` | `boolean` | `false` | Shows loading spinner and disables interaction while awaiting action. |
| `icon` | `string` | `''` | Feather icon name (e.g., 'trash-2', 'check', 'arrow-right'). |
| `iconPosition` | `'start' \| 'end'` | `'start'` | Position of icon relative to text. Ignored when `iconOnly` is true. |
| `iconOnly` | `boolean` | `false` | Displays only the icon, hiding the label. Useful for compact buttons. |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type for form integration. |

## Slots

None. Use the `label` prop to set button text.

## Events

Standard button events are supported:
- `@click` - Emitted when button is clicked

## Accessibility

✅ **WCAG AA Compliant**
- Proper `disabled` and `aria-disabled` attributes
- Loading state indicated via `aria-busy`
- Icon-only buttons have `aria-label` for screen readers
- Full keyboard navigation support

**Best Practices:**
- Use descriptive labels or aria-labels
- Disable instead of hiding for better UX
- Use `variant="danger"` for destructive actions
- Provide loading feedback with the `loading` prop

## Design Considerations

### Variants

- **primary**: Main actions (e.g., submit, save)
- **secondary**: Alternative actions (e.g., cancel, skip)
- **danger**: Destructive actions (e.g., delete, remove)
- **ghost**: Subtle, low-emphasis actions

### Icons

Use Feather icon names (see [Feather Icons](https://feathericons.com/)):
```html
<DvButton icon="trash-2" label="Delete" />
<DvButton icon="check-circle" label="Confirm" />
<DvButton icon="arrow-right" iconPosition="end" label="Next" />
```

### Loading State

Use the `loading` prop for async operations:
```html
<DvButton :loading="isSaving" @click="saveForm">
  {{ isSaving ? '' : 'Save' }}
</DvButton>
```

### Icon-Only Buttons

For compact UI, use `iconOnly`:
```html
<DvButton icon="menu" iconOnly aria-label="Open menu" />
<DvButton icon="x" iconOnly aria-label="Close" />
```

## Best Practices

✅ **Do:**
- Use `loading` prop for async operations
- Provide clear, action-oriented labels
- Use appropriate `variant` for action type
- Add proper `aria-label` for icon-only buttons
- Disable buttons instead of hiding them

❌ **Don't:**
- Use multiple primary buttons on same screen
- Forget to disable during loading/processing
- Leave icon-only buttons without aria-label
- Use danger variant for non-destructive actions

## Related Components

- [DvLabel](../DvLabel/README.md) - For form labels
- [DvInput](../DvInput/README.md) - For form inputs
- [DvCaption](../DvCaption/README.md) - For button help text

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Components → DvButton**.
