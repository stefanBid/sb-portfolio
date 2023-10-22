<script setup lang="ts">
  import { computed, useAttrs, useSlots } from 'vue';

  export interface BaseButtonProps {
    type?: 'primary' | 'outline';
    rounded?: boolean;
    isDisabled?: boolean;
  }

  const props = withDefaults(defineProps<BaseButtonProps>(), {
    type: 'primary',
    rounded: false,
    isDisabled: false,
  });

  const attrs = useAttrs();
  const slots = useSlots();

  const areMoreElementInSlot = computed(() => {
    const defaultSlot = slots.default?.().length || 0;
    return defaultSlot > 1 ? true : false;
  });

  const buttonClasses = computed(() => {
    return {
      'bg-sb-sky-blue-100 text-black dark:text-white hover:bg-sb-sky-blue-200 active:bg-sb-sky-blue-300 hover:shadow-button hover:shadow-sb-sky-blue-200 active:shadow-sb-sky-blue-300 shadow-none':
        props.type === 'primary',
      'border border-2 border-sb-sky-blue-100 bg-transparent text-sb-sky-blue-100 hover:bg-sb-sky-blue-100 hover:text-black dark:hover:text-white shadow-none hover:shadow-button hover:shadow-sb-sky-blue-100':
        props.type === 'outline',
      'rounded-full p-1': props.rounded,
      'rounded-md px-4 py-2': !props.rounded,
    };
  });
</script>

<template>
  <button
    class="font-semibold transition-all duration-300 ease-in-out group"
    :class="[
      buttonClasses,
      { 'inline-flex items-center gap-x-2': areMoreElementInSlot },
      attrs.class,
    ]"
  >
    <slot name="default" />
  </button>
</template>
