import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";
import type {
  ButtonVariant,
  ButtonIconPosition,
  ButtonSize,
} from "./Button.vue";

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
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "ghost"] as ButtonVariant[],
    },
    iconPosition: {
      control: { type: "select" },
      options: ["start", "end"] as ButtonIconPosition[],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"] as ButtonSize[],
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    iconOnly: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const IconEnd: Story = {
  args: {
    icon: "arrow-right",
    iconPosition: "end",
  },
};

export const IconStart: Story = {
  args: {
    icon: "arrow-left",
    iconPosition: "start",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const IconOnly: Story = {
  args: {
    icon: "settings",
    iconOnly: true,
    label: "Settings",
  },
};
