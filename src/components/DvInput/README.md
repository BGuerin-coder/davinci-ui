# DvInput Component

Form input component with built-in label, icons, validation, error and hint messages. Accessible and feature-rich for standard form interactions.

## Usage

```html
<template>
  <DvInput 
    v-model="email" 
    label="Email" 
    type="email"
    placeholder="Enter your email"
  />

  <DvInput 
    v-model="password" 
    label="Password" 
    type="password"
    icon="lock"
  />

  <DvInput 
    v-model="search" 
    label="Search"
    icon="search"
    iconPosition="end"
    hint="Enter at least 3 characters"
  />

  <DvInput 
    v-model="website" 
    label="Website"
    error="Invalid URL format"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DvInput } from '@bguerin/davinci-ui'

const email = ref('')
const password = ref('')
const search = ref('')
const website = ref('')
</script>
```

## Props

| Prop  | Type | Default | Description |
| ----- | ---- | ------- | ----------- |
| `modelValue` | `string` | `''` | v-model binding for input value. |
| `label` | `string` | `''` | Label text displayed above the input. |
| `type` | `string` | `'text'` | Input type (text, email, password, number, tel, url, etc.). |
| `placeholder` | `string` | `''` | Placeholder text shown when empty. |
| `icon` | `string` | `''` | Feather icon name displayed in the input. |
| `iconPosition` | `'start' \| 'end'` | `'start'` | Position of icon within the input field. |
| `hint` | `string` | `''` | Helper text displayed below the input. |
| `error` | `string` | `''` | Error message displayed below the input. Automatically sets aria-invalid. |
| `hideLabel` | `boolean` | `false` | Hides the label while keeping it accessible to screen readers. |

## Native Attributes

All native HTML input attributes are supported via `v-bind="$attrs"`:

```html
<DvInput 
  v-model="name" 
  label="Full Name"
  required
  maxlength="100"
  autocomplete="name"
  @change="handleChange"
/>
```

## Events

- `@input` - Emitted on each keystroke (updates v-model)
- `@change` - Emitted when focus is lost

## Slots

None. Use props for customization.

## Accessibility

✅ **WCAG AA Compliant**
- Associated label with proper `for` attribute
- Error messages with `role="alert"`
- Hint text with `aria-describedby`
- Proper `aria-invalid` on validation errors
- Icon support without title tooltips (screen reader friendly)

**Best Practices:**
- Always provide a `label`
- Use appropriate `type` for input validation
- Show errors with the `error` prop
- Use hints for field guidance

## Design Considerations

### Validation

Show errors clearly:
```html
<DvInput 
  v-model="email" 
  label="Email"
  type="email"
  error="Please enter a valid email"
  @change="validateEmail"
/>
```

### Icons

Use Feather icon names:
```html
<!-- Search input -->
<DvInput icon="search" iconPosition="end" label="Search" />

<!-- Password input -->
<DvInput type="password" icon="lock" label="Password" />

<!-- URL input -->
<DvInput type="url" icon="link" label="Website" />
```

### Help Text

Guide users with hints:
```html
<DvInput 
  label="Password"
  hint="Minimum 8 characters with numbers and symbols"
  maxlength="128"
/>
```

### Optional Fields

Mark optional inputs:
```vue
<DvInput 
  label="Phone Number"
  hint="Optional - helps us contact you"
/>
```

## Best Practices

✅ **Do:**
- Always provide descriptive labels
- Use appropriate input types
- Show error messages clearly
- Use hints for field guidance
- Set required attributes on mandatory fields

❌ **Don't:**
- Hide labels without accessibility alternative
- Forget error validation
- Use placeholder as substitute for label
- Forget to set proper input `type`
- Leave required fields unmarked

## Related Components

- [DvLabel](../DvLabel/README.md) - For standalone labels
- [DvCaption](../DvCaption/README.md) - For hint and error text
- [DvButton](../DvButton/README.md) - For form submission

## See in Action

View this component in Storybook:
```bash
pnpm storybook
```
Then navigate to **Components → DvInput**.
