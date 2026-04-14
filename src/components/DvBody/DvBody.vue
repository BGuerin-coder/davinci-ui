<template>
  <component :is="as" class="dv-body" :class="{ 'dv-body--lead': lead }">
    <slot />
  </component>
</template>

<script setup lang="ts">
import "../../css/body.css";

interface BodyProps {
  as?: 'p' | 'div' | 'span';
  lead?: boolean;
}

withDefaults(defineProps<BodyProps>(), {
  as: 'p',
  lead: false,
});
</script>
