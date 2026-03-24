import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

import ButtonAllVariants from "./stories/ButtonAllVariants.vue";
import ButtonAllSizes from "./stories/ButtonAllSizes.vue";
import ButtonAllStates from "./stories/ButtonAllStates.vue";
import ButtonDarkMode from "./stories/ButtonDarkMode.vue";
import ButtonWithIcons from "./stories/ButtonWithIcons.vue";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`Button\` component is the primary action trigger in the interface. It supports 4 variants, 3 sizes, icons, and disabled/loading states.

**Usage rule**: only one \`primary\` action per visual group. Other buttons should be \`secondary\` or \`ghost\` to maintain hierarchy.
        `.trim(),
      },
    },
  },
  args: {
    label: "Button",
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
    iconOnly: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    iconPosition: {
      control: "select",
      options: ["start", "end"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    iconOnly: { control: "boolean" },
    label: { control: "text" },
    icon: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  name: "All Variants",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `
| Variant | When to use |
|---|---|
| **Primary** | The main action on a page or form. Only one per visual group (e.g. "Save", "Create", "Confirm"). |
| **Secondary** | An alternative or complementary action to the primary (e.g. "Cancel", "Back", "View more"). |
| **Danger** | Destructive or irreversible actions only (e.g. "Delete", "Reset"). Always pair with a confirmation step. |
| **Ghost** | Low-priority, contextual actions or actions in dense areas (e.g. tables, lists, toolbars). |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { ButtonAllVariants },
    template: "<ButtonAllVariants />",
  }),
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `
| Size | When to use |
|---|---|
| **Small** | Dense interfaces: tables, lists, toolbars, action badges. |
| **Medium** | Default size. Suitable for most forms and pages. |
| **Large** | Prominent CTAs on marketing pages, hero sections, or to improve touch accessibility. |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { ButtonAllSizes },
    template: "<ButtonAllSizes />",
  }),
};

export const AllStates: Story = {
  name: "All States",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `
| State | When to use |
|---|---|
| **Default** | Idle state, the action is available and expected. |
| **Disabled** | The action is temporarily unavailable (missing permissions, invalid form). Always explain why via a tooltip or contextual message. |
| **Loading** | Visual feedback during an async operation (form submit, upload, API request). Block the button while loading to prevent double submissions. |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { ButtonAllStates },
    template: "<ButtonAllStates />",
  }),
};

export const DarkMode: Story = {
  name: "Dark Mode",
  globals: { theme: "dark" },
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story:
          'All variants rendered in dark theme (`data-theme="dark"`). Verify that WCAG AA contrast ratios are maintained for each variant.',
      },
    },
  },
  render: () => ({
    components: { ButtonDarkMode },
    template: "<ButtonDarkMode />",
  }),
};

export const WithIcons: Story = {
  name: "With Icons",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `
| Usage | Recommendation |
|---|---|
| **Icon start** | Actions with a starting point (e.g. "← Back", "+ Add"). The icon precedes and signals the intent. Renders on the left in LTR, right in RTL. |
| **Icon end** | Actions with a direction or continuation (e.g. "Continue →", "Open ↗"). The icon confirms the progression. Renders on the right in LTR, left in RTL. |
| **Icon only** | Very constrained spaces (toolbars, tables). Always provide a \`label\` for the screen reader and a visible tooltip. |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { ButtonWithIcons },
    template: "<ButtonWithIcons />",
  }),
};
