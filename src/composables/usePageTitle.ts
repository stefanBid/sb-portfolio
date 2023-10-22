import { useTitle } from '@vueuse/core';
export function usePageTitle() {
  const title = useTitle('Stefano Biddau');

  const setPageTitle = (newTitle: string) => {
    title.value = `${title.value} | ${newTitle}`;
  };

  return {
    setPageTitle,
  };
}
