import useAuthStore from '@/stores/user'

export async function authGuard(to, next) {
  const authStore = useAuthStore();
  await authStore.fetchUser()
  console.log(`to.meta.requiresAuth ${to.meta.requiresAuth}`)
  console.log(`authStore.currentUser: ${authStore.currentUser}`)
  if (!authStore.currentUser && to.meta.requiresAuth) {
    console.log(`guards-auth redirec to sginin`)
    return { name: 'signIn' }
  }
}
