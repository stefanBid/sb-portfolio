<script setup lang="ts">
  import { computed } from 'vue';
  import { BaseIcon } from '@/components';

  export interface LinkTo {
    name: string;
  }

  export interface HeaderLogoProps {
    title?: string;
    linkTo?: LinkTo;
  }

  const props = withDefaults(defineProps<HeaderLogoProps>(), {
    title: undefined,
    linkTo: undefined,
  });

  const commonCss = computed(() => {
    return {
      'transition-all duration-300 ease-in-out group-active:text-sb-sky-blue-200 group-hover:text-sb-sky-blue-100':
        props.linkTo !== undefined,
    };
  });
</script>

<template>
  <component
    :is="props.linkTo !== undefined ? 'router-link' : 'div'"
    :to="props.linkTo"
    class="inline-flex items-center group"
    :class="[
      {
        'hover:cursor-pointer': props.linkTo !== undefined,
      },
      {
        'gap-x-3 font-semibold leading-normal': props.title !== undefined,
      },
    ]"
  >
    <BaseIcon
      icon="Console"
      :class="[commonCss, 'text-5xl']"
    />
    <p :class="[commonCss, 'text-3xl']">
      {{ title }}
    </p>
  </component>
</template>
