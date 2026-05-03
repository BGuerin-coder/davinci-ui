<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <DvButton variant="primary" label="Icon start" icon="arrow-left" iconPosition="start" />
    <DvButton variant="primary" label="Icon end" icon="arrow-right" iconPosition="end" />
    <DvButton variant="primary" icon="settings" :iconOnly="true" label="Settings" />
  </div>
</template>

<script setup lang="ts">
import DvButton from "../DvButton.vue";
</script>
