<template>
  <div
    style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
    data-theme="dark">
    <DvHeading as="h1">Heading H1</DvHeading>
    <DvHeading as="h2">Heading H2</DvHeading>
    <DvHeading as="h3">Heading H3</DvHeading>
    <DvHeading as="h4">Heading H4</DvHeading>
    <DvHeading as="h5">Heading H5</DvHeading>
    <DvHeading as="h6">Heading H6</DvHeading>
    <DvHeading as="h2" truncate>This is a very long heading that will be truncated with ellipsis when it overflows the
      container</DvHeading>
  </div>
</template>

<script setup lang="ts">
import DvHeading from "../DvHeading.vue";
</script>
