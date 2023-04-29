<template>
  <div class="flex justify-center items-center h-screen">
    <div class="space-x-4">
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/sign-up" v-if="!authStore.currentUser">Sign Up</RouterLink>
          <RouterLink to="/sign-in" v-if="!authStore.currentUser">Sign In</RouterLink>
          <RouterLink to="/tasks-list" v-if="authStore.currentUser">Tasks</RouterLink>
          <button v-if="authStore.currentUser" @click="signOut">Sign out</button>
        </nav>
      </div>
    </header>
  <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import useAuthStore from '@/stores/user'

const authStore = useAuthStore();

function signOut() {
  authStore.signOut();
}
</script>
