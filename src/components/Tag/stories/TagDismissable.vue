<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <DvTag appearance="outline" variant="brand" dismissible>outline</DvTag>
    <DvTag appearance="filled" variant="brand" dismissible>filled</DvTag>
  </div>
</template>

<script setup lang="ts">
import DvTag from '../DvTag.vue';
</script>