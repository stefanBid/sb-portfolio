import { useTitle } from '@vueuse/core';
export function usePageTitle() {
  const title = useTitle('Stefano Biddau');

  const setTitle = (newTitle: string) => {
    title.value = `${title.value} | ${newTitle}`;
  };

  return {
    setTitle,
  };
}
