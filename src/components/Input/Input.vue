<template>
  <div class="davinci-input" :class="`davinci-input--${type}`" :aria-describedby="hintId || errorId">
    <DvLabel 
      v-if="!hideLabel" 
      as="label" 
      :for="computedId" 
      class="davinci-input__label"
      :class="{ 'davinci-input__label--disabled': hasAttributes('disabled') }"
    >
      {{ label }}
      <span v-if="isOptional" class="davinci-input__label--optional">
        (Optional)
      </span>
    </DvLabel>
    <!-- Input Wrapper -->
    <div class="davinci-input__wrapper">
      <!-- Icon Start -->
      <Icon v-if="icon && iconPosition === 'start'" :icon="`feather:${icon}`"
        class="davinci-input__icon davinci-input__icon--start" aria-hidden="true" />
      <!-- Input Field -->
      <input v-bind="$attrs" :id="computedId" :type="type" :value="props.modelValue" :placeholder="props.placeholder"
        :aria-invalid="isInvalid || !!props.error" class="davinci-input__field" :class="addStateClasses()"
        @change="handleChange" @input="handleInput" />
      <!-- Icon End -->
      <Icon v-if="icon && iconPosition === 'end'" :icon="`feather:${icon}`"
        class="davinci-input__icon davinci-input__icon--end" aria-hidden="true" />
    </div>
    <!--  Input Messages -->
    <DvCaption as="span" v-if="isInvalid || error" class="davinci-input__error-message" role="alert">
      <Icon icon="feather:x-circle" class="davinci-input__error-icon" aria-hidden="true" />
      <span :id="errorId">{{ error || "This field is required" }}</span>
    </DvCaption>
    <DvCaption as="span" v-else-if="hint || hasAttributes('maxlength')" class="davinci-input__hint-message"
      aria-live="polite">
      <Icon v-if="hint" icon="feather:info" class="davinci-input__hint-icon" aria-hidden="true" />
      <span :id="hintId">{{ hint }}</span>
      <span v-if="hasAttributes('maxlength')" class="davinci-input__hint-message--maxlength" :id="hintId">
        {{ currentLength }}/{{ $attrs.maxlength }}
      </span>
    </DvCaption>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref, useAttrs, useId } from "vue";
import DvLabel from "../DvLabel/DvLabel.vue";
import DvCaption from '../DvCaption/DvCaption.vue';

import "../../css/input.css";

defineOptions({ inheritAttrs: false });

export type InputProps = {
  label: string;
  modelValue?: string;
  id?: string;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  hint?: string;
  error?: string;
  success?: boolean;
  placeholder?: string;
  icon?: string;
  iconPosition?: "start" | "end";
  hideLabel?: boolean;
};

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: "",
  type: "text",
  hint: "",
  error: "",
  success: false,
  placeholder: "",
  icon: "",
  iconPosition: "start",
  hideLabel: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const isInvalid = ref(false);
const currentLength = ref(0);

const generatedId = useId();

const computedId = computed(() => props.id ?? generatedId);
const hintId = computed(() => props.hint ? `hint-${computedId.value}` : undefined);
const errorId = computed(() => props.error ? `error-${computedId.value}` : undefined);

const attrs = useAttrs();
const isOptional = computed(() => hasAttributes("optional"));

const handleChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  isInvalid.value = !input.checkValidity();
};

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  currentLength.value = input.value.length;
  emit("update:modelValue", input.value);
};

const addStateClasses = () => {
  return {
    "davinci-input__field--invalid": isInvalid.value || props.error,
    "davinci-input__field--success": props.success,
    "davinci-input__field--error": props.error,
    "davinci-input__field--readonly": hasAttributes("readonly"),
    "davinci-input__field--disabled": hasAttributes("disabled"),
    "davinci-input__field--maxlength": hasAttributes("maxlength"),
  };
};

const hasAttributes = (attributeName: string) => attributeName in attrs;
</script>
