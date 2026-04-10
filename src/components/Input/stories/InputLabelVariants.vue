<template>
    <div style="display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; padding: 16px;">
        <Input id="label-variants-with-label" label="Email" placeholder="name@example.com" aria-label="Email" />
        <Input id="label-variants-no-label" label="Email without label" placeholder="name@example.com"
            aria-label="Email" hideLabel />
    </div>
</template>

<script setup lang="ts">
import Input from "../Input.vue";
</script>