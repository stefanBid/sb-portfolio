<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { BaseTitle } from '@/components';

  const texts: string[] = [
    'Front-End Developer',
    'Back-End Developer',
    'Content Creator',
  ];

  let currentText = ref('');

  const timeout = ref<number | NodeJS.Timeout | null>(null);

  onMounted(() => {
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeNextChar = () => {
      if (!deleting) {
        if (charIndex < texts[textIndex].length) {
          currentText.value += texts[textIndex][charIndex];
          charIndex++;
          timeout.value = setTimeout(typeNextChar, 100); // ritardo tra caratteri
        } else {
          deleting = true;
          setTimeout(typeNextChar, 1000); // ritardo prima di iniziare a cancellare
        }
      } else {
        if (currentText.value.length > 0) {
          currentText.value = currentText.value.slice(0, -1);
          timeout.value = setTimeout(typeNextChar, 100); // ritardo tra caratteri cancellati
        } else {
          // Passa al prossimo testo e ricomincia a scrivere
          deleting = false;
          textIndex = (textIndex + 1) % texts.length;
          charIndex = 0;
          typeNextChar();
        }
      }
    };

    typeNextChar();
  });

  onUnmounted(() => {
    if (timeout.value !== null) clearTimeout(timeout.value);
  });
</script>

<template>
  <div>
    <BaseTitle
      size="xl"
      text="I'm a"
      :prettyText="currentText"
    />
    <span
      class="text-3xl font-semibold transition-all duration-300 ease-in-out animate-blink"
      >_</span
    >
  </div>
</template>
