<script setup lang="ts">
  import { IconWrapper } from '@/components';

  interface HeaderLogoProps {
    title?: string;
    linkTo: string;
    onChangeNavbarState: (newState: boolean) => void;
  }

  const props = withDefaults(defineProps<HeaderLogoProps>(), {
    title: 'Header Title',
  });
</script>

<template>
  <router-link
    :to="{ name: props.linkTo }"
    class="inline-flex items-center font-semibold leading-normal w-fit active:text-sb-sky-blue-200 hover:text-sb-sky-blue-100 hover:cursor-pointer gap-x-3"
    @click="props.onChangeNavbarState(false)"
  >
    <icon-wrapper
      icon="console"
      class="text-5xl transition-all duration-300 ease-in-out"
    />
    <span class="text-3xl transition-all duration-300 ease-in-out">
      {{ props.title }}
    </span>
  </router-link>
</template>
