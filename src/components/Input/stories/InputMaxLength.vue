<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px; padding: 16px;">
    <Input id="input-max-count" label="Max length" placeholder="Max length 10" maxlength="10"
      aria-label="Input with max length 10" />
    <Input id="input-max-count-2" label="Max length and hint" placeholder="Max length 10 with hint" maxlength="10"
      aria-label="Input with max length 10 and hint" hint="Hint message as an example" />
  </div>
</template>

<script setup lang="ts">
import Input from '../Input.vue';
</script>