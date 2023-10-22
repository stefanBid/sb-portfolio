<script setup lang="ts">
  import { onMounted } from 'vue';
  import BaseTitle from '../../components/global/Title';
  import { usePageTitle } from '../../composables/usePageTitle';
  const { setTitle } = usePageTitle();

  onMounted(() => {
    setTitle('Home');
  });
</script>

<template>
  <BaseTitle
    size="xxl"
    type="pretty"
  >
    <template #default>HOME</template>
    <template #pretty>
      PAGE
      <BaseIconMdiHome class="w-icon-xxl h-icon-xxl" />
    </template>
  </BaseTitle>
</template>
