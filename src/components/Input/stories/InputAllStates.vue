<template>
  <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; padding: 16px;">
    <DvInput id="all-states-hint-input" type="text" label="Hint" aria-label="Hint input" hint="Hint as an example"
      placeholder="Hint input" />
    <DvInput id="all-states-error-input" type="text" label="Error" aria-label="Error input"
      error="Error message as an example" placeholder="Error input" />
    <DvInput id="all-states-readonly-input" type="text" label="Read only" aria-label="Read only input" readonly
      placeholder="Read only input" model-value="Read only input" />
    <DvInput id="all-states-disabled-input" type="text" label="Disabled" aria-label="Disabled input" disabled
      placeholder="Disabled input" model-value="Disabled input" />
    <DvInput id="all-states-success-input" type="text" label="Success" aria-label="Success input" success
      placeholder="Success input" />
    <DvInput id="all-states-default-input" type="text" label="Default" aria-label="Default input" optional
      placeholder="Optional input" />
    <DvInput id="all-states-required-input" type="text" label="Required" aria-label="Required input" required
      placeholder="Required input" />
  </div>
</template>

<script setup lang="ts">
import DvInput from "../DvInput.vue";
</script>