const SWITCH_COLOR_MAP = {
  white: 'bg-white text-sb-charcoal-100',
  yellow: 'bg-yellow-500 text-white',
  charcoal: 'bg-sb-charcoal-100 text-white',
};

export const getSwitchCss = (color: 'white' | 'yellow' | 'charcoal') => {
  return SWITCH_COLOR_MAP[color];
};
