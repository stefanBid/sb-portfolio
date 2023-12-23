<script setup lang="ts">
  import { LayoutComponentProps } from '@/components/layout/types';

  interface TwoTabsLayoutProps extends LayoutComponentProps {
    distanceBetweenTabs?: 'medium' | 'large';
    specularTabs?: boolean;
  }

  const props = withDefaults(defineProps<TwoTabsLayoutProps>(), {
    distanceBetweenTabs: 'medium',
    specularTabs: false,
  });
</script>

<template>
  <div
    class="min-h-full py-[3%] transition-all duration-300 ease-in-out"
    :class="[
      { 'px-[3%]': props.isMediumScreen || props.isSmallScreen },
      { 'px-[6%]': !props.isMediumScreen && !props.isSmallScreen },
      { flex: !props.isSmallScreen && !props.specularTabs },
      { 'flex flex-row-reverse': !props.isSmallScreen && props.specularTabs },
      {
        'flex flex-col-reverse justify-center items-center':
          props.isSmallScreen,
      },
      { 'justify-between items-center': !props.isSmallScreen },
      {
        'gap-x-20':
          props.distanceBetweenTabs === 'medium' && !props.isSmallScreen,
      },
      {
        'gap-x-40':
          props.distanceBetweenTabs === 'large' && !props.isSmallScreen,
      },
      {
        'gap-y-20': props.isSmallScreen,
      },
    ]"
  >
    <slot name="left-side" />
    <slot name="right-side" />
  </div>
</template>
