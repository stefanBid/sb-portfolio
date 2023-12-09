<script setup lang="ts">
  import { LayoutComponentProps } from '@/components/layout/types';

  const props = defineProps<LayoutComponentProps>();
</script>

<template>
  <div
    class="min-h-full py-[3%] transition-all duration-300 ease-in-out"
    :class="[
      props.isMediumScreen ? 'px-[3%]' : 'px-[6%]',
      props.isSmallScreen
        ? 'flex flex-col-reverse justify-center items-center gap-y-10'
        : 'flex justify-between items-center gap-x-10',
    ]"
  >
    <slot name="left-side" />
    <slot name="right-side" />
  </div>
</template>
