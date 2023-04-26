<template>
  <div>
    <h2>SignIn</h2>
  </div>
  <form @submit.prevent="handleSignIn">
    <input v-model="email" type="email" required>
    <input v-model="password" type="password" required>
    <button type="submit">Sign In</button>
  </form>
  <RouterLink to="/sign-up" />
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import useAuthStore  from '@/stores/auth';
import router from '../router';

const authStore = useAuthStore();
const email = ref('')
const password = ref('')

const handleSignIn = async () => {
  try {
    await authStore.signIn(email.value, password.value)
    router.push('/');
  } catch (error) {
    console.log('Error on sign in process:', error);
  }
}
</script>
