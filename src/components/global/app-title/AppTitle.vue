<script setup lang="ts">
  export interface BaseTitleProps {
    text: string;
    prettyText?: string;
    size?: 'xl' | 'xxl';
  }

  const props = withDefaults(defineProps<BaseTitleProps>(), {
    prettyText: undefined,
    size: 'xl',
  });
</script>

<template>
  <span
    class="inline-flex items-center font-semibold leading-normal transition-all duration-300 ease-in-out gap-x-2 w-fit group"
    :class="[
      $attrs.class,
      { 'text-5xl': props.size === 'xxl', 'text-3xl': props.size === 'xl' },
    ]"
  >
    {{ props.text }}

    <span
      v-if="props.prettyText"
      class="text-sb-sky-blue-100"
    >
      {{ props.prettyText }}
    </span>
  </span>
</template>
