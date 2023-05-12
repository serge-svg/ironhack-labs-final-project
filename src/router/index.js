import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@/guards/auth'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import TasksView from '@/views/TasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      meta: { requiresAuth: false },
      component: SignInView
    },
    {
      path: '/sign-in',
      name: 'signIn',
      meta: { requiresAuth: false },
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      meta: { requiresAuth: false },
      component: SignUpView
    },
    {
      path: '/tasks-list',
      name: 'tasks',
      meta: { requiresAuth: true },
      component: TasksView
    }
  ]
})

router.beforeEach(authGuard)

export default router
