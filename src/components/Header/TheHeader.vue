<script setup lang="ts">
  import { ref, computed, watch, onMounted } from 'vue';
  import { useGlobalBreackPoints } from '../../hooks/useGlobalBreackPoints';
  import { useColorMode } from '@vueuse/core';
  import { BaseSwitch } from '@/components';
  import HeaderSkeleton from './components/HeaderSkeleton.vue';
  import HeaderLogo from './components/HeaderLogo.vue';
  import HeaderMenuButton from './components/HeaderMenuButton.vue';
  import HeaderNavBar from './components/HeaderNavBar.vue';
  import HeaderNavBarItem from './components/HeaderNavBarItem.vue';

  //Feature 1: Responsive Navbar
  //breakpoints
  const { breakpoints } = useGlobalBreackPoints();

  //open-close menu management
  const isOpen = ref(false); //false = hamburger-icon, true = close-icon

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
  ] as const;

  const isOpenMenu = computed(() => {
    if (!breakpoints.value.sm) isOpen.value = false;
    return isOpen.value;
  });

  //close menu when a page is selected
  const toggleMenuWithPage = ($event: boolean) => {
    if (breakpoints.value.sm) isOpen.value = $event;
  };
  //close menu when the menu button is clicked
  const toggleMenuWithButton = ($event: boolean) => {
    isOpen.value = $event;
  };

  // Feature 2: Theme Switch
  const isDark = ref(true);
  const mode = useColorMode();

  watch(isDark, (newValue: boolean) => {
    mode.value = newValue ? 'dark' : 'light';
  });

  onMounted(() => {
    mode.value = 'dark';
  });
</script>

<template>
  <HeaderSkeleton>
    <template #header-logo>
      <HeaderLogo
        title="Stefano Biddau"
        :linkTo="{ name: NAV_BAR_ITEMS[0].routerName }"
      />
    </template>

    <template #header-menu-button>
      <HeaderMenuButton
        :isOpen="isOpenMenu"
        @toggle-menu="toggleMenuWithButton"
      />
    </template>

    <template #header-navbar>
      <HeaderNavBar :isOpen="isOpenMenu">
        <HeaderNavBarItem
          v-for="item in NAV_BAR_ITEMS"
          :key="item.routerName"
          :label="item.displayName"
          :linkTo="{ name: item.routerName }"
          @toggle-menu="toggleMenuWithPage"
        />

        <div
          :class="{
            'block py-6 px-[3%] mx-0 w-full': breakpoints.sm,
          }"
        >
          <BaseSwitch
            v-model="isDark"
            kind="changeTheme"
            :activeSwitchIcon="'Moon'"
            :inactiveSwitchIcon="'Sun'"
          />
        </div>
      </HeaderNavBar>
    </template>
  </HeaderSkeleton>
</template>
