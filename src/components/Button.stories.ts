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
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => ({
    components: { ButtonAllVariants },
    template: "<ButtonAllVariants />",
  }),
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => ({
    components: { ButtonAllSizes },
    template: "<ButtonAllSizes />",
  }),
};

export const AllStates: Story = {
  name: "All States",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => ({
    components: { ButtonAllStates },
    template: "<ButtonAllStates />",
  }),
};

export const DarkMode: Story = {
  name: "Dark Mode",
  globals: { theme: "dark" },
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => ({
    components: { ButtonDarkMode },
    template: "<ButtonDarkMode />",
  }),
};

export const WithIcons: Story = {
  name: "With Icons",
  parameters: { layout: "padded", controls: { disable: true } },
  render: () => ({
    components: { ButtonWithIcons },
    template: "<ButtonWithIcons />",
  }),
};
