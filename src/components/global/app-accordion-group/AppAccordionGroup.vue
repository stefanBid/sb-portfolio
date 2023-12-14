<script setup lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue';

  import { IconWrapper } from '@/components';

  import { getTransition } from '@/utils/transition.utils';

  const transition = getTransition('topDownDropdown');
</script>

<template>
  <div class="w-full space-y-6">
    <Disclosure
      as="div"
      class="space-y-0"
      v-for="i in 5"
      :key="i"
      v-slot="{ open }"
      :default-open="i === 1"
    >
      <DisclosureButton
        class="flex justify-between w-full p-3 text-sm font-medium text-left text-white transition-all duration-300 ease-in-out rounded-md group bg-sb-sky-blue-100 hover:bg-sb-sky-blue-200"
      >
        <span>Refund policy</span>
        <IconWrapper
          icon="chevronDown"
          class="w-5 h-5 text-white transition-all duration-300 ease-in-out"
          :class="open ? 'transform rotate-180' : ''"
        />
      </DisclosureButton>
      <transition
        :enter-active-class="transition.enterActiveClass"
        :enter-from-class="transition.enterFromClass"
        :enter-to-class="transition.enterToClass"
        :leave-active-class="transition.leaveActiveClass"
        :leave-from-class="transition.leaveFromClass"
        :leave-to-class="transition.leaveToClass"
      >
        <DisclosurePanel
          v-if="open"
          as="div"
          class="px-4 pt-2 pb-2 mx-2 text-sm text-white border-b bg-sb-charcoal-100 rounded-br-md rounded-bl-md border-x border-sb-sky-blue-100"
        >
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
