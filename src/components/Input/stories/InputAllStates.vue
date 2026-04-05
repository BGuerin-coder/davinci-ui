<template>
  <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 16px;">
    <Input type="text" label="Hint" aria-label="Hint input" hint="Hint as an example" placeholder="Hint input" />
    <Input type="text" label="Error" aria-label="Error input" error="Error message as an example"
      placeholder="Error input" />
    <Input type="text" label="Read only" aria-label="Read only input" readonly placeholder="Read only input" />
    <Input type="text" label="Disabled" aria-label="Disabled input" disabled placeholder="Disabled input" />
    <Input type="text" label="Success" aria-label="Success input" success placeholder="Success input" />
    <Input type="text" label="Default" aria-label="Default input" optional placeholder="Optional input" />
    <Input type="text" label="Required" aria-label="Required input" required placeholder="Required input" />
  </div>
</template>

<script setup lang="ts">
import Input from "../Input.vue";
</script>