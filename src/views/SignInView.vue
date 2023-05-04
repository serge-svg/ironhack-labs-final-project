<template>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login</h1>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form @submit.prevent="handleSignIn">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input v-model="email" type="email" required placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input v-model="password" type="password" required placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
<RouterLink to="/sign-up" />
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useAuthStore from '@/stores/user'
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
