<template>
  <div class="flex">
    <div class="artboard phone-3">
      <header>
        <nav class="navbar bg-primary text-primary-content">
          <RouterLink to="/" class="btn btn-ghost normal-case text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </RouterLink>
          <RouterLink
            to="/sign-up"
            v-if="!authStore.currentUser"
            class="btn btn-ghost normal-case text-xl"
            >Sign Up</RouterLink
          >
          <RouterLink
            to="/sign-in"
            v-if="!authStore.currentUser"
            class="btn btn-ghost normal-case text-xl"
            >Sign In</RouterLink
          >
          <RouterLink
            to="/tasks-list"
            v-if="authStore.currentUser"
            class="btn btn-ghost normal-case text-xl"
            >Tasks</RouterLink
          >
          <button
            v-if="authStore.currentUser"
            @click="signOut"
            class="btn btn-ghost normal-case text-xl"
          >
            Sign out
          </button>
        </nav>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import useAuthStore from '@/stores/user'
import router from '@/router'

const authStore = useAuthStore()

function signOut() {
  authStore.signOut()
  router.push('/')
}
</script>
