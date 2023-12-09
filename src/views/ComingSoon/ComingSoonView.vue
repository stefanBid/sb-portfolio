<script setup lang="ts">
  import { IconWrapper } from '@/components';
  import { usePageTitle } from '@/hooks';
  import { onMounted } from 'vue';

  const { setPageTitle } = usePageTitle();

  onMounted(() => {
    setPageTitle('Coming Soon');
  });
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-full">
    <icon-wrapper
      icon="worker"
      class="mb-4 w-36 h-36 text-sb-sky-blue-100 animate-pulse"
    />
    <h1 class="text-4xl font-bold">Coming Soon</h1>
    <p class="text-xl">This page is under construction</p>
  </div>
</template>
