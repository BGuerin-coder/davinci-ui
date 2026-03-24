<template>
  <div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;" data-theme="dark">
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="danger" label="Danger" />
      <Button variant="ghost" label="Ghost" />
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Button variant="primary" label="Disabled" :disabled="true" />
      <Button variant="primary" label="Loading" :loading="true" />
      <Button variant="primary" label="With icon" icon="arrow-right" iconPosition="end" />
      <Button variant="primary" icon="settings" :iconOnly="true" label="Settings" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../Button.vue";
</script>
