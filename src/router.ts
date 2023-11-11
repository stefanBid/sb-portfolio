import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from './views/1_Home/HomePageView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageView,
  },
  {
    path: '/about',
    name: 'about',
    component: HomePageView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
