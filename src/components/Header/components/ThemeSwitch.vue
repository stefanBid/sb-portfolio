<script setup lang="ts">
  import { useThemeChange } from '../../../composables/useThemeChange';
  import BaseSwitch from '../../global/Switch';

  const { isDark } = useThemeChange();
</script>

<template>
  <BaseSwitch
    v-model="isDark"
    size="md"
  >
    <template #switch-active-icon>
      <BaseIconMdiWeatherNight class="text-white" />
    </template>
    <template #switch-inactive-icon>
      <BaseIconMdiWeatherSunny />
    </template>
  </BaseSwitch>
</template>
