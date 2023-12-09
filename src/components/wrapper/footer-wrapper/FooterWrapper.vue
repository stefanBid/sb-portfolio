<script setup lang="ts">
  import { FooterLayout } from '@/components';

  interface AppFooterProps {
    text: string;
  }

  const props = withDefaults(defineProps<AppFooterProps>(), {
    text: 'Footer Content',
  });
</script>

<template>
  <footer-layout>
    <template #default>
      <p class="text-sm text-sb-sky-blue-100">
        {{ props.text }}
      </p>
    </template>
  </footer-layout>
</template>
