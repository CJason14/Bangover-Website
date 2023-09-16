// Composables
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/layouts/default/Default.vue'),
  children: [{
      path: '',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/download/',
      name: 'Download',
      component: () => import('@/views/Download.vue'),
    },
    {
      path: '/kontakt/',
      name: 'Kontakt',
      component: () => import('@/views/Kontakt.vue'),
    },
    {
      path: '/datenschutzerklaerung/',
      name: 'Datenschutzerklaerung',
      component: () => import('@/views/Datenschutzerklärung.vue'),
    },
    {
      path: '/impressum/',
      name: 'Impressum',
      component: () => import('@/views/Impressum.vue'),
    },
    {
      path: '/AGB/',
      name: 'AGB',
      component: () => import('@/views/AGB.vue'),
    },
  ],
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({
      behavior: 'smooth'
    });
  }
})

export default router
