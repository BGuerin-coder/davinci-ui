<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <DvButton variant="primary" label="Primary" />
    <DvButton variant="secondary" label="Secondary" />
    <DvButton variant="danger" label="Danger" />
    <DvButton variant="ghost" label="Ghost" />
  </div>
</template>

<script setup lang="ts">
import DvButton from "../DvButton.vue";
</script>
