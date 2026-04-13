<template>
  <DvHeading as="h1" truncate>
    This is a very long heading that will be truncated
  </DvHeading>
  <DvHeading as="h1" style="width: 50%;">
    Display a balanced heading even if it is too long
  </DvHeading>
</template>

<script setup lang="ts">
import DvHeading from "../DvHeading.vue";
</script>