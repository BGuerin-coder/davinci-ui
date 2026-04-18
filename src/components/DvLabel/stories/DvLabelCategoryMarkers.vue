<template>
  <div class="category-examples">
    <div class="category-item">
      <DvLabel uppercase>New</DvLabel>
      <DvHeading as="h4">Latest Feature</DvHeading>
    </div>
    <div class="category-item">
      <DvLabel uppercase>Premium</DvLabel>
      <DvHeading as="h4">Advanced Analytics</DvHeading>
    </div>
    <div class="category-item">
      <DvLabel uppercase>Featured</DvLabel>
      <DvHeading as="h4">Popular Integration</DvHeading>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvLabel from "../DvLabel.vue";
import DvHeading from "../../DvHeading/DvHeading.vue";
</script>

<style scoped>
.category-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-item {
  padding: 1rem;
  border: 1px solid var(--davinci-semantic-border-subtle);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
