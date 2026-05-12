<template>
  <component :is="as" class="dv-label" :class="{ 'dv-label--uppercase': uppercase }"
    v-bind="as === 'label' ? { for: attrs.for } : {}">
    <slot />
  </component>
</template>

<script setup lang="ts">
import "../../css/label.css";
import { useAttrs } from 'vue';

export interface DvLabelProps {
  as?: 'label' | 'span' | 'div';
  uppercase?: boolean;
}

const props = withDefaults(defineProps<DvLabelProps>(), {
  as: 'label',
  uppercase: false,
});

const attrs = useAttrs();

// Validation: when as="label", for attribute should be provided
if (props.as === 'label' && !attrs.for) {
  console.warn('DvLabel: when as="label", the "for" attribute should be provided to associate with an input element');
}
</script>
