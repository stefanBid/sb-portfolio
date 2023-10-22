import { useBreakpoints } from '@vueuse/core';
import { ref } from 'vue';

export function useGlobalBreackPoints() {
  const globalBreakpoints = useBreakpoints({
    sm: 730,
    md: 767,
    lg: 1023,
    xl: 1279,
  });

  const breakpoints = ref({
    sm: globalBreakpoints.smallerOrEqual('sm'),
    md: globalBreakpoints.smallerOrEqual('md'),
    lg: globalBreakpoints.smallerOrEqual('lg'),
    xl: globalBreakpoints.smallerOrEqual('xl'),
  });

  return {
    breakpoints,
  };
}
