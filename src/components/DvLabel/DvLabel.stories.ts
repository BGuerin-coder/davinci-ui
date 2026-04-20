import type { Meta, StoryObj } from "@storybook/vue3-vite";
import DvLabel from "./DvLabel.vue";
import { extractTemplate } from "../../utils/storybook";

import DvLabelFormFields from "./stories/DvLabelFormFields.vue";
import DvLabelFormFieldsSource from "./stories/DvLabelFormFields.vue?raw";
import DvLabelCategoryMarkers from "./stories/DvLabelCategoryMarkers.vue";
import DvLabelCategoryMarkersSource from "./stories/DvLabelCategoryMarkers.vue?raw";
import DvLabelSectionGrouping from "./stories/DvLabelSectionGrouping.vue";
import DvLabelSectionGroupingSource from "./stories/DvLabelSectionGrouping.vue?raw";
import DvLabelElements from "./stories/DvLabelElements.vue";
import DvLabelElementsSource from "./stories/DvLabelElements.vue?raw";
import DvLabelDarkMode from "./stories/DvLabelDarkMode.vue";

const meta = {
  title: "Typography/DvLabel",
  component: DvLabel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`DvLabel\` component is used for form and UI labels including section overlines, category markers, and form field labels. It provides clear, semantic labeling with support for uppercase tracked typography.

## Usage Rules
- Use for form labels paired with inputs
- Use for section overlines and category markers
- Use \`uppercase\` variant for emphasized, tracked text
- Always associate labels with form inputs via semantic HTML

## Best Practices
- Keep labels concise and descriptive
- Use \`uppercase\` sparingly for visual emphasis and organization
- Position labels consistently (above or beside inputs)
- Ensure sufficient color contrast for accessibility
- **When \`as="label"\`, always provide the \`for\` attribute** to associate with an input ID for accessibility
  - Example: \`<DvLabel as="label" for="email-input">Email</DvLabel>\`
- Use \`as="div"\` or \`as="span"\` for non-form labels (overlines, markers)
        `.trim(),
      },
    },
  },
  args: {
    as: "label",
    uppercase: false,
  },
  argTypes: {
    as: {
      description:
        "The HTML element to render. Use 'label' for form labels, 'span' for inline labels, 'div' for block labels.",
      control: "select",
      options: ["label", "span", "div"],
    },
    uppercase: {
      description:
        "Use for section overlines, category markers, and emphasized labels. Applies uppercase text transform with increased letter spacing.",
      control: "boolean",
    },
  },
} satisfies Meta<typeof DvLabel>;

export const FormLabel: StoryObj<typeof DvLabel> = {
  args: {
    as: "label",
    uppercase: false,
  },
  render: (args) => ({
    components: { DvLabel },
    setup() {
      return { args };
    },
    template: `<DvLabel v-bind="args">
      Full Name
    </DvLabel>`,
  }),
};

export const SectionOverline: StoryObj<typeof DvLabel> = {
  args: {
    as: "div",
    uppercase: true,
  },
  render: (args) => ({
    components: { DvLabel },
    setup() {
      return { args };
    },
    template: `<DvLabel v-bind="args">
      Account Settings
    </DvLabel>`,
  }),
};

export const FormFields: StoryObj<typeof DvLabel> = {
  render: () => ({
    components: { DvLabelFormFields },
    template: "<DvLabelFormFields />",
  }),
  parameters: {
    docs: {
      source: {
        code: extractTemplate(DvLabelFormFieldsSource),
      },
    },
  },
};

export const CategoryMarkers: StoryObj<typeof DvLabel> = {
  render: () => ({
    components: { DvLabelCategoryMarkers },
    template: "<DvLabelCategoryMarkers />",
  }),
  parameters: {
    docs: {
      source: {
        code: extractTemplate(DvLabelCategoryMarkersSource),
      },
    },
  },
};

export const SectionGrouping: StoryObj<typeof DvLabel> = {
  render: () => ({
    components: { DvLabelSectionGrouping },
    template: "<DvLabelSectionGrouping />",
  }),
  parameters: {
    docs: {
      source: {
        code: extractTemplate(DvLabelSectionGroupingSource),
      },
    },
  },
};

export const Elements: StoryObj<typeof DvLabel> = {
  render: () => ({
    components: { DvLabelElements },
    template: "<DvLabelElements />",
  }),
  parameters: {
    docs: {
      source: {
        code: extractTemplate(DvLabelElementsSource),
      },
    },
  },
};

export const DarkMode: StoryObj<typeof DvLabel> = {
  render: () => ({
    components: { DvLabelDarkMode },
    template: "<DvLabelDarkMode />",
  }),
};

export default meta;
