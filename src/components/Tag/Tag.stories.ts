import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Tag from "./Tag.vue";

import TagAllVariants from "./stories/TagAllVariants.vue";
import TagAllSizes from "./stories/TagAllSizes.vue";

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
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["brand", "success", "error", "warning", "neutral"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
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
| **Error** | Indicates an error or negative action or state. |
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
