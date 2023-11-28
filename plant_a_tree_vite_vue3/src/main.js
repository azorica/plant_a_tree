import App from './App.vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Mission from '@/components/Mission.vue'

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

createApp(App)
  .use(router)
  .mount('#plant-a-tree-app');
