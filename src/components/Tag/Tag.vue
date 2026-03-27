<template>
  <span class="davinci-tag"
    :class="`${variant} ${size} ${appearance} ${dismissible ? 'davinci-tag--dismissible' : ''}`">
    <Icon v-if="icon" :icon="`feather:${icon}`" class="davinci-tag--icon" />
    <span class="davinci-tag--label">
      <slot />
    </span>
    <button v-if="dismissible" class="davinci-tag--dismiss" aria-label="Remove tag" @click="$emit('dismiss')">
      <Icon icon="feather:x" class="davinci-tag--icon" />
    </button>
  </span>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import "../../css/tag.css";

export interface TagProps {
  variant?: "brand" | "success" | "error" | "warning" | "neutral";
  size?: "small" | "medium";
  appearance?: "outline" | "filled";
  dismissible?: boolean;
  icon?: string;
}

withDefaults(defineProps<TagProps>(), {
  variant: "neutral",
  size: "medium",
  appearance: "filled",
  dismissible: false,
  icon: '',
});
</script>