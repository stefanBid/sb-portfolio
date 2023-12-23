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
      v-for="i in 2"
      :key="i"
      v-slot="{ open }"
      :default-open="i === 1"
    >
      <DisclosureButton
        class="flex items-center justify-between w-full p-3 font-medium text-white transition-all duration-300 ease-in-out rounded-md text-md group bg-sb-sky-blue-100 hover:bg-sb-sky-blue-200"
      >
        <span class="text-xl">Refund policy</span>
        <IconWrapper
          icon="chevronDown"
          class="w-8 h-8 text-white transition-all duration-300 ease-in-out"
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
          class="p-4 mx-2 text-lg text-white border-b h-fit min-h-[120px] bg-sb-charcoal-100 rounded-br-md rounded-bl-md border-x border-sb-sky-blue-100"
        >
          <!-- Immagine posizionata a sinistra -->
          <img
            src="/unisa.png"
            class="float-left w-20 h-20 mr-2"
            alt="Descrizione dell'immagine"
          />

          <!-- Testo del pannello -->
          <p>
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </p>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
