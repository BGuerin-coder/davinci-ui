<template>
    <div style="display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <DvInput id="label-variants-with-label" label="Email" placeholder="name@example.com" aria-label="Email" />
        <DvInput id="label-variants-no-label" label="Email without label" placeholder="name@example.com"
            aria-label="Email" hideLabel />
    </div>
</template>

<script setup lang="ts">
import DvInput from "../DvInput.vue";
</script>