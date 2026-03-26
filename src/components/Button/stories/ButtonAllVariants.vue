<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <Button variant="primary" label="Primary" />
    <Button variant="secondary" label="Secondary" />
    <Button variant="danger" label="Danger" />
    <Button variant="ghost" label="Ghost" />
  </div>
</template>

<script setup lang="ts">
import Button from "../Button.vue";
</script>
