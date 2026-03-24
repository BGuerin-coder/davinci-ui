import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Button.vue";

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
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <Button variant="primary" label="Primary" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="danger" label="Danger" />
          <Button variant="ghost" label="Ghost" />
        </div>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  name: "All Sizes",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <Button variant="primary" size="small" label="Small" />
        <Button variant="primary" size="medium" label="Medium" />
        <Button variant="primary" size="large" label="Large" />
      </div>
    `,
  }),
};

export const AllStates: Story = {
  name: "All States",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <Button variant="primary" label="Default" />
        <Button variant="primary" label="Disabled" :disabled="true" />
        <Button variant="primary" label="Loading" :loading="true" />
      </div>
    `,
  }),
};

export const DarkMode: Story = {
  name: "Dark Mode",
  globals: { theme: "dark" },
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px" data-theme="dark">
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <Button variant="primary" label="Primary" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="danger" label="Danger" />
          <Button variant="ghost" label="Ghost" />
        </div>
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <Button variant="primary" label="Disabled" :disabled="true" />
          <Button variant="primary" label="Loading" :loading="true" />
          <Button variant="primary" label="With icon" icon="arrow-right" iconPosition="end" />
          <Button variant="primary" icon="settings" :iconOnly="true" label="Settings" />
        </div>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  name: "With icons",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
        <Button variant="primary" label="Icon left" icon="arrow-left" iconPosition="start" />
        <Button variant="primary" label="Icon right" icon="arrow-right" iconPosition="end" />
        <Button variant="primary" icon="settings" :iconOnly="true" label="Settings" />
      </div>
    `,
  }),
};
