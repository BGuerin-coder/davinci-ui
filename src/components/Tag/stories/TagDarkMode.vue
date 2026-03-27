<template>
  <div
    style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
    data-theme="dark">
    <TagAllVariants />
    <TagAllSizes />
    <TagAllAppearance />
    <TagDismissable />
    <TagWithIcon />
  </div>
</template>

<script setup lang="ts">
import TagAllVariants from "./TagAllVariants.vue";
import TagAllSizes from "./TagAllSizes.vue";
import TagAllAppearance from "./TagAllAppearance.vue";
import TagDismissable from "./TagDismissable.vue";
import TagWithIcon from "./TagWithIcon.vue";
</script>