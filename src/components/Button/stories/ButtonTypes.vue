<template>
  <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
    <Button variant="primary" label="Submit" type="submit" />
    <Button variant="primary" label="Button" type="button" />
    <Button variant="primary" label="Reset" type="reset" />
  </div>
</template>

<script setup lang="ts">
import Button from "../Button.vue";
</script>