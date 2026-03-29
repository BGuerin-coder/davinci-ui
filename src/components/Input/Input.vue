<template>
  <div class="davinci-input" :class="`davinci-input--${type}`">
    <label :for="computedId">{{ label }}</label>
    <input :type="type" placeholder="Enter text" :id="computedId" />
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue';
import "../../css/input.css";

export type InputProps = {
  id?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
  label?: string;
};

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  label: ''
});

const generatedId = useId();
const computedId = computed(() => props.id ?? generatedId);
</script>