<template>
  <div class="davinci-input" :class="`davinci-input--${type}`">
    <label class="davinci-input__label" :for="computedId">{{ label }}</label>
    <input class="davinci-input__field" :class="{
      'davinci-input__field--invalid': isInvalid
    }" :type="type" placeholder="Enter text" :id="computedId" v-bind="$attrs" @change="handleInput" />
    <div v-if="isInvalid || error" class="davinci-input__error-message">
      <Icon icon="feather:x-circle" class="davinci-input__error-icon" />
      <span>{{ error }}</span>
    </div>
    <div v-else-if="hint" class="davinci-input__hint-message">
      <Icon icon="feather:info" class="davinci-input__hint-icon" />
      <span>{{ hint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref, useId } from 'vue';
import "../../css/input.css";

defineOptions({ inheritAttrs: false });

export type InputProps = {
  id?: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
  state?: 'default' | 'error' | 'disabled' | 'success';
  label?: string;
  hint?: string;
  error?: string;
};

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  label: '',
  state: 'default',
  hint: '',
  error: '',
});

const isInvalid = ref(false);

const generatedId = useId();
const computedId = computed(() => props.id ?? generatedId);

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  isInvalid.value = !input.checkValidity();
};
</script>