const BUTTON_CSS_MAP = {
  primary: {
    solid: `
      border-2 border-sb-sky-blue-100 bg-sb-sky-blue-100 text-black dark:text-white shadow-none
      hover:bg-sb-sky-blue-200 hover:shadow-button hover:shadow-sb-sky-blue-200
      active:bg-sb-sky-blue-300 active:shadow-sb-sky-blue-300`,
    outline: `
      border-2 border-sb-sky-blue-100 bg-transparent text-sb-sky-blue-100 shadow-none
      hover:bg-sb-sky-blue-200 hover:text-black dark:hover:text-white hover:shadow-button hover:shadow-sb-sky-blue-100
      active:bg-sb-sky-blue-300 active:text-black dark:active:text-white active:shadow-button active:shadow-sb-sky-blue-100`,
  },
  secondary: {
    solid: '',
    outline: '',
  },
};

export const getButtonCss = (
  variant: 'primary' | 'secondary',
  type: 'solid' | 'outline',
) => {
  return BUTTON_CSS_MAP[variant][type];
};
