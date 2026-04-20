<template>
  <component :is="as" class="dv-caption" v-bind="as === 'time' ? { datetime: attrs.datetime } : {}">
    <slot />
  </component>
</template>

<script setup lang="ts">
import "../../css/caption.css";
import { useAttrs } from 'vue';

interface CaptionProps {
  as?: 'span' | 'p' | 'time';
}

const props = withDefaults(defineProps<CaptionProps>(), {
  as: 'span',
});

const attrs = useAttrs();

// Validation: when as="time", datetime attribute should be provided
if (props.as === 'time' && !attrs.datetime) {
  console.warn('DvCaption: when as="time", the "datetime" attribute should be provided for machine-readable timestamp');
}
</script>
