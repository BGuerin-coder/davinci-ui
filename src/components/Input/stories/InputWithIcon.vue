<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px; padding: 16px;">
    <DvInput id="with-icon-search-input" type="search" label="Search" icon="search" iconPosition="start"
      aria-label="Search" />
    <DvInput id="with-icon-phone-input" type="tel" label="Phone" icon="phone" iconPosition="end" aria-label="Phone" />
  </div>
</template>

<script setup lang="ts">
import DvInput from '../DvInput.vue';
</script>