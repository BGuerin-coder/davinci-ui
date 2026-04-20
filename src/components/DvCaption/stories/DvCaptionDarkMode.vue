<template>
  <div
    style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
    data-theme="dark">
    <DvCaption as="span">Caption as span</DvCaption>
    <DvCaption as="p">Caption as paragraph</DvCaption>
    <DvCaption as="time" datetime="2024-01-01T12:00:00Z">January 1, 2024</DvCaption>
  </div>
</template>

<script setup lang="ts">
import DvCaption from "../DvCaption.vue";
</script>
