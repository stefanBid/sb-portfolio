export function useWindowOpen() {
  const open = (url: string) => {
    window.open(url);
  };

  return {
    open,
  };
}
