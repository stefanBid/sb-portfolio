import { useColorMode } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';

export function useThemeChange() {
  const isDark = ref(true);
  const mode = useColorMode();

  watch(isDark, value => {
    if (value) {
      mode.value = 'dark';
    } else {
      mode.value = 'light';
    }
  });

  onMounted(() => {
    mode.value = 'dark';
  });

  return {
    isDark,
  };
}
