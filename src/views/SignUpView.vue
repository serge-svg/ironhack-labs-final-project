<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Register</h1>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="password"
              type="password"
              required
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text">Repite Password</span>
            </label>
            <input
              v-model="password2"
              type="password"
              required
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
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
    await authStore.signUp(email.value, password.value)
  } catch (error) {}
}
</script>
