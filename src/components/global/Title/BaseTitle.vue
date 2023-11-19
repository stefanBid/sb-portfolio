<script setup lang="ts">
  import { useAttrs } from 'vue';

  const attrs = useAttrs();

  export interface BaseTitleProps {
    text: string;
    prettyText?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  }

  const props = withDefaults(defineProps<BaseTitleProps>(), {
    prettyText: undefined,
    size: 'md',
  });
</script>

<template>
  <div
    class="inline-flex items-center font-semibold leading-normal transition-all duration-300 ease-in-out gap-x-3 w-fit group"
    :class="[
      attrs.class,
      { 'text-5xl': props.size === 'xxl', 'text-3xl': props.size === 'xl' },
    ]"
  >
    <span> {{ props.text }} </span>

    <span
      v-if="props.prettyText"
      class="inline-flex items-center text-sb-sky-blue-100"
    >
      {{ props.prettyText }}
    </span>
  </div>
</template>
