<script setup lang="ts">
  import { Switch } from '@headlessui/vue';
  import { BaseIcon } from '@/components';
  import { IconName } from '@/types/icon.type';

  type SwitchType = 'classic' | 'changeTheme';

  export interface BaseSwitchProps {
    kind?: SwitchType;
    activeSwitchIcon?: IconName;
    inactiveSwitchIcon?: IconName;
  }

  const props = withDefaults(defineProps<BaseSwitchProps>(), {
    kind: 'classic',
    activeSwitchIcon: undefined,
    inactiveSwitchIcon: undefined,
  });

  const enabled = defineModel<boolean>({ required: true, default: false });
</script>

<template>
  <div class="w-fit">
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-sb-sky-blue-200' : 'bg-sb-sky-blue-200/30'"
      class="relative inline-flex transition-all duration-200 ease-in-out border-2 rounded-full cursor-pointer h-7 w-14 border-sb-sky-blue-100 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-sb-sky-blue-100/75 hover:shadow-button hover:shadow-sb-sky-blue-100"
    >
      <span
        aria-hidden="true"
        class="inline-flex items-center justify-center w-6 h-6 transition duration-200 ease-in-out transform border-none rounded-full shadow-lg ring-0"
        :class="[
          props.kind === 'changeTheme'
            ? enabled
              ? 'bg-sb-charcoal-100'
              : 'bg-yellow-500'
            : 'bg-white',
          enabled ? 'translate-x-7' : 'translate-x-0',
        ]"
      >
        <BaseIcon
          v-if="props.activeSwitchIcon && props.inactiveSwitchIcon"
          :icon="enabled ? props.activeSwitchIcon : props.inactiveSwitchIcon"
          class="text-lg text-white"
        />
      </span>
    </Switch>
  </div>
</template>
