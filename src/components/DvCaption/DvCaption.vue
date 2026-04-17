<template>
  <component :is="as" class="dv-caption">
    <slot />
  </component>
</template>

<script setup lang="ts">
import "../../css/caption.css";

interface CaptionProps {
  as?: 'span' | 'p' | 'time';
}

const props = withDefaults(defineProps<CaptionProps>(), {
  as: 'span',
});
</script>
