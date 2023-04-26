<template>
  <div class="flex justify-center items-center h-screen">
    <div class="space-x-4">
      <h2 class="text-3xl mb-4 text-purple-500">Tasker</h2>    
      <form @submit.prevent="handleSignIn" class="form-control w-full max-w-xs">
        <input v-model="email" type="email" required placeholder="Enter email" class="input input-bordered input-accent w-full max-w-xs"/>
        <input v-model="password" type="password" required placeholder="Enter password" class="input input-bordered input-accent w-full max-w-xs"/>
        <button class="btn btn-primary" type="submit">Sign In</button>
      </form>
    </div>    
  </div>
  <RouterLink to="/sign-up" />
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useAuthStore from '@/stores/auth'
import router from '../router'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleSignIn = async () => {
  try {
    await authStore.signIn(email.value, password.value)
    router.push('/')
  } catch (error) {
    console.log('Error on sign in process:', error)
  }
}
</script>
