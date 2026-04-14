import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DvBody from "./DvBody.vue";

import DvBodyLongForm from "./stories/DvBodyLongForm.vue";
import DvBodyVariations from "./stories/DvBodyVariations.vue";

const meta = {
  title: "Typography/DvBody",
  component: DvBody,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`DvBody\` component is used for standard body copy, long-form reading, and UI descriptions. It applies consistent typography styling and optimal readability for paragraph text.

## Usage Rules
- Use for all standard paragraph content and long-form text
- Use \`lead\` variant for opening paragraphs or prominent introductory text
- Maintain semantic HTML by choosing the appropriate \`as\` prop (p, div, span)
- Ensure sufficient color contrast for readability

## Best Practices
- Use proper heading hierarchy before body text for document structure
- Keep paragraphs concise and scannable
- Use \`lead\` sparingly for emphasis and visual hierarchy
- Pair with headings (DvHeading) for complete text sections
        `.trim(),
      },
    },
  },
  args: {
    as: "p",
    lead: false,
  },
  argTypes: {
    as: {
      description:
        "The HTML element to render. Use 'p' for paragraph content, 'div' for layout blocks, 'span' for inline text.",
      control: "select",
      options: ["p", "div", "span"],
    },
    lead: {
      description:
        "Use for opening paragraphs or prominent introductory text. Increases font size and line height for visual emphasis.",
      control: "boolean",
    },
  },
} satisfies Meta<typeof DvBody>;

export const Default: StoryObj<typeof DvBody> = {
  args: {
    as: "p",
    lead: false,
  },
  render: (args) => ({
    components: { DvBody },
    setup() {
      return { args };
    },
    template: `<DvBody v-bind="args">
      This is standard body text. It provides clear, readable content for your users. Use this component for paragraphs, descriptions, and long-form reading material throughout your application.
    </DvBody>`,
  }),
};

export const LeadParagraph: StoryObj<typeof DvBody> = {
  args: {
    as: "p",
    lead: true,
  },
  render: (args) => ({
    components: { DvBody },
    setup() {
      return { args };
    },
    template: `<DvBody v-bind="args">
      This is a lead paragraph with larger font size and looser line height. Perfect for opening text, introductions, or highlighting important content that should stand out.
    </DvBody>`,
  }),
};

export const LongForm: StoryObj<typeof DvBody> = {
  render: () => ({
    components: { DvBodyLongForm },
    template: "<DvBodyLongForm />",
  }),
};

export const Variations: StoryObj<typeof DvBody> = {
  render: () => ({
    components: { DvBodyVariations },
    template: "<DvBodyVariations />",
  }),
};

export default meta;
