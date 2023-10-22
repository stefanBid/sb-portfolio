<script setup lang="ts">
  import { useGlobalBreackPoints } from '../../composables/useGlobalBreackPoints';
  import { usePageTitle } from '../../composables/usePageTitle';
  import { useWindowOpen } from '../../composables/useWindowOpen';
  import BaseTitle from '../../components/global/Title';
  import TypingText from './components/TypingText.vue';
  import BaseButton from '../../components/global/Button';
  import { onMounted } from 'vue';
  //breakpoints
  const { breakpoints } = useGlobalBreackPoints();
  //page title
  const { setPageTitle } = usePageTitle();

  onMounted(() => {
    setPageTitle('Home');
  });

  //window open
  const { open } = useWindowOpen();
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
          @click="open('https://github.com/stefanBid')"
          type="outline"
          rounded
        >
          <BaseIconMdiGithub class="w-icon-xxl h-icon-xxl" />
        </BaseButton>
        <BaseButton
          @click="open('https://www.linkedin.com/in/stefano-biddau-669149214/')"
          type="outline"
          rounded
        >
          <BaseIconMdiLinkedin class="w-icon-xxl h-icon-xxl" />
        </BaseButton>
        <BaseButton
          @click="open('https://www.instagram.com/stefano_bid/?next=%2F')"
          type="outline"
          rounded
        >
          <BaseIconMdiInstagram class="w-icon-xxl h-icon-xxl" />
        </BaseButton>
      </div>
      <BaseButton
        @click="
          open(
            'https://drive.google.com/file/d/1wuibB821wePCKiF6Uy66dn623g7eW39g/view?usp=sharing',
          )
        "
        class="my-10 text-xl"
      >
        Download CV
        <BaseIconMdiDownload class="w-icon-lg h-icon-lg" />
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
