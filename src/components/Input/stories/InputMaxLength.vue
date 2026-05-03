<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px; padding: 16px;">
    <DvInput id="input-max-count" label="Max length" placeholder="Max length 10" maxlength="10"
      aria-label="Input with max length 10" />
    <DvInput id="input-max-count-2" label="Max length and hint" placeholder="Max length 10 with hint" maxlength="10"
      aria-label="Input with max length 10 and hint" hint="Hint message as an example" />
  </div>
</template>

<script setup lang="ts">
import DvInput from '../DvInput.vue';
</script>