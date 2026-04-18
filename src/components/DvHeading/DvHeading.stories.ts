import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DvHeading from "./DvHeading.vue";

import DvHeadingAllLevels from "./stories/DvHeadingAllLevels.vue";
import DvHeadingStyling from "./stories/DvHeadingStyling.vue";
import DvHeadingTruncate from "./stories/DvHeadingTruncate.vue";

const meta = {
  title: "Typography/DvHeading",
  component: DvHeading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`DvHeading\` component is a flexible heading component that renders semantic HTML heading tags (h1-h6) with consistent styling. It ensures proper document structure and accessibility throughout your application.

## Usage Rules
- **h1**: Use only once per page for the main title/page heading
- **h2**: Use for primary section headings
- **h3**: Use for subheadings within sections
- **h4-h6**: Use for deeper nesting as needed
- Always maintain a logical, sequential hierarchy (don't skip levels)
- Always renders real semantic HTML (\`<h1>\` through \`<h6>\`), never uses \`<div>\`

## Best Practices
- Always use headings in a logical, sequential order for proper document structure
- Use only one h1 per page
- Avoid using headings for styling purposes; use CSS classes instead
- Ensure sufficient color contrast for readability
- **When using \`truncate=true\`**, the full text is automatically exposed via \`title\` attribute for screen readers
  - Example: \`<DvHeading truncate>Very long heading text...</DvHeading>\`
        `.trim(),
      },
    },
  },
  args: {
    as: "h1",
    truncate: false,
  },
  argTypes: {
    as: {
      description:
        "Determines document hierarchy and SEO. Use h1 once per page, h2 for sections, and maintain logical order.",
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    truncate: {
      description:
        "Use in constrained spaces where content might overflow. Adds ellipsis (...) to overflow text.",
      control: "boolean",
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

export const Truncate: StoryObj<typeof DvHeading> = {
  render: () => ({
    components: { DvHeadingTruncate },
    template: "<DvHeadingTruncate />",
  }),
};

export default meta;
