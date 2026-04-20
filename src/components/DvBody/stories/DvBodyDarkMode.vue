<template>
  <div
    style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
    data-theme="dark">
    <DvBody as="p">Body text as paragraph</DvBody>
    <DvBody as="div">Body text as div</DvBody>
    <DvBody as="span">Body text as span</DvBody>
    <DvBody as="p" lead>Lead body text for emphasis</DvBody>
  </div>
</template>

<script setup lang="ts">
import DvBody from "../DvBody.vue";
</script>
