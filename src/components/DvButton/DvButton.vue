<template>

  <button type="button" class="davinci-btn"
    :class="[variant, size, { 'davinci-btn--loading': loading, 'davinci-btn--icon-only': iconOnly, [`icon--${iconPosition}`]: icon && !loading }]"
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
import "../../css/button.css";

export interface ButtonProps {
  disabled?: boolean;
  icon?: string;
  iconOnly?: boolean;
  iconPosition?: "start" | "end";
  label?: string;
  loading?: boolean;
  size?: "small" | "medium" | "large";
  type?: 'button' | 'submit' | 'reset'
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  icon: '',
  iconOnly: false,
  iconPosition: 'start',
  label: 'Button',
  loading: false,
  size: 'medium',
  type: 'button',
  variant: 'primary'
});
</script>
