<template>
  <div class="element-variations">
    <div>
      <span class="elem-label">label:</span>
      <DvLabel as="label">Form label element</DvLabel>
    </div>
    <div>
      <span class="elem-label">span:</span>
      <DvLabel as="span">Inline label element</DvLabel>
    </div>
    <div>
      <span class="elem-label">div:</span>
      <DvLabel as="div">Block label element</DvLabel>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvLabel from "../DvLabel.vue";
</script>

<style scoped>
.element-variations {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--davinci-semantic-surface-secondary);
  border-radius: 0.5rem;
}

.element-variations > div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.elem-label {
  min-width: 60px;
  font-weight: 500;
  font-size: 0.875rem;
}
</style>
