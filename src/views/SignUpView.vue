<template>
  <div>
    <h2>SignUp</h2>
  </div>
  <form @submit.prevent="handleSignUp">
    <input v-model="email" type="email" required>
    <input v-model="password" type="password" required>
    <button type="submit">Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import useAuthStore  from '@/stores/auth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const handleSignUp = async () => {
  try {
    console.log('handleSignUp');
    await authStore.signUp(email.value, password.value);
  } catch (error) {
    console.log('Error on sign up process:', error);
  }
}
</script>
