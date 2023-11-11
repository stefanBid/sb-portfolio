<script setup lang="ts">
  //FIXME: fixare uk problema del padding
  import { BaseIcon } from '@/components';
  import { IconName } from '@/types/icon.type';
  import { computed, useSlots } from 'vue';

  type ButtonKind = 'Primary' | 'Secondary';

  export interface BaseButtonProps {
    kind?: ButtonKind;
    type?: 'solid' | 'outline';
    icon?: IconName;
    disabled?: boolean;
  }

  const props = withDefaults(defineProps<BaseButtonProps>(), {
    kind: 'Primary',
    type: 'solid',
    icon: undefined,
    disabled: false,
  });

  defineOptions({ inheritAttrs: false });

  const slots = useSlots();

  const areMoreElementsInButtonWrapper = computed(() => {
    const defaultSlot = slots.default?.().length || 0;
    const iconCount = props.icon ? 1 : 0;
    return defaultSlot + iconCount > 1;
  });

  const buttonKindMap = {
    Primary: {
      solid: {
        class: 'bg-sb-sky-blue-100 text-black dark:text-white shadow-none',
        hover:
          'hover:bg-sb-sky-blue-200 hover:shadow-button hover:shadow-sb-sky-blue-200 ',
        active: 'active:bg-sb-sky-blue-300 active:shadow-sb-sky-blue-300',
      },
      outline: {
        class:
          'border border-2 border-sb-sky-blue-100 bg-transparent text-sb-sky-blue-100  shadow-none',
        hover:
          'hover:bg-sb-sky-blue-100 hover:text-black dark:hover:text-white hover:shadow-button hover:shadow-sb-sky-blue-100',
        active:
          'active:bg-sb-sky-blue-100 active:text-black dark:active:text-white active:shadow-button active:shadow-sb-sky-blue-100',
      },
    },
    Secondary: {
      solid: {
        class: '',
        hover: '',
        active: '',
      },
      outline: {
        class: '',
        hover: '',
        active: '',
      },
    },
  };
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="props.disabled"
    class="font-semibold transition-all duration-300 ease-in-out rounded-xl group disabled:opacity-40 disabled:cursor-not-allowed"
    :class="[
      buttonKindMap[props.kind][props.type].class,
      props.disabled ? '' : buttonKindMap[props.kind][props.type].hover,
      props.disabled ? '' : buttonKindMap[props.kind][props.type].active,
      areMoreElementsInButtonWrapper
        ? 'inline-flex items-center gap-x-2 px-4 py-2'
        : 'p-1',
      $attrs.class,
    ]"
  >
    <slot name="default" />
    <BaseIcon
      v-if="props.icon"
      :icon="props.icon"
      :class="areMoreElementsInButtonWrapper ? 'text-2xl text' : 'text-5xl'"
    />
  </button>
</template>
