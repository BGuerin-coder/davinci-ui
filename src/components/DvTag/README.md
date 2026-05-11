# DvTag Component

Compact tag/badge component for displaying labels, categories, and status indicators with optional icons and dismiss functionality.

## Usage

```vue
<template>
  <DvTag>Default Tag</DvTag>
  <DvTag variant="success">Approved</DvTag>
  <DvTag variant="danger">Urgent</DvTag>
  <DvTag icon="star">Featured</DvTag>
  <DvTag dismissible @dismiss="removeTag">Removable</DvTag>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DvTag } from '@bguerin/davinci-ui'

const removeTag = () => console.log('Tag removed')
</script>
```

## Props

| Prop  | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| `variant` | `'brand' \| 'success' \| 'danger' \| 'warning' \| 'neutral'` | `'neutral'` | Visual style indicating semantic meaning: brand (primary), success (positive), danger (destructive), warning (caution), neutral (default). |
| `size` | `'small' \| 'medium'` | `'medium'` | Tag size. |
| `appearance` | `'filled' \| 'outline'` | `'filled'` | Visual fill: filled (solid background) or outline (border only). |
| `dismissible` | `boolean` | `false` | Enables dismiss button for removing the tag. |
| `icon` | `string` | `''` | Feather icon name displayed before the label. |

## Slots

**Default**: Accepts tag label text.

```vue
<DvTag icon="check">
  <strong>Task Complete</strong>
</DvTag>
```

## Events

- `@dismiss` - Emitted when dismiss button is clicked. Use to remove the tag from your list.

```vue
<DvTag 
  v-if="showTag"
  dismissible
  @dismiss="showTag = false"
>
  Remove Me
</DvTag>
```

## Accessibility

✅ **WCAG AA Compliant**
- Semantic HTML structure
- Proper color contrast for all variants
- Dismiss button with accessible label
- Readable text sizing

**Best Practices:**
- Use variants to convey meaning (don't rely on color alone)
- Provide context for what the tag represents
- Make dismiss function clear to users

## Design Considerations

### Variants

Choose variant based on semantic meaning:
- **brand**: Branded or featured items
- **success**: Positive, approved, completed status
- **danger**: Destructive, error, or urgent status
- **warning**: Caution, attention-needed status
- **neutral**: Default, non-semantic tags

### Appearance

Combine with variant for emphasis:
```vue
<!-- Subtle outline tag -->
<DvTag appearance="outline">Label</DvTag>

<!-- Bold filled tag -->
<DvTag appearance="filled" variant="danger">Alert</DvTag>
```

### Icons

Use Feather icon names:
```vue
<DvTag icon="check" variant="success">Approved</DvTag>
<DvTag icon="alert-circle" variant="warning">Warning</DvTag>
<DvTag icon="x-circle" variant="danger">Rejected</DvTag>
```

### Dismissible Tags

Use for removable filters or selections:
```vue
<div class="tags">
  <DvTag 
    v-for="tag in activeTags"
    :key="tag"
    dismissible
    @dismiss="removeTa(tag)"
  >
    {{ tag }}
  </DvTag>
</div>
```

## Best Practices

✅ **Do:**
- Use variants to convey meaning
- Use icons for quick visual recognition
- Provide dismiss for temporary/removable tags
- Keep labels concise
- Use small size for dense layouts

❌ **Don't:**
- Rely on color alone (use variants instead)
- Make labels too long
- Overuse tags in UI
- Use dismissible without removal logic
- Mix too many variants on same screen

## Related Components

- [DvButton](../DvButton/README.md) - For interactive actions
- [DvCaption](../DvCaption/README.md) - For small supporting text
- [DvLabel](../DvLabel/README.md) - For form labels

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Components → DvTag**.
