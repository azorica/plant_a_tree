// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Mission from '@/components/Mission.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mission',
      name: 'Our Mission',
      component: Mission
    }
  ]
});

export default router;