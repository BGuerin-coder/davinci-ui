<template>
  <div class="davinci-input" :class="`davinci-input--${type}`">
    <label class="davinci-input__label" :for="computedId">
      {{ label }}
      <span v-if="hasAttributes($attrs, ['optional'])" class="davinci-input__label--optional">(Optional)</span>
    </label>
    <input class="davinci-input__field" :class="addStateClasses($attrs)" :type="type" placeholder="Enter text"
      :id="computedId" v-bind="$attrs" @change="handleInput" />
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
import { computed, ref, useId, type Attrs } from 'vue';
import "../../css/input.css";

defineOptions({ inheritAttrs: false });

export type InputProps = {
  id?: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url';
  label?: string;
  hint?: string;
  error?: string;
  success?: boolean;
};

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  label: '',
  hint: '',
  error: '',
  success: false,
});

const isInvalid = ref(false);

const generatedId = useId();
const computedId = computed(() => props.id ?? generatedId);

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  isInvalid.value = !input.checkValidity();
};

const addStateClasses = (attrs: Attrs) => {
  return {
    'davinci-input__field--invalid': isInvalid.value || props.error,
    'davinci-input__field--success': props.success,
    'davinci-input__field--readonly': hasAttributes(attrs, ['readonly']),
    'davinci-input__field--disabled': hasAttributes(attrs, ['disabled']),
  };
};

const hasAttributes = (attrs: Attrs, attributeNames: string[]) => {
  return attributeNames.some(attr => attr in attrs);
};
</script>