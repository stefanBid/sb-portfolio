<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen">
    <slot name="header" />
    <main class="flex-grow overflow-x-hidden overflow-y-auto">
      <slot name="default" />
      <slot name="footer" />
    </main>
  </div>
</template>
