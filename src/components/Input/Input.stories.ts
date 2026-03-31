import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Input from "./Input.vue";

import InputAllTypes from "./stories/InputAllTypes.vue";

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
    type: "text",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "search", "tel", "url"],
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
