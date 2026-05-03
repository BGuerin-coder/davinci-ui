<template>
    <div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
        data-theme="dark">
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <DvInput id="dark-default-input" type="text" label="Default" placeholder="Default input"
                aria-label="Default input" />
            <DvInput id="dark-hint-input" type="text" label="Hint" hint="Hint as an example" placeholder="Hint input"
                aria-label="Hint input" />
            <DvInput id="dark-error-input" type="text" label="Error" error="Error message as an example"
                placeholder="Error input" aria-label="Error input" />
            <DvInput id="dark-success-input" type="text" label="Success" :success="true" placeholder="Success input"
                aria-label="Success input" />
            <DvInput id="dark-disabled-input" type="text" label="Disabled" disabled placeholder="Disabled input"
                aria-label="Disabled input" />
            <DvInput id="dark-icon-input" type="search" label="With icon" icon="search" iconPosition="start"
                placeholder="Search…" aria-label="Search" />
        </div>
    </div>
</template>

<script setup lang="ts">
import DvInput from "../DvInput.vue";
</script>
