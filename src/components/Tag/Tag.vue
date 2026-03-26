<template>
  <span class="davinci-tag" :class="`${variant} ${size} ${appearance}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
import "../../css/tag.css";

export interface TagProps {
  variant?: "brand" | "success" | "error" | "warning" | "neutral";
  size?: "small" | "medium";
  appearance?: "outline" | "filled";
}

withDefaults(defineProps<TagProps>(), {
  variant: "neutral",
  size: "medium",
  appearance: "filled",
});
</script>