<template>
  <div>
    <h2>SignIn</h2>
  </div>
  <form @submit.prevent="handleSignIn">
    <input v-model="email" type="email" required>
    <input v-model="password" type="password" required>
    <button type="submit">Iniciar sesión</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { signIn } from '@/supabase'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSignIn = async () => {
      try {
        await signIn(email.value, password.value)
      } catch (error) {
        console.log('Error on sign in process:', error)
      }
    }

    return { email, password, handleSignIn }
  }
}
</script>
