<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <DvButton variant="primary" label="Default" />
    <DvButton variant="primary" label="Disabled" :disabled="true" />
    <DvButton variant="primary" label="Loading" :loading="true" />
  </div>
</template>

<script setup lang="ts">
import DvButton from "../DvButton.vue";
</script>
