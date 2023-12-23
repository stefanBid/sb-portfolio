<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import { MainLayout } from '@/components';
  import { FooterWrapper, HeaderWrapper } from '@/components';
  import { getTransition } from '@/utils/transition.utils';

  const transition = getTransition('scaleAndFade');
</script>

<template>
  <main-layout>
    <template #header>
      <header-wrapper />
    </template>
    <template #default>
      <router-view v-slot="{ Component }">
        <transition
          :enter-active-class="transition.enterActiveClass"
          :enter-from-class="transition.enterFromClass"
          :enter-to-class="transition.enterToClass"
          :leave-active-class="transition.leaveActiveClass"
          :leave-from-class="transition.leaveFromClass"
          :leave-to-class="transition.leaveToClass"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
    <template #footer>
      <footer-wrapper text="© 2023 Stefano Biddau. All rights reserved." />
    </template>
  </main-layout>
</template>
