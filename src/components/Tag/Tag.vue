<template>
  <span class="davinci-tag" :class="`${variant} ${size}`">
    <slot />
  </span>
</template>

<script setup lang="ts">
import "../../css/tag.css";

export interface TagProps {
  variant?: "brand" | "success" | "error" | "warning" | "neutral";
  size?: "small" | "medium";
}

withDefaults(defineProps<TagProps>(), {
  variant: "neutral",
  size: "medium",
});
</script>