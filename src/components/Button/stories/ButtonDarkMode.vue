<template>
  <div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;" data-theme="dark">
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvButton variant="primary" label="Primary" />
      <DvButton variant="secondary" label="Secondary" />
      <DvButton variant="danger" label="Danger" />
      <DvButton variant="ghost" label="Ghost" />
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvButton variant="primary" label="Disabled" :disabled="true" />
      <DvButton variant="primary" label="Loading" :loading="true" />
      <DvButton variant="primary" label="With icon" icon="arrow-right" iconPosition="end" />
      <DvButton variant="primary" icon="settings" :iconOnly="true" label="Settings" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DvButton from "../DvButton.vue";
</script>
