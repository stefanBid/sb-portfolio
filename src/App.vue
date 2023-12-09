<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { MainLayout } from '@/components';
  import { FooterWrapper, HeaderWrapper } from '@/components';
</script>

<template>
  <main-layout>
    <template #header>
      <header-wrapper />
    </template>
    <template #default>
      <router-view />
    </template>
    <template #footer>
      <footer-wrapper text="© 2023 Stefano Biddau. All rights reserved." />
    </template>
  </main-layout>
</template>
