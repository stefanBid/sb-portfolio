<script setup lang="ts">
  import { BaseIcon } from '@/components';
  import { useGlobalBreackPoints } from '@/hooks/useGlobalBreackPoints';
  const { breakpoints } = useGlobalBreackPoints();

  interface HeaderOpenCloseMenuProps {
    isOpen: boolean;
  }

  const props = defineProps<HeaderOpenCloseMenuProps>();

  const emits = defineEmits(['toggleMenu']);
</script>

<template>
  <div v-show="breakpoints.sm">
    <BaseIcon
      :icon="props.isOpen ? 'XClose' : 'HamburgerMenu'"
      :class="{
        'active:rotate-90': props.isOpen,
        'active:-rotate-90': !props.isOpen,
      }"
      class="text-4xl duration-200 ease-in-out cursor-pointer active:-rotate-90 w-icon-xl h-icon-xl hover:text-sb-sky-blue-100"
      @click="emits('toggleMenu', props.isOpen ? false : true)"
    />
  </div>
</template>
