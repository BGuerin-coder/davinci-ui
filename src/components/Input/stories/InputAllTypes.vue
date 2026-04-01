<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; background-color: white; padding: 16px;">
    <Input type="text" label="Text" aria-label="Text input" />
    <Input type="email" label="Email" aria-label="Email input" />
    <Input type="password" label="Password" aria-label="Password input" />
    <Input type="search" label="Search" aria-label="Search input" />
    <Input type="tel" label="Tel" aria-label="Tel input" />
    <Input type="url" label="URL" aria-label="URL input" />
  </div>
</template>

<script setup lang="ts">
import Input from "../Input.vue";
</script>