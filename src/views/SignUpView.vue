<template>
  <div class="flex justify-center items-center h-screen">
    <div class="space-x-4">
      <h2 class="text-3xl mb-4 text-purple-500">Tasker</h2>    
      <form @submit.prevent="handleSignUp" class="form-control w-full max-w-xs">
        <input v-model="email" type="email" required placeholder="Enter email" class="input input-bordered input-accent w-full max-w-xs"/>
        <input v-model="password" type="password" required placeholder="Enter password" class="input input-bordered input-accent w-full max-w-xs"/>
        <button class="btn btn-primary" type="submit">Sign Up</button>
      </form>
    </div>    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAuthStore from '@/stores/user'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleSignUp = async () => {
  try {
    console.log('handleSignUp')
    await authStore.signUp(email.value, password.value)
  } catch (error) {
    console.log('Error on sign up process:', error)
  }
}
</script>
