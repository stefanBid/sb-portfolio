//Barrel Export Global Components
export { default as AppButton } from '@/components/global/app-button/AppButton.vue';
export { default as AppSwitch } from '@/components/global/app-switch/AppSwitch.vue';
export { default as AppTitle } from '@/components/global/app-title/AppTitle.vue';

//Barrel Export Layout Components
export { default as HeaderLayout } from '@/components/layout/header-layout/HeaderLayout.vue';
export { default as FooterLayout } from '@/components/layout/footer-layout/FooterLayout.vue';
export { default as MainLayout } from '@/components/layout/main-layout/MainLayout.vue';
export { default as TwoTabsLayout } from '@/components/layout/two-tabs-layout/TwoTabsLayout.vue';

//Barrel Export Wrapper Components
export { default as HeaderWrapper } from '@/components/wrapper/header-wrapper/HeaderWrapper.vue';
export { default as FooterWrapper } from '@/components/wrapper/footer-wrapper/FooterWrapper.vue';
export { default as IconWrapper } from '@/components/wrapper/icon-wrapper/IconWrapper.vue';

//Barrel Export of types and interfaces
export type { NavBarItem } from '@/components/layout/header-layout/HeaderLayout.vue';
export type {
  IconNameType,
  IconPackType,
} from '@/components/wrapper/icon-wrapper/IconWrapper.vue';
