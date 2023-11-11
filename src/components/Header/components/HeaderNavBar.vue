<script setup lang="ts">
  import { useGlobalBreackPoints } from '../../../hooks/useGlobalBreackPoints';

  export interface HeaderSkeletonProps {
    isOpen: boolean;
  }

  const props = defineProps<HeaderSkeletonProps>();
  const { breakpoints } = useGlobalBreackPoints();
</script>

<template>
  <nav
    class="duration-300 ease-in-out"
    :class="{
      'bg-inherit flex items-center gap-x-8': !breakpoints.sm,
      'absolute top-full bg-white dark:bg-sb-charcoal-200 w-full h-fit':
        breakpoints.sm,
      'left-0 shadow-header shadow-sb-sky-blue-300 ':
        props.isOpen && breakpoints.sm,
      '-left-full shadow-none': !props.isOpen && breakpoints.sm,
    }"
  >
    <slot />
  </nav>
</template>
