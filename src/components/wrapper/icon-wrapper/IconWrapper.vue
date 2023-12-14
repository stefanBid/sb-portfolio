<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  import { computed } from 'vue';

  /* ---- TYPES ---- */
  type IconNameType =
    | 'alien'
    | 'chevronDown'
    | 'console'
    | 'downloadArrow'
    | 'github'
    | 'menuOpen'
    | 'menuClose'
    | 'instagram'
    | 'linkedin'
    | 'loading'
    | 'moon'
    | 'sun'
    | 'xClose'
    | 'worker';

  type IconPackType = 'mdi';

  export type { IconNameType, IconPackType };

  /* ---- INTERFACES ---- */

  interface IconWrapperProps {
    icon?: IconNameType;
    iconPack?: IconPackType;
    outline?: boolean;
  }

  /* ---- PROPS ---- */
  const props = withDefaults(defineProps<IconWrapperProps>(), {
    icon: 'alien',
    iconPack: 'mdi',
    outline: false,
  });

  // Feature: Create an icon settings object

  const createIconSettings = (solid: string, outline?: string) => {
    return { solid, outline };
  };

  const iconSettings = {
    mdi: {
      alien: createIconSettings('mdi:alien', 'mdi:alien-outline'),
      chevronDown: createIconSettings('mdi:chevron-down'),
      console: createIconSettings('mdi:console', 'mdi:console-line'),
      downloadArrow: createIconSettings('mdi:download', 'mdi:download-outline'),
      github: createIconSettings('mdi:github'),
      menuOpen: createIconSettings('mdi:menu-open'),
      menuClose: createIconSettings('mdi:menu-close'),
      instagram: createIconSettings('mdi:instagram'),
      linkedin: createIconSettings('mdi:linkedin'),
      loading: createIconSettings('mdi:loading'),
      moon: createIconSettings('mdi:weather-night'),
      sun: createIconSettings('mdi:white-balance-sunny'),
      xClose: createIconSettings('mdi:close'),
      worker: createIconSettings('mdi:account-hard-hat'),
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
