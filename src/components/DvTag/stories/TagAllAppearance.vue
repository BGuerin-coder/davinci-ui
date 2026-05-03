<template>
  <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvTag appearance="outline" variant="brand">outline</DvTag>
      <DvTag appearance="filled" variant="brand">filled</DvTag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvTag appearance="outline" variant="success">outline</DvTag>
      <DvTag appearance="filled" variant="success">filled</DvTag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvTag appearance="outline" variant="danger">outline</DvTag>
      <DvTag appearance="filled" variant="danger">filled</DvTag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvTag appearance="outline" variant="warning">outline</DvTag>
      <DvTag appearance="filled" variant="warning">filled</DvTag>
    </div>
    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
      <DvTag appearance="outline" variant="neutral">outline</DvTag>
      <DvTag appearance="filled" variant="neutral">filled</DvTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import DvTag from '../DvTag.vue';
</script>