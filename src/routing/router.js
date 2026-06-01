import { createRouter, createWebHistory } from 'vue-router';

const masterTitlePage = 'New Faro Sport BNB';

const routes = [
  // General
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: true,
    meta: {
      title: masterTitlePage,
      description: 'Benvenuti al New Faro Sport BNB a San Vito, Taranto. Comfort, relax e ospitalità a pochi passi dal mare.',
    },
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue'),
    props: true,
    meta: {
      title: masterTitlePage,
      description: 'Guarda le foto delle nostre camere e della nostra struttura a Taranto.',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { title, description } = to.meta;

  if (title) {
    document.title = title;
  } else {
    document.title = 'New Faro Sport BNB | Taranto';
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute('content', description);
  }

  next();
});

export default router;
