<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useGlobalBreackPoints } from '@/hooks/useGlobalBreackPoints';
  import { usePageTitle } from '@/hooks/usePageTitle';
  import { AppAccordionGroup, TwoTabsLayout, AppTitle } from '@/components';

  //breakpoints
  const { breakpoints } = useGlobalBreackPoints();
  //page title
  const { setPageTitle } = usePageTitle();

  onMounted(() => {
    setPageTitle('About Me');
  });
</script>

<template>
  <two-tabs-layout
    :is-medium-screen="breakpoints.md"
    :is-small-screen="breakpoints.sm"
    specular-tabs
    distance-between-tabs="large"
  >
    <template #left-side>
      <div
        class="flex flex-col justify-center"
        :class="[
          {
            'flex-1 items-start': !breakpoints.sm,
            'flex-none w-full items-center': breakpoints.sm,
          },
        ]"
      >
        <app-title
          text="About"
          prettyText="Me"
          size="xxl"
          class="my-2"
        />
        <AppAccordionGroup />
      </div>
    </template>

    <template #right-side>
      <img
        src="/profile.png"
        alt="Foto profilo"
        class="z-[-9999] transition-all duration-300 ease-in-out rounded-full bg-sb-sky-blue-100 animate-pulse-shadow shadow-sb-sky-blue-100 w-[300px] lg:w-[250px] sm:w-[200px]"
      />
    </template>
  </two-tabs-layout>
</template>
