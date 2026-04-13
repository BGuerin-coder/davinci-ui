import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DvHeading from "./DvHeading.vue";

import DvHeadingAllLevels from "./stories/DvHeadingAllLevels.vue";
import DvHeadingStyling from "./stories/DvHeadingStyling.vue";

const meta = {
  title: "Typography/DvHeading",
  component: DvHeading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`DvHeading\` component is used to display headings in the interface. It supports 6 levels (h1, h2, h3, h4, h5, h6) and can be customized with different sizes and styles.
**Usage rule**: Use \`h1\` for main titles, \`h2\` for section headings, and \`h3\` for subheadings to maintain a clear hierarchy.
                `.trim(),
      },
    },
  },
  args: {
    as: "h1",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
} satisfies Meta<typeof DvHeading>;

export const AllLevels: StoryObj<typeof DvHeading> = {
  render: () => ({
    components: { DvHeadingAllLevels },
    template: "<DvHeadingAllLevels />",
  }),
};

export const Styling: StoryObj<typeof DvHeading> = {
  render: () => ({
    components: { DvHeadingStyling },
    template: "<DvHeadingStyling />",
  }),
};

export default meta;
