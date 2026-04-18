<template>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <div>
      <DvHeading as="h3" style="margin-bottom: 1rem;">Normal Heading</DvHeading>
      <DvHeading>This is a normal heading without truncation</DvHeading>
    </div>

    <div>
      <DvHeading as="h3" style="margin-bottom: 1rem;">Truncated Heading</DvHeading>
      <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--davinci-semantic-text-secondary);">
        Try hovering over the heading to see the full text in the title attribute (for screen readers)
      </p>
      <div style="max-width: 300px;">
        <DvHeading truncate>This is a very long heading text that will be truncated with an ellipsis when it exceeds the available space</DvHeading>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvHeading from "../DvHeading.vue";
</script>

<style scoped>
div {
  max-width: 100%;
}
</style>
