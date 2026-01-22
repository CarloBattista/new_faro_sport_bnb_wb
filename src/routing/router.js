import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // General
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;
  if (pageTitle) {
    document.title = pageTitle;
  } else {
    document.title = 'NFS | BNB';
  }
  next();
});

export default router;
