<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <DvButton variant="primary" label="Submit" type="submit" />
    <DvButton variant="primary" label="Button" type="button" />
    <DvButton variant="primary" label="Reset" type="reset" />
  </div>
</template>

<script setup lang="ts">
import DvButton from "../DvButton.vue";
</script>