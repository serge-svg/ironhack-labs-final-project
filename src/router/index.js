import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import UserStore from '@/stores/userStore.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUpView
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignInView
    } 
  ]
})

router.beforeEach((to) => {
  const userUserStore = UserStore();
  const isAuthenticated = userUserStore.user !== null;
  
  console.log('user> '+userUserStore.user);
  console.log('isAuthenticated> '+isAuthenticated);
  console.log('to.name> '+to.name);
  
  if (!isAuthenticated && to.name !== 'signIn' && to.name !== 'signUp') {    
    return { name: 'signIn' }
  }
});

export default router
