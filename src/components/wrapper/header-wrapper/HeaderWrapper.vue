<script setup lang="ts">
  import { ref, watch, onMounted } from 'vue';
  import { useGlobalBreackPoints } from '@/hooks';
  import { useColorMode } from '@vueuse/core';
  import { AppSwitch } from '@/components';
  import { HeaderLayout } from '@/components';
  import type { NavBarItem } from '@/components';
  import HeaderLogo from './components/HeaderLogo.vue';
  import HeaderMenuButton from './components/HeaderMenuButton.vue';

  //Feature 1: Responsive Navbar
  //breakpoints
  const { breakpoints } = useGlobalBreackPoints();

  //open-close menu management
  const isOpen = ref(false);

  //navbar items
  const NAV_BAR_ITEMS = [
    {
      displayName: 'Home',
      routerName: 'home',
    },
    {
      displayName: 'About',
      routerName: 'about',
    },
    {
      displayName: 'Skills',
      routerName: 'skills',
    },
    {
      displayName: 'Projects',
      routerName: 'projects',
    },
  ] as NavBarItem[];

  const isDark = ref(true);
  const mode = useColorMode();

  const toggleMenu = (newState: boolean) => {
    if (breakpoints.value.sm) {
      isOpen.value = newState;
      //console.log('toggleMenu', isOpen.value, newState);
    }
  };

  watch(
    [() => isDark.value, () => breakpoints.value.sm],
    ([newIsDark, newBreakpointSm], [oldIsDark, oldBreakpointSm]) => {
      // Check if the change is in isDark.value
      if (newIsDark !== oldIsDark) {
        mode.value = newIsDark ? 'dark' : 'light';
      }

      // Check if the change is in breakpoints.value.sm
      if (newBreakpointSm !== oldBreakpointSm) {
        if (!newBreakpointSm) {
          isOpen.value = false;
        }
      }
    },
    { immediate: true },
  );

  onMounted(() => {
    mode.value = 'dark';
  });
</script>

<template>
  <header-layout
    :is-navbar-open="isOpen"
    :is-medium-screen="breakpoints.md"
    :is-small-screen="breakpoints.sm"
    :navbar-items="NAV_BAR_ITEMS"
    @change-navbar-state="newState => toggleMenu(newState)"
  >
    <template #header-logo>
      <header-logo
        title="Stefano Biddau"
        link-to="home"
        @change-navbar-state="newState => toggleMenu(newState)"
      />
    </template>

    <template #header-menu-button>
      <header-menu-button
        :is-navbar-open="isOpen"
        @change-navbar-state="newState => toggleMenu(newState)"
      />
    </template>
    <template #header-navbar-extra>
      <app-switch
        id="theme-switch"
        v-model="isDark"
        activeDotColor="charcoal"
        inactiveDotColor="yellow"
        :activeSwitchIcon="'moon'"
        :inactiveSwitchIcon="'sun'"
      />
    </template>
  </header-layout>
</template>
