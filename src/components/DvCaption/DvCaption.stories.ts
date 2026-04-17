import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DvCaption from "./DvCaption.vue";

import DvCaptionUseCases from "./stories/DvCaptionUseCases.vue";
import DvCaptionVariations from "./stories/DvCaptionVariations.vue";

const meta = {
  title: "Typography/DvCaption",
  component: DvCaption,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`DvCaption\` component is used for small supporting text including labels, metadata, timestamps, helper text, and fine print. It maintains visual hierarchy while conveying secondary information.

## Usage Rules
- Use for secondary information that supports primary content
- Use for form labels, timestamps, metadata, and helper text
- Ensure sufficient color contrast even at reduced size
- Pair with larger components (DvBody, DvHeading) for context

## Best Practices
- Keep caption text concise and scannable
- Use secondary color for visual de-emphasis
- Never use for critical information that users must read
- Test readability on smaller screens and devices
        `.trim(),
      },
    },
  },
  args: {
    as: "span",
  },
  argTypes: {
    as: {
      description:
        "The HTML element to render. Use 'span' for inline captions, 'p' for paragraphs, 'time' for timestamps.",
      control: "select",
      options: ["span", "p", "time"],
    },
  },
} satisfies Meta<typeof DvCaption>;

export const Default: StoryObj<typeof DvCaption> = {
  args: {
    as: "span",
  },
  render: (args) => ({
    components: { DvCaption },
    setup() {
      return { args };
    },
    template: `<DvCaption v-bind="args">
      Published 3 days ago
    </DvCaption>`,
  }),
};

export const AsTime: StoryObj<typeof DvCaption> = {
  args: {
    as: "time",
  },
  render: (args) => ({
    components: { DvCaption },
    setup() {
      return { args };
    },
    template: `<DvCaption v-bind="args" datetime="2026-04-14">
      April 14, 2026
    </DvCaption>`,
  }),
};

export const UseCases: StoryObj<typeof DvCaption> = {
  render: () => ({
    components: { DvCaptionUseCases },
    template: "<DvCaptionUseCases />",
  }),
};

export const Variations: StoryObj<typeof DvCaption> = {
  render: () => ({
    components: { DvCaptionVariations },
    template: "<DvCaptionVariations />",
  }),
};

export default meta;
