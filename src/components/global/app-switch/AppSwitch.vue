<script setup lang="ts">
  import { Switch } from '@headlessui/vue';
  import { IconWrapper, IconNameType } from '@/components';
  import { generateId } from '@/utils/generateId.utils';
  import { getSwitchCss } from '@/styles/components-map-style/switchStyle';

  type ColorType = 'white' | 'yellow' | 'charcoal';

  interface BaseSwitchProps {
    id?: string;
    activeDotColor: ColorType;
    inactiveDotColor: ColorType;
    activeSwitchIcon?: IconNameType;
    inactiveSwitchIcon?: IconNameType;
  }

  const props = withDefaults(defineProps<BaseSwitchProps>(), {
    id: () => generateId(),
    activeDotColor: 'white',
    inactiveDotColor: 'white',
    activeSwitchIcon: undefined,
    inactiveSwitchIcon: undefined,
  });

  const enabled = defineModel<boolean>({ required: true });
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
        :class="
          enabled
            ? [getSwitchCss(props.activeDotColor), 'translate-x-7']
            : [getSwitchCss(props.inactiveDotColor), 'translate-x-0']
        "
      >
        <icon-wrapper
          v-if="props.activeSwitchIcon && props.inactiveSwitchIcon"
          :icon="enabled ? props.activeSwitchIcon : props.inactiveSwitchIcon"
          class="text-lg"
        />
      </span>
    </Switch>
  </div>
</template>
