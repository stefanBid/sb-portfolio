const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/1_Home/HomePageView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/ComingSoon/ComingSoonView.vue'),
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/views/ComingSoon/ComingSoonView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ComingSoon/ComingSoonView.vue'),
  },
];

export default routes;
