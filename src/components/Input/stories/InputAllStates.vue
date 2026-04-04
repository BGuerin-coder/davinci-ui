<template>
  <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; background-color: white; padding: 16px;">
    <Input type="text" label="Hint" aria-label="Text input" hint="Hint as an example" placeholder="Hint input" />
    <Input type="text" label="Error" aria-label="Text input" error="Error message as an example"
      placeholder="Error input" />
    <Input type="text" label="Read only" aria-label="Text input" readonly placeholder="Read only input" />
    <Input type="text" label="Disabled" aria-label="Text input" disabled placeholder="Disabled input" />
    <Input type="text" label="Success" aria-label="Text input" success placeholder="Success input" />
    <Input type="text" label="Default" aria-label="Text input" optional placeholder="Optional input" />
  </div>
</template>

<script setup lang="ts">
import Input from "../Input.vue";
</script>