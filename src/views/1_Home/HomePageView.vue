<script setup lang="ts">
  import { useGlobalBreackPoints } from '../../hooks/useGlobalBreackPoints';
  import { usePageTitle } from '../../hooks/usePageTitle';
  import { openWindow } from '@/utils/open.utils';
  import { BaseTitle, BaseButton } from '@/components';
  import TypingText from './components/TypingText.vue';
  import { onMounted } from 'vue';

  //breakpoints
  const { breakpoints } = useGlobalBreackPoints();
  //page title
  const { setPageTitle } = usePageTitle();

  //Set Contact button
  const contactButton = [
    {
      icon: 'Github',
      contactLink: 'https://github.com/stefanBid',
    },
    {
      icon: 'Linkedin',
      contactLink: 'https://www.linkedin.com/in/stefano-biddau-669149214/',
    },
    {
      icon: 'Instagram',
      contactLink: 'https://www.instagram.com/stefano_bid/?next=%2F',
    },
  ] as const;
  onMounted(() => {
    setPageTitle('Home');
  });
</script>

<template>
  <div
    class="min-h-full py-[3%] transition-all duration-300 ease-in-out"
    :class="[
      {
        'px-[3%]': breakpoints.md,
        'px-[6%]': !breakpoints.md,
      },
      {
        'flex justify-between items-center gap-x-10': !breakpoints.sm,
        'flex flex-col-reverse justify-center items-center gap-y-10':
          breakpoints.sm,
      },
    ]"
  >
    <div
      class="flex flex-col justify-center flex-1"
      :class="[
        {
          'flex-1 items-start': !breakpoints.sm,
          'flex-none w-full items-center': breakpoints.sm,
        },
      ]"
    >
      <BaseTitle
        size="xl"
        text="Hello Everyone!"
      />

      <BaseTitle
        text="I'm"
        prettyText="Stefano Biddau"
        size="xxl"
        class="my-2"
      />

      <TypingText />
      <div class="inline-flex items-center my-5 gap-x-4">
        <BaseButton
          v-for="button in contactButton"
          :key="button.icon"
          type="outline"
          size="square"
          :icon="button.icon"
          @click="openWindow(button.contactLink)"
        />
      </div>
      <BaseButton
        :icon="'DownloadArrow'"
        class="my-10"
        @click="
          openWindow(
            'https://drive.google.com/file/d/1wuibB821wePCKiF6Uy66dn623g7eW39g/view?usp=sharing',
          )
        "
      >
        Download CV
      </BaseButton>
    </div>
    <img
      src="/profile.png"
      alt="Foto profilo"
      class="transition-all duration-300 ease-in-out rounded-full bg-sb-sky-blue-100 animate-pulse-shadow shadow-sb-sky-blue-100"
      :style="{
        zoom: !breakpoints.lg ? '75%' : '50%',
      }"
    />
  </div>
</template>
