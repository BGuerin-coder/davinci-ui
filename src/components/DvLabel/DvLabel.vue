<template>
  <component :is="as" class="dv-label" :class="{ 'dv-label--uppercase': uppercase }" :for="for">
    <slot />
  </component>
</template>

<script setup lang="ts">
import "../../css/label.css";

interface LabelProps {
  as?: 'label' | 'span' | 'div';
  uppercase?: boolean;
  for?: string;
}

withDefaults(defineProps<LabelProps>(), {
  as: 'label',
  uppercase: false,
  for: undefined,
});
</script>
