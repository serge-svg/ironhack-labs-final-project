import useAuthStore from '@/stores/auth'

export async function authGuard(to, next) {
  const authStore = useAuthStore()
  await authStore.loadUser()
  console.log('guards > auth')
  console.log(`authStore.currentUser: ${authStore.currentUser}`)
  if (!authStore.currentUser && to.meta.requiresAuth) {
    return { name: 'signIn' }
  }
}
