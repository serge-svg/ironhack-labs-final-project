<template>
  <div>
    <h2>SignUp</h2>
  </div>
  <form @submit.prevent="handleSignIn">
    <input v-model="email" type="email" required>
    <input v-model="password" type="password" required>
    <button type="submit">Iniciar sesión</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { signUp } from '@/supabase'

const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSignUn = async () => {
      try {
        await signUp(email.value, password.value)
      } catch (error) {
        console.log('Error on sign up process:', error)
      }
    }

    return { email, password, handleSignUn }
  }
}
</script>
