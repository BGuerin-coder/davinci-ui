<template>
  <div class="davinci-input" :class="`davinci-input--${type}`" :aria-describedby="hintId || errorId">
    <label class="davinci-input__label" :for="computedId">
      {{ label }}
      <span v-if="isOptional" class="davinci-input__label--optional">
        (Optional)
      </span>
    </label>
    <!-- Input Wrapper -->
    <div class="davinci-input__wrapper">
      <!-- Icon Start -->
      <Icon v-if="icon && iconPosition === 'start'" :icon="`feather:${icon}`"
        class="davinci-input__icon davinci-input__icon--start" />
      <!-- Input Field -->
      <input v-bind="$attrs" :id="computedId" :type="type" :placeholder="props.placeholder" :aria-invalid="isInvalid"
        class="davinci-input__field" :class="addStateClasses()" @change="handleInput" />
      <!-- Icon End -->
      <Icon v-if="icon && iconPosition === 'end'" :icon="`feather:${icon}`"
        class="davinci-input__icon davinci-input__icon--end" />
    </div>
    <!--  Input Messages -->
    <div v-if="isInvalid || error" class="davinci-input__error-message">
      <Icon icon="feather:x-circle" class="davinci-input__error-icon" />
      <span :id="errorId">{{ error || "This field is required" }}</span>
    </div>
    <div v-else-if="hint" class="davinci-input__hint-message">
      <Icon icon="feather:info" class="davinci-input__hint-icon" />
      <span :id="hintId">{{ hint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref, useAttrs, useId } from "vue";
import "../../css/input.css";

defineOptions({ inheritAttrs: false });

export type InputProps = {
  id?: string;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  label?: string;
  hint?: string;
  error?: string;
  success?: boolean;
  placeholder?: string;
  icon?: string;
  iconPosition?: "start" | "end";
};

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  label: "",
  hint: "",
  error: "",
  success: false,
  placeholder: "",
  icon: "",
  iconPosition: "start",
});

const isInvalid = ref(false);

const generatedId = useId();

const computedId = computed(() => props.id ?? generatedId);
const hintId = computed(() => props.hint ? `hint-${computedId.value}` : undefined);
const errorId = computed(() => props.error ? `error-${computedId.value}` : undefined);

const attrs = useAttrs();
const isOptional = computed(() => hasAttributes("optional"));

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  isInvalid.value = !input.checkValidity();
};

const addStateClasses = () => {
  console.log('🚀 ~ addStateClasses ~ isInvalid.value:', isInvalid.value)
  console.log('🚀 ~ addStateClasses ~ props.error:', props.error)
  return {
    "davinci-input__field--invalid": isInvalid.value || props.error,
    "davinci-input__field--success": props.success,
    "davinci-input__field--error": props.error,
    "davinci-input__field--readonly": hasAttributes("readonly"),
    "davinci-input__field--disabled": hasAttributes("disabled"),
  };
};

const hasAttributes = (attributeName: string) => attributeName in attrs;
</script>
