<script setup lang="ts">
  import { useGlobalBreackPoints } from '../../../hooks/useGlobalBreackPoints';
  const { breakpoints } = useGlobalBreackPoints();

  export interface LinkTo {
    name: string;
  }

  export interface HeaderNavBarItemProps {
    label?: string;
    linkTo?: LinkTo;
  }

  const props = withDefaults(defineProps<HeaderNavBarItemProps>(), {
    label: undefined,
    linkTo: undefined,
  });

  const emits = defineEmits(['toggleMenu']);
</script>

<template>
  <component
    :is="props.linkTo !== undefined ? 'router-link' : 'div'"
    :to="props.linkTo"
    class="text-lg duration-300 ease-in-out hover:text-sb-sky-blue-100 hover:dark:text-sb-sky-blue-100 hover:cursor-pointer"
    :class="{
      'block  py-6 px-[3%] mx-0 w-full hover:text-white hover:bg-sb-sky-blue-300 hover:dark:bg-sb-charcoal-100':
        breakpoints.sm,
    }"
    @click="emits('toggleMenu', false)"
  >
    {{ props.label }}
  </component>
</template>

<style scoped>
  a:hover {
    text-shadow: 0 0 1rem #00a6fb;
  }

  a.router-link-exact-active {
    color: #00a6fb;
    text-shadow: 0 0 1rem #00a6fb;
  }
</style>
