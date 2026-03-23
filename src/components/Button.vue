<template>

  <button type="button" class="davinci-btn"
    :class="[variant, size, { 'davinci-btn--loading': loading, 'davinci-btn--icon-only': iconOnly }]"
    :aria-label="`${iconOnly ? label : ''}`" :disabled="disabled" :aria-disabled="disabled" :aria-busy="loading">
    <Icon v-if="icon && iconPosition === 'start' && !loading" :icon="`feather:${icon}`" class="davinci-btn--icon"
      :class="iconPosition" />
    <span v-if="!iconOnly">{{ label }}</span>
    <Icon v-if="icon && iconPosition === 'end' && !loading" :icon="`feather:${icon}`" class="davinci-btn--icon"
      :class="iconPosition" />
    <Icon v-if="loading" icon="eos-icons:loading" class="davinci-btn--icon davinci-btn--loading-icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from "@iconify/vue";

import "../css/button.css";


export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonIconPosition = "start" | "end";

export type ButtonProps = {
  icon?: string;
  iconPosition?: ButtonIconPosition;
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

export default defineComponent({
  name: 'Button',
  components: { Icon },
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    variant: {
      type: String as () => ButtonVariant,
      default: 'primary',
    },
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String as () => ButtonIconPosition,
      default: 'start',
    },
    size: {
      type: String as () => ButtonSize,
      default: 'medium',
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  }
});
</script>