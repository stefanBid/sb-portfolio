<script setup lang="ts">
  import { AppButton } from '@/components';

  interface HeaderMenuButtonProps {
    isNavbarOpen: boolean;
    onChangeNavbarState: (newState: boolean) => void;
  }

  const props = defineProps<HeaderMenuButtonProps>();
</script>

<template>
  <app-button
    class="text-5xl hover:text-sb-sky-blue-100"
    :class="{
      'scale-x-90': !props.isNavbarOpen,
      '-scale-x-90': props.isNavbarOpen,
    }"
    :icon="props.isNavbarOpen ? 'menuOpen' : 'menuClose'"
    @click="props.onChangeNavbarState(!props.isNavbarOpen)"
  />
</template>
