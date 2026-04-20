<template>
  <div class="section-example">
    <DvLabel as="div" uppercase>Appearance</DvLabel>
    <DvHeading as="h3">Theme Settings</DvHeading>
    <DvBody>Customize how the interface looks and behaves.</DvBody>
  </div>
</template>

<script setup lang="ts">
import DvLabel from "../DvLabel.vue";
import DvHeading from "../../DvHeading/DvHeading.vue";
import DvBody from "../../DvBody/DvBody.vue";
</script>

<style scoped>
.section-example {
  padding: 1.5rem;
  background-color: var(--davinci-semantic-surface-secondary);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
