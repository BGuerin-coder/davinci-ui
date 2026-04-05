<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px; padding: 16px;">
    <Input type="search" label="Search" icon="search" iconPosition="start" aria-label="Search" />
    <Input type="tel" label="Phone" icon="phone" iconPosition="end" aria-label="Phone" />
  </div>
</template>

<script setup lang="ts">
import Input from '../Input.vue';
</script>