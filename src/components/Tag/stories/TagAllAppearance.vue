<template>
  <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Tag appearance="outline" variant="brand">outline</Tag>
      <Tag appearance="filled" variant="brand">filled</Tag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Tag appearance="outline" variant="success">outline</Tag>
      <Tag appearance="filled" variant="success">filled</Tag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Tag appearance="outline" variant="error">outline</Tag>
      <Tag appearance="filled" variant="error">filled</Tag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Tag appearance="outline" variant="warning">outline</Tag>
      <Tag appearance="filled" variant="warning">filled</Tag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <Tag appearance="outline" variant="neutral">outline</Tag>
      <Tag appearance="filled" variant="neutral">filled</Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from '../Tag.vue';
</script>