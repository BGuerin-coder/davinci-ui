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

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import "../css/button.css";

export interface ButtonProps {
  icon?: string;
  iconPosition?: "start" | "end";
  label?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "danger" | "ghost";
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  label: 'Button',
  variant: 'primary',
  icon: '',
  iconPosition: 'start',
  size: 'medium',
  iconOnly: false,
  disabled: false,
  loading: false,
});
</script>
