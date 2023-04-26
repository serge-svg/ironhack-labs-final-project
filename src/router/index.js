import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@/guards/auth'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import TasksListView from '@/views/TasksListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      meta: { requiresAuth: false },
      component: SignUpView
    },
    {
      path: '/sign-in',
      name: 'signIn',
      meta: { requiresAuth: false },
      component: SignInView
    },
    {
      path: '/tasks-list',
      name: 'tasks',
      meta: { requiresAuth: false },
      component: TasksListView
    }
  ]
})

router.beforeEach(authGuard)

export default router
