type TransitionType =
  | 'scaleAndFade'
  | 'verticalStretchDropdown'
  | 'topDownDropdown';

const transitionSettings = {
  scaleAndFade: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',
  },
  verticalStretchDropdown: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform scale-y-0 opacity-0',
    enterToClass: 'transform scale-y-100 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform scale-y-100 opacity-100',
    leaveToClass: 'transform scale-y-0 opacity-0',
  },
  topDownDropdown: {
    enterActiveClass: 'transition duration-300 ease-out',
    enterFromClass: 'transform origin-top scale-y-0 opacity-0',
    enterToClass: 'transform origin-top scale-y-100 opacity-100',
    leaveActiveClass: 'transition duration-200 ease-in',
    leaveFromClass: 'transform origin-top scale-y-100 opacity-100',
    leaveToClass: 'transform origin-top scale-y-0 opacity-0',
  },
};

export const getTransition = (type: TransitionType) => transitionSettings[type];
