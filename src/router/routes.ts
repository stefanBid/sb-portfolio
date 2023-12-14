const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage/HomePageView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/AboutView.vue'),
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
