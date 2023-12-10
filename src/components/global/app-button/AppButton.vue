<script setup lang="ts">
  import { generateId } from '@/utils/generateId.utils';
  import { IconWrapper, IconNameType } from '@/components';
  import { computed, useSlots } from 'vue';
  import { getButtonCss } from '@/styles/components-map-style/buttonStyle';

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

  // FEATRURE 1: Calculate button style and size based on props
  const buttonDynamicCss = computed(() => {
    let cssClass: string[] = [];
    if (props.variant !== 'none') {
      cssClass.push('hover:scale-110');
      cssClass.push(getButtonCss(props.variant, props.type));

      const slotElements = slots.default?.().length || 0;
      if (slotElements === 0) cssClass.push('p-1');
      else cssClass.push('px-4 py-2');

      if (slotElements >= 1 && (props.icon || props.isLoading)) {
        cssClass.push('inline-flex items-center gap-x-2');
      }
    }
    return cssClass.join(' ');
  });

  // FEATURE 2: Calculate button icon-name based on props
  const buttonDynamicIcon = computed(() => {
    let iconSettings: IconNameType | undefined = undefined;
    if (props.icon && !props.isLoading) iconSettings = props.icon;
    else if (props.isLoading) iconSettings = 'loading';
    return iconSettings;
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
      v-if="buttonDynamicIcon !== undefined"
      :icon="buttonDynamicIcon"
      :class="[
        slots.default?.().length ? 'text-2xl' : 'text-4xl',
        { 'animate-spin': buttonDynamicIcon === 'loading' },
      ]"
    />
  </button>
</template>
