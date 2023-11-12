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
      class="flex flex-col justify-center flex-1 border-white"
      :class="[
        {
          'flex-1 items-start': !breakpoints.sm,
          'flex-none w-full items-center': breakpoints.sm,
        },
      ]"
    >
      <BaseTitle size="xl">
        <template #default>Hello Everyone!</template>
      </BaseTitle>
      <BaseTitle
        size="xxl"
        type="pretty"
        class="my-2"
      >
        <template #default>I'm</template>
        <template #pretty> Stefano Biddau</template>
      </BaseTitle>
      <TypingText />
      <div class="inline-flex items-center my-5 gap-x-4">
        <BaseButton
          type="outline"
          size="square"
          icon="Github"
          @click="openWindow('https://github.com/stefanBid')"
        />

        <BaseButton
          type="outline"
          size="square"
          icon="Linkedin"
          @click="
            openWindow('https://www.linkedin.com/in/stefano-biddau-669149214/')
          "
        />
        <BaseButton
          type="outline"
          size="square"
          icon="Instagram"
          @click="openWindow('https://www.instagram.com/stefano_bid/?next=%2F')"
        />
      </div>
      <BaseButton
        :icon="'DownloadArrow'"
        @click="
          openWindow(
            'https://drive.google.com/file/d/1wuibB821wePCKiF6Uy66dn623g7eW39g/view?usp=sharing',
          )
        "
        class="my-10"
      >
        Download CV
      </BaseButton>
    </div>

    <img
      src="/profile.png"
      alt="Foto profilo"
      class="transition-transform duration-300 ease-in-out rounded-full bg-sb-sky-blue-100"
      :style="{
        zoom: !breakpoints.lg ? '75%' : '50%',
      }"
    />
  </div>
</template>
