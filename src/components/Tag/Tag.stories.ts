import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, fn, userEvent, within } from "@storybook/test";
import Tag from "./Tag.vue";

import TagAllVariants from "./stories/TagAllVariants.vue";
import TagAllSizes from "./stories/TagAllSizes.vue";
import TagAllAppearance from "./stories/TagAllAppearance.vue";
import TagDismissable from "./stories/TagDismissable.vue";
import TagWithIcon from "./stories/TagWithIcon.vue";
import TagDarkMode from "./stories/TagDarkMode.vue";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`Tag\` component is used to label, categorize, or organize items using keywords. It supports 4 variants and 3 sizes.

**Usage rule**: use tags to provide additional context or categorization for items. Avoid using tags for primary actions or navigation, as they are meant for labeling rather than interaction.
        `.trim(),
      },
    },
  },
  args: {
    variant: "neutral",
    size: "medium",
    appearance: "outline",
    dismissible: false,
    icon: "",
    onDismiss: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "success", "danger", "warning", "neutral"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
    appearance: {
      control: "select",
      options: ["outline", "subtle"],
    },
    dismissible: {
      control: "boolean",
    },
    icon: {
      control: "text",
    },
    onDismiss: {
      action: "dismiss",
      description:
        "Emitted when the user clicks the dismiss button. Use this to remove the tag from the list.",
    },
  },
} satisfies Meta<typeof Tag>;

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
| **Neutral** | The default tag style for general use. |
| **Brand** | Used to represent brand-specific tags or labels. |
| **Success** | Indicates a successful or positive action or state. |
| **Danger** | Indicates an error or negative action or state. |
| **Warning** | Indicates a warning or cautionary action or state. |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { TagAllVariants },
    template: "<TagAllVariants />",
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
| **Small** | Use for compact spaces or when you need a less prominent tag. |
| **Medium** | Use for standard spacing and visibility. |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { TagAllSizes },
    template: "<TagAllSizes />",
  }),
};

export const AllAppearances: Story = {
  name: "All Appearances",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `
| Appearance | When to use |
|---|---|
| **Outline** | Use for a bordered tag with no background. |
| **Filled** | Use for a tag with a solid background. |
        `.trim(),
      },
    },
  },
  render: () => ({
    components: { TagAllAppearance },
    template: "<TagAllAppearance />",
  }),
};

export const Dismissible: Story = {
  name: "Dismissible",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `The dismissible tag includes a close icon that allows users to remove the tag from view. Use dismissible tags for temporary labels or when users may want to hide certain tags without affecting the underlying data. Avoid using dismissible tags for critical information that should always be visible.`,
      },
    },
  },
  render: () => ({
    components: { TagDismissable },
    template: "<TagDismissable />",
  }),
};

export const DismissEmitsEvent: Story = {
  name: "Dismiss: emits event on click",
  args: {
    dismissible: true,
    variant: "brand",
    appearance: "outline",
  },
  render: (args) => ({
    components: { Tag },
    setup: () => ({ args }),
    template: `<Tag v-bind="args" @dismiss="args.onDismiss">Feature</Tag>`,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const dismissBtn = canvas.getByRole("button", { name: /Remove tag/i });
    await userEvent.click(dismissBtn);
    expect(args.onDismiss).toHaveBeenCalledOnce();
  },
};

export const WithIcon: Story = {
  name: "With Icon",
  parameters: {
    layout: "padded",
    controls: { disable: true },
    docs: {
      description: {
        story: `The tag with an icon includes a visual indicator to represent the tag's purpose or category. Use icons to enhance the meaning of the tag and provide additional context.`,
      },
    },
  },
  render: () => ({
    components: { TagWithIcon },
    template: "<TagWithIcon />",
  }),
};

export const DarkMode: Story = {
  name: "Dark Mode",
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'All variants rendered in dark theme (`data-theme="dark"`). Verify that WCAG AA contrast ratios are maintained for each variant.',
      },
    },
  },
  render: () => ({
    components: { TagDarkMode },
    template: "<TagDarkMode />",
  }),
};
