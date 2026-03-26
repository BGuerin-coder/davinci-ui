<template>
  <span class="davinci-tag" :class="variant">
    <slot />
  </span>
</template>

<script setup lang="ts">
import "../../css/tag.css";

export interface TagProps {
  variant: "brand" | "success" | "error" | "warning" | "neutral";
}

withDefaults(defineProps<TagProps>(), {
  variant: "neutral"
});
</script>