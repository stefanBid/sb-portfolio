<script setup lang="ts">
  import { useSlots } from 'vue';
  import { useGlobalBreackPoints } from '../../../hooks/useGlobalBreackPoints';

  const { breakpoints } = useGlobalBreackPoints();
  const slots = useSlots();
</script>

<template>
  <header
    class="relative z-50 flex items-center justify-between flex-shrink-0 py-6 duration-300 ease-in-out"
    :class="[breakpoints.md ? 'p-[3%]' : 'p-[6%]']"
  >
    <template v-if="slots['header-logo']?.().length === 1">
      <slot name="header-logo" />
    </template>

    <template v-if="slots['header-menu-button']?.().length === 1">
      <slot name="header-menu-button" />
    </template>

    <template v-if="slots['header-navbar']?.().length === 1">
      <slot name="header-navbar" />
    </template>
  </header>
</template>
