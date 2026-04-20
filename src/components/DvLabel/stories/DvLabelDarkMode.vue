<template>
  <div
    style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
    data-theme="dark">
    <DvLabel as="div">Label text</DvLabel>
    <DvLabel as="div" uppercase>Uppercase label</DvLabel>
    <DvLabel as="span">Span label</DvLabel>
    <DvLabel as="div">Div label</DvLabel>
  </div>
</template>

<script setup lang="ts">
import DvLabel from "../DvLabel.vue";
</script>
