<template>
  <component :is="as" class="dv-body" :class="{ 'dv-body--lead': lead }">
    <slot />
  </component>
</template>

<script setup lang="ts">

export interface DvBodyProps {
  as?: 'p' | 'div' | 'span';
  lead?: boolean;
}

withDefaults(defineProps<DvBodyProps>(), {
  as: 'p',
  lead: false,
});
</script>
