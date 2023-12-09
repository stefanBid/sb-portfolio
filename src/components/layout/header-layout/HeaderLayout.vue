<script setup lang="ts">
  import { computed, useSlots } from 'vue';
  import { LayoutComponentProps } from '@/components/layout/types';

  export interface NavBarItem {
    displayName: string;
    routerName: string;
  }

  interface HeaderGeneralProps extends LayoutComponentProps {
    isNavbarOpen: boolean;
    navbarItems: NavBarItem[];
    onChangeNavbarState: (state: boolean) => void;
  }

  const props = defineProps<HeaderGeneralProps>();
  const slots = useSlots();

  const isHeaderLogoVisible = computed(() => {
    return slots['header-logo']?.().length === 1;
  });

  const isHeaderMenuButtonVisible = computed(() => {
    return slots['header-menu-button']?.().length === 1 && props.isSmallScreen;
  });

  const isExtraVisible = computed(() => {
    return slots['header-navbar-extra']?.().length === 1;
  });
</script>

<template>
  <!--HEADER WRAPPER-->
  <header
    class="relative z-50 flex items-center justify-between flex-shrink-0 py-6 duration-300 ease-in-out"
    :class="[props.isMediumScreen ? 'p-[3%]' : 'p-[6%]']"
  >
    <!-- (HEADER LOGO) -->
    <template v-if="isHeaderLogoVisible">
      <slot name="header-logo" />
    </template>

    <!-- (HEADER MENU BUTTON) -->
    <template v-if="isHeaderMenuButtonVisible">
      <slot name="header-menu-button" />
    </template>

    <!-- (HEADER NAVBAR) -->
    <nav
      class="duration-300 ease-in-out"
      :class="{
        'bg-inherit flex items-center gap-x-8': !props.isSmallScreen,
        'absolute top-full bg-white dark:bg-sb-charcoal-200 w-full  h-fit':
          props.isSmallScreen,
        'left-0 shadow-header shadow-sb-sky-blue-300 ':
          props.isNavbarOpen && props.isSmallScreen,
        '-left-full shadow-none': !props.isNavbarOpen && props.isSmallScreen,
      }"
    >
      <!-- (NAVBAR ITEM) -->
      <router-link
        v-for="item in props.navbarItems"
        :key="item.routerName"
        :to="{ name: item.routerName }"
        id="navbar-item"
        class="transition-all duration-300 ease-in-out hover:text-sb-sky-blue-100 hover:dark:text-sb-sky-blue-100 hover:cursor-pointer"
        :class="{
          'flex mx-0 py-6 px-[4%] hover:text-white hover:bg-sb-sky-blue-300 hover:dark:bg-sb-charcoal-100 w-full':
            props.isSmallScreen,
        }"
        @click="props.onChangeNavbarState(false)"
      >
        {{ item.displayName }}
      </router-link>

      <!-- (NAVBAR EXTRA) -->
      <div
        v-if="isExtraVisible"
        :class="{ 'block py-6 px-[3%] mx-0 w-full': props.isSmallScreen }"
      >
        <slot name="header-navbar-extra" />
      </div>
    </nav>
  </header>
</template>

<style scoped>
  #navbar-item:hover {
    text-shadow: 0 0 1rem #00a6fb;
  }

  #navbar-item.router-link-exact-active {
    color: #00a6fb;
    text-shadow: 0 0 1rem #00a6fb;
  }
</style>
