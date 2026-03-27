<template>
  <span class="davinci-tag" :class="`${variant} ${size} ${appearance} ${dismissible ? 'davinci-tag--dismissible' : ''}`"
    @on-click="$emit('dismiss')">
    <slot />
    <Icon v-if="dismissible" icon="feather:x" class="davinci-tag--dismiss-icon" />
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
}

withDefaults(defineProps<TagProps>(), {
  variant: "neutral",
  size: "medium",
  appearance: "filled",
  dismissible: false,
});
</script>