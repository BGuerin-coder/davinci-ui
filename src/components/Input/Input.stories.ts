import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Input from "./Input.vue";

import InputAllTypes from "./stories/InputAllTypes.vue";
import InputAllStates from "./stories/InputAllStates.vue";
import InputWithIcon from "./stories/InputWithIcon.vue";
import InputMaxLength from "./stories/InputMaxLength.vue";
import InputLabelVariants from "./stories/InputLabelVariants.vue";
import InputDarkMode from "./stories/InputDarkMode.vue";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          `The \`Input\` component is a versatile form control for user input. It supports various types (text, password, email, etc.), sizes, and states (disabled, error). It can also include icons and clearable functionality.
**Usage rule**: use appropriate input types for better user experience and validation. For example, use \`email\` type for email addresses to trigger relevant keyboard on mobile devices.  
                `.trim(),
      },
    },
  },
  args: {
    label: "Label",
    type: "text",
    icon: "",
    iconPosition: "start",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "search", "tel", "url"],
    },
    icon: {
      control: "text",
      description: "Name of the icon to display (e.g., 'search', 'user').",
    },
    iconPosition: {
      control: "select",
      options: ["start", "end"],
      description: "Position of the icon relative to the input field.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllTypes: Story = {
  name: "All Types",
  render: () => ({
    components: { InputAllTypes },
    template: "<InputAllTypes />",
  }),
};

export const AllStates: Story = {
  name: "All States",
  render: () => ({
    components: { InputAllStates },
    template: "<InputAllStates />",
  }),
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => ({
    components: { InputWithIcon },
    template: "<InputWithIcon />",
  }),
};

export const MaxLength: Story = {
  name: "Max Length",
  render: () => ({
    components: { InputMaxLength },
    template: "<InputMaxLength />",
  }),
};

export const LabelVariants: Story = {
  name: "With and Without Label",
  render: () => ({
    components: { InputLabelVariants },
    template: "<InputLabelVariants />",
  }),
};

export const DarkMode: Story = {
  name: "Dark Mode",
  render: () => ({
    components: { InputDarkMode },
    template: "<InputDarkMode />",
  }),
};
