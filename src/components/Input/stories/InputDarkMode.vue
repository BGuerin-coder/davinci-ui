<template>
    <div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--davinci-color-bg-base); padding: 16px;"
        data-theme="dark">
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <Input id="dark-default-input" type="text" label="Default" placeholder="Default input"
                aria-label="Default input" />
            <Input id="dark-hint-input" type="text" label="Hint" hint="Hint as an example" placeholder="Hint input"
                aria-label="Hint input" />
            <Input id="dark-error-input" type="text" label="Error" error="Error message as an example"
                placeholder="Error input" aria-label="Error input" />
            <Input id="dark-success-input" type="text" label="Success" :success="true" placeholder="Success input"
                aria-label="Success input" />
            <Input id="dark-disabled-input" type="text" label="Disabled" disabled placeholder="Disabled input"
                aria-label="Disabled input" />
            <Input id="dark-icon-input" type="search" label="With icon" icon="search" iconPosition="start"
                placeholder="Search…" aria-label="Search" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from "../Input.vue";
</script>
