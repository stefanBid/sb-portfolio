<script setup lang="ts">
  import { generateId } from '@/utils/generateId.utils';
  import { IconWrapper, IconNameType } from '@/components';
  import { computed, useSlots } from 'vue';

  /* ---- TYPES ---- */
  type ButtonVariantType = 'primary' | 'secondary' | 'none';
  type ButtonKindType = 'solid' | 'outline';

  /* ---- INTERFACES ---- */
  interface AppButtonProps {
    id?: string;
    variant?: ButtonVariantType;
    type?: ButtonKindType;
    icon?: IconNameType;
    isLoading?: boolean;
  }

  /* ---- PROPS ---- */
  const props = withDefaults(defineProps<AppButtonProps>(), {
    id: () => generateId(),
    variant: 'none',
    type: 'solid',
    icon: undefined,
    isLoading: false,
  });

  /* ---- DATA ---- */
  const slots = useSlots();

  const BUTTON_CSS_MAP = {
    primary: {
      solid: `
            border-2 border-sb-sky-blue-100 bg-sb-sky-blue-100 text-black dark:text-white shadow-none
            hover:bg-sb-sky-blue-200 hover:shadow-button hover:shadow-sb-sky-blue-200
            active:bg-sb-sky-blue-300 active:shadow-sb-sky-blue-300`,
      outline: `
            border-2 border-sb-sky-blue-100 bg-transparent text-sb-sky-blue-100 shadow-none
            hover:bg-sb-sky-blue-200 hover:text-black dark:hover:text-white hover:shadow-button hover:shadow-sb-sky-blue-100
            active:bg-sb-sky-blue-300 active:text-black dark:active:text-white active:shadow-button active:shadow-sb-sky-blue-100`,
    },
    secondary: {
      solid: '',
      outline: '',
    },
  };

  // FEATRURE 1: Calculate button style and size based on props
  const buttonDynamicCss = computed(() => {
    let cssClass: string[] = [];
    if (props.variant !== 'none') {
      cssClass.push('hover:scale-110');
      const slotElements = slots.default?.().length || 0;

      cssClass.push(BUTTON_CSS_MAP[props.variant][props.type]);

      if (slotElements === 0) cssClass.push('p-1');
      else cssClass.push('px-4 py-2');

      if (slotElements >= 1 && (props.icon || props.isLoading)) {
        cssClass.push('inline-flex items-center gap-x-2');
      }
    }
    return cssClass;
  });
</script>

<template>
  <button
    :id="props.id"
    :disabled="props.isLoading"
    class="font-semibold transition-all duration-300 ease-in-out rounded-xl group disabled:pointer-events-none disabled:opacity-40"
    :class="[buttonDynamicCss, $attrs.class]"
  >
    <span class="text-xl">
      <slot name="default" />
    </span>
    <icon-wrapper
      v-if="props.icon && !props.isLoading"
      :icon="props.icon"
      :class="slots.default?.().length ? 'text-2xl' : 'text-4xl'"
    />
    <icon-wrapper
      v-else-if="props.isLoading"
      icon="loading"
      class="animate-spin"
      :class="slots.default?.().length ? 'text-2xl' : 'text-4xl'"
    />
  </button>
</template>
