<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap; padding: 16px;">
    <DvInput id="all-types-text-input" type="text" label="Text" aria-label="Text input" />
    <DvInput id="all-types-email-input" type="email" label="Email" aria-label="Email input" />
    <DvInput id="all-types-password-input" type="password" label="Password" aria-label="Password input" />
    <DvInput id="all-types-search-input" type="search" label="Search" aria-label="Search input" />
    <DvInput id="all-types-tel-input" type="tel" label="Tel" aria-label="Tel input" />
    <DvInput id="all-types-url-input" type="url" label="URL" aria-label="URL input" />
  </div>
</template>

<script setup lang="ts">
import DvInput from "../DvInput.vue";
</script>