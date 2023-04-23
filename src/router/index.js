import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import UserStore from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: "Home",
        auth: true,
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthView,
      children: [
        {
          path: '/sign-up',
          name: 'SignUp',
          component: SignUpView,
          meta: {
            title: "Home",
            auth: false,
          }
        },
        {
          path: '/sign-in',
          name: 'SignIn',
          component: SignInView,
          meta: {
            title: "Home",
            auth: true,
          }
        } 
      ]      
    },     
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "Home",
        auth: true,
      }
    }
  ]
})

router.beforeEach((to) => {
  const userUserStore = UserStore;
  const isAuthenticated = userUserStore.user !== null;
  
  if (!isAuthenticated && to.name !== 'signIn' && to.name !== 'signUp') {
    return { name: 'signUp' }
  }
});

export default router
