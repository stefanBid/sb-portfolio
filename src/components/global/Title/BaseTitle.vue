<script setup lang="ts">
  import { useSlots, computed, useAttrs } from 'vue';

  const attrs = useAttrs();
  const slots = useSlots();

  export interface BaseTitleProps {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    type?: 'simple' | 'pretty' | 'forLink';
    linkTo?: Object;
  }

  const props = withDefaults(defineProps<BaseTitleProps>(), {
    size: 'md',
    type: 'simple',
  });

  const areMoreSlots = computed(() => {
    const defaultSlot = slots.default?.().length || 0;
    const prettySlot = slots.pretty?.().length || 0;
    return defaultSlot + prettySlot > 1 ? true : false;
  });
</script>

<template>
  <component
    :is="props.type === 'forLink' ? 'router-link' : 'div'"
    :to="props.type === 'forLink' ? props.linkTo : undefined"
    class="inline-flex items-center font-semibold leading-normal w-fit group"
    :class="[
      attrs.class,
      { 'transition-all duration-300 ease-in-out': props.type !== 'forLink' },
      { 'text-5xl': props.size === 'xxl', 'text-3xl': props.size === 'xl' },
      { 'gap-x-3': areMoreSlots },
      { 'hover:cursor-pointer ': props.type === 'forLink' },
    ]"
  >
    <slot name="default" />

    <span
      v-if="props.type === 'pretty'"
      class="inline-flex items-center text-sb-sky-blue-100"
      :class="[{ 'gap-x-3': areMoreSlots }]"
    >
      <slot name="pretty" />
    </span>
  </component>
</template>
