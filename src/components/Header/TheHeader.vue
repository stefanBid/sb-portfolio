<script setup lang="ts">
  //TODO: Ridurre la complessità delle classi css
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';
  import { useGlobalBreackPoints } from '../../composables/useGlobalBreackPoints';
  import ThemeSwitch from './components/ThemeSwitch.vue';
  import BaseTitle from '../global/Title';

  //DATA
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
  ] as const;

  //COMPUTED
  const isOpenMenu = computed(() => {
    if (!breakpoints.value.sm) isOpen.value = false;
    return isOpen.value;
  });

  //METHODS
  //open-close menu with hamburger-icon and close-icon
  const toggleMenuWithIcon = () => {
    isOpen.value = !isOpen.value;
  };

  //close menu when a page is selected
  const toggleMenuWithPage = () => {
    if (breakpoints.value.sm) isOpen.value = false;
  };
</script>

<template>
  <header
    class="relative z-50 flex items-center justify-between flex-shrink-0 py-6 duration-300 ease-in-out"
    :class="{ 'p-[3%]': breakpoints.md, 'p-[6%]': !breakpoints.md }"
  >
    <!--LOGO-->
    <BaseTitle
      size="xl"
      type="forLink"
      @click="toggleMenuWithPage()"
      :linkTo="{ name: NAV_BAR_ITEMS[0].routerName }"
    >
      <template #default>
        <BaseIconMdiConsole
          class="transition-all duration-300 ease-in-out w-icon-xxl h-icon-xxl group-active:text-sb-sky-blue-200 group-hover:text-sb-sky-blue-100"
        />
        <p
          class="transition-all duration-300 ease-in-out group-active:text-sb-sky-blue-200 group-hover:text-sb-sky-blue-100"
        >
          Stefano Biddau
        </p>
      </template>
    </BaseTitle>

    <!--HAMBURGER MENU ICON-->
    <div v-show="breakpoints.sm">
      <BaseIconMdiMenu
        v-if="!isOpenMenu"
        class="duration-300 ease-in-out cursor-pointer w-icon-xl h-icon-xl hover:text-sb-sky-blue-100 active:rotate-90"
        @click="toggleMenuWithIcon()"
      />
      <BaseIconMdiClose
        v-else
        class="duration-300 ease-in-out cursor-pointer w-icon-xl h-icon-xl hover:text-sb-sky-blue-100 active:-rotate-90"
        @click="toggleMenuWithIcon()"
      />
    </div>
    <!--NAVBAR-->
    <nav
      class="duration-300 ease-in-out"
      :class="{
        'bg-inherit flex items-center gap-x-8': !breakpoints.sm,
        'absolute top-full bg-white dark:bg-sb-charcoal-200 w-full h-fit':
          breakpoints.sm,
        'left-0 shadow-header shadow-sb-sky-blue-300 ':
          isOpenMenu && breakpoints.sm,
        '-left-full shadow-none': !isOpenMenu && breakpoints.sm,
      }"
    >
      <RouterLink
        v-for="item in NAV_BAR_ITEMS"
        :key="item.routerName"
        :to="{ name: item.routerName }"
        class="text-lg duration-300 ease-in-out hover:text-sb-sky-blue-100 hover:dark:text-sb-sky-blue-100 hover:cursor-pointer"
        :class="{
          'block  py-6 px-[3%] mx-0 w-full hover:text-white hover:bg-sb-sky-blue-300 hover:dark:bg-sb-charcoal-100':
            breakpoints.sm,
        }"
        @click="toggleMenuWithPage()"
      >
        {{ item.displayName }}
      </RouterLink>
      <div
        :class="{
          'block py-6 px-[3%] mx-0 w-full': breakpoints.sm,
        }"
      >
        <ThemeSwitch />
      </div>
    </nav>
  </header>
</template>

<style scoped>
  nav a:hover {
    text-shadow: 0 0 1rem #00a6fb;
  }

  nav a.router-link-exact-active {
    color: #00a6fb;
    text-shadow: 0 0 1rem #00a6fb;
  }
</style>
