<template>
  <component :is="as" class="dv-heading" :class="`dv-heading--${as}`">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const props = withDefaults(defineProps<HeadingProps>(), {
  as: 'h1',
});
</script>
