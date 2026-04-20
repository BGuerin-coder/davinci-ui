<template>
  <div class="form-group">
    <DvLabel as="label" for="email">Email Address</DvLabel>
    <input id="email" type="email" placeholder="you@example.com" />
  </div>
  <div class="form-group">
    <DvLabel as="label" for="password">Password</DvLabel>
    <input id="password" type="password" placeholder="••••••••" />
  </div>
</template>

<script setup lang="ts">
import DvLabel from "../DvLabel.vue";
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
}

input {
  padding: 0.75rem;
  border: 1px solid var(--davinci-semantic-border-default);
  border-radius: 0.375rem;
  font-family: var(--davinci-text-font-main);
  font-size: var(--davinci-text-size-md);
}
</style>
