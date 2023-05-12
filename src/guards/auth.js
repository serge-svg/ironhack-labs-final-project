import useAuthStore from '@/stores/user'

export async function authGuard(to, next) {
  const authStore = useAuthStore()
  await authStore.fetchUser()

  if (!authStore.currentUser && to.meta.requiresAuth) {
    return { name: 'signIn' }
  }
}
