<script setup lang="ts">
  import { Switch } from '@headlessui/vue';

  export interface ColorPalette {
    activeBg: string;
    inactiveBg: string;
    activeBgDot: string;
    inactiveBgDot: string;
  }

  export interface BaseSwitchProps {
    colorPalette?: ColorPalette;
    size?: 'sm' | 'md' | 'lg';
  }

  const props = withDefaults(defineProps<BaseSwitchProps>(), {
    colorPalette: () => ({
      activeBg: 'bg-sb-sky-blue-100',
      inactiveBg: 'bg-white',
      activeBgDot: 'bg-gray-700',
      inactiveBgDot: 'bg-yellow-500',
    }),
    size: 'md',
  });

  const modelValue = defineModel();

  const switchDimension = {
    sm: {
      width: 'w-10',
      height: 'h-5',
      dotWidth: 'w-4',
      dotHeight: 'h-4',
    },
    md: {
      width: 'w-14',
      height: 'h-7',
      dotWidth: 'w-6',
      dotHeight: 'h-6',
    },
    lg: {
      width: 'w-20',
      height: 'h-10',
      dotWidth: 'w-7',
      dotHeight: 'h-7',
    },
  };
</script>

<template>
  <div class="w-fit">
    <Switch
      v-model="modelValue"
      :class="[
        modelValue
          ? props.colorPalette.activeBg
          : props.colorPalette.inactiveBg,
        switchDimension[props.size].width,
        switchDimension[props.size].height,
      ]"
      class="relative inline-flex items-center transition-all duration-300 ease-in-out border-2 rounded-full cursor-pointer border-sb-sky-blue-100 hover:shadow-sb-sky-blue-100 hover:shadow-button shrink-0"
    >
      <span
        aria-hidden="true"
        class="inline-flex items-center justify-center transition-transform duration-200 ease-in-out rounded-full shadow-lg pointer-events-none ring-0"
        :class="[
          {
            'translate-x-5': props.size === 'sm' && modelValue,
            'translate-x-0.5': props.size === 'sm' && !modelValue,
          },
          {
            'translate-x-7': props.size === 'md' && modelValue,
            'translate-x-0.5': props.size === 'md' && !modelValue,
          },
          {
            'translate-x-11': props.size === 'lg' && modelValue,
            'translate-x-1': props.size === 'lg' && !modelValue,
          },
          modelValue
            ? props.colorPalette.activeBgDot
            : props.colorPalette.inactiveBgDot,
          switchDimension[props.size].dotWidth,
          switchDimension[props.size].dotHeight,
        ]"
      >
        <slot
          name="switch-active-icon"
          v-if="modelValue"
        />
        <slot
          name="switch-inactive-icon"
          v-else
        />
      </span>
    </Switch>
  </div>
</template>
