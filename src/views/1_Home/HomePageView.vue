<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useGlobalBreackPoints } from '@/hooks/useGlobalBreackPoints';
  import { usePageTitle } from '../../hooks/usePageTitle';
  import { openWindow } from '@/utils/open.utils';
  import { downloadCv } from '@/utils/downloadCv.utils';
  import { AppTitle, AppButton } from '@/components';
  import { TwoTabsLayout } from '@/components';
  import TypingText from './components/TypingText.vue';

  //breakpoints
  const { breakpoints } = useGlobalBreackPoints();
  //page title
  const { setPageTitle } = usePageTitle();

  //Set Contact button
  const contactButton = [
    {
      icon: 'github',
      contactLink: 'https://github.com/stefanBid',
    },
    {
      icon: 'linkedin',
      contactLink: 'https://www.linkedin.com/in/stefano-biddau-669149214/',
    },
    {
      icon: 'instagram',
      contactLink: 'https://www.instagram.com/stefano_bid/?next=%2F',
    },
  ] as const;

  const isDownloading = ref(false);

  const downloadFile = () => {
    isDownloading.value = !isDownloading.value;
    downloadCv().then((state: boolean) => {
      isDownloading.value = !state;
    });
  };

  onMounted(() => {
    setPageTitle('Home');
  });
</script>

<template>
  <two-tabs-layout
    :is-medium-screen="breakpoints.md"
    :is-small-screen="breakpoints.sm"
  >
    <template #left-side>
      <div
        class="flex flex-col justify-center flex-1"
        :class="[
          {
            'flex-1 items-start': !breakpoints.sm,
            'flex-none w-full items-center': breakpoints.sm,
          },
        ]"
      >
        <app-title
          size="xl"
          text="Hello Everyone!"
        />

        <app-title
          text="I'm"
          prettyText="Stefano Biddau"
          size="xxl"
          class="my-2"
        />

        <TypingText />
        <div class="inline-flex items-center my-5 gap-x-4">
          <app-button
            v-for="button in contactButton"
            :key="button.icon"
            :icon="button.icon"
            variant="primary"
            type="outline"
            @click="openWindow(button.contactLink)"
          />
        </div>
        <app-button
          id="download-button"
          variant="primary"
          icon="downloadArrow"
          :isLoading="isDownloading"
          class="my-10"
          @click="downloadFile()"
        >
          Download CV
        </app-button>
      </div>
    </template>

    <template #right-side>
      <img
        src="/profile.png"
        alt="Foto profilo"
        class="transition-all duration-300 ease-in-out rounded-full bg-sb-sky-blue-100 animate-pulse-shadow shadow-sb-sky-blue-100"
        :style="{
          zoom: !breakpoints.lg ? '75%' : '50%',
        }"
      />
    </template>
  </two-tabs-layout>
</template>
