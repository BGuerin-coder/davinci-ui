<template>
  <component ref="headingRef" :is="as" class="dv-heading"
    :class="[`dv-heading--${as}`, { 'dv-heading--truncate': truncate }]" :title="truncate ? headingText : undefined">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  truncate?: boolean;
}

const props = withDefaults(defineProps<HeadingProps>(), {
  as: 'h1',
  truncate: false,
});

const headingRef = ref<HTMLElement | null>(null);
const headingText = ref<string>('');

watch(
  () => headingRef.value?.textContent,
  (text) => {
    if (props.truncate && text) {
      headingText.value = text;
    }
  },
  { immediate: true }
);

</script>
