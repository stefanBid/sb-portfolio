<script setup lang="ts">
  import { BaseIcon } from '@/components';
  import { IconName } from '@/types/icon.type';
  import { computed, useSlots } from 'vue';

  type ButtonVariant = 'Primary' | 'Secondary';

  export interface BaseButtonProps {
    variant?: ButtonVariant;
    type?: 'solid' | 'outline';
    size?: 'square' | 'rectangle';
    icon?: IconName;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<BaseButtonProps>(), {
    variant: 'Primary',
    type: 'solid',
    size: 'rectangle',
    icon: undefined,
    disabled: false,
  });

  defineOptions({ inheritAttrs: false });

  const slots = useSlots();

  const buttonKindMap = {
    Primary: {
      solid: `
        border-2 border-sb-sky-blue-100 bg-sb-sky-blue-100 text-black dark:text-white shadow-none
        hover:bg-sb-sky-blue-200 hover:shadow-button hover:shadow-sb-sky-blue-200
        active:bg-sb-sky-blue-300 active:shadow-sb-sky-blue-300`,
      outline: `
        border-2 border-sb-sky-blue-100 bg-transparent text-sb-sky-blue-100 shadow-none
        hover:bg-sb-sky-blue-200 hover:text-black dark:hover:text-white hover:shadow-button hover:shadow-sb-sky-blue-100
        active:bg-sb-sky-blue-300 active:text-black dark:active:text-white active:shadow-button active:shadow-sb-sky-blue-100`,
    },
    Secondary: {
      solid: '',
      outline: '',
    },
  };

  const countSlotElements = (): number => {
    const defaultSlot = slots.default?.().length || 0;
    const iconCount = props.icon ? 1 : 0;
    return defaultSlot + iconCount;
  };

  const buttonDynamicCss = computed(() => {
    let cssClass: string[] = [];

    cssClass.push(buttonKindMap[props.variant][props.type]);

    props.size === 'rectangle'
      ? cssClass.push('px-4 py-2')
      : cssClass.push('p-1');

    if (countSlotElements() > 1) {
      cssClass.push('inline-flex items-center gap-x-2');
    }
    return cssClass;
  });
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="props.disabled"
    class="font-semibold transition-all duration-300 ease-in-out rounded-xl group disabled:pointer-events-none disabled:opacity-40 hover:scale-110"
    :class="[buttonDynamicCss, $attrs.class]"
  >
    <span class="text-xl">
      <slot name="default" />
    </span>
    <BaseIcon
      v-if="props.icon"
      :icon="props.icon"
      :class="countSlotElements() !== 1 ? 'text-2xl' : 'text-4xl'"
    />
  </button>
</template>
