<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <Button variant="primary" label="Icon start" icon="arrow-left" iconPosition="start" />
    <Button variant="primary" label="Icon end" icon="arrow-right" iconPosition="end" />
    <Button variant="primary" icon="settings" :iconOnly="true" label="Settings" />
  </div>
</template>

<script setup lang="ts">
import Button from "../Button.vue";
</script>
