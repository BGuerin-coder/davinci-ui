<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <Button variant="primary" label="Default" />
    <Button variant="primary" label="Disabled" :disabled="true" />
    <Button variant="primary" label="Loading" :loading="true" />
  </div>
</template>

<script setup lang="ts">
import Button from "../Button.vue";
</script>
