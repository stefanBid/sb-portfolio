<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import TheHeader from './components/Header/TheHeader.vue';
  import TheFooter from './components/Footer/TheFooter.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <main class="flex-grow overflow-x-hidden overflow-y-auto">
      <RouterView />
      <TheFooter />
    </main>
  </div>
</template>
