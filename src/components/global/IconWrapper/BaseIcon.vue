<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  import { computed } from 'vue';
  import { IconName, IconPack } from '@/types/icon.type';

  /* ---- INTERFACES ---- */
  interface BaseIconProps {
    icon?: IconName;
    iconPack?: IconPack;
    outline?: boolean;
  }

  /* ---- PROPS ---- */
  const props = withDefaults(defineProps<BaseIconProps>(), {
    icon: 'Alien',
    iconPack: 'mdi',
    outline: false,
  });

  // Feature: Create an icon settings object

  const createIconSettings = (solid: string, outline?: string) => {
    return { solid, outline };
  };

  const iconSettings = {
    mdi: {
      Alien: createIconSettings('mdi:alien', 'mdi:alien-outline'),
      Console: createIconSettings('mdi:console', 'mdi:console-line'),
      DownloadArrow: createIconSettings('mdi:download', 'mdi:download-outline'),
      Github: createIconSettings('mdi:github'),
      HamburgerMenu: createIconSettings('mdi:menu'),
      Instagram: createIconSettings('mdi:instagram'),
      Linkedin: createIconSettings('mdi:linkedin'),
      Loading: createIconSettings('mdi:loading'),
      Moon: createIconSettings('mdi:weather-night'),
      Sun: createIconSettings('mdi:white-balance-sunny'),
      XClose: createIconSettings('mdi:close'),
    },
  };

  const getIcon = computed(() => {
    const iconSetting = iconSettings[props.iconPack][props.icon];
    if (props.outline && iconSetting.outline) {
      return iconSetting.outline;
    } else {
      return iconSetting.solid;
    }
  });
</script>

<template>
  <Icon
    :icon="getIcon"
    :class="$attrs.class"
  />
</template>
