<template>
    <div class="flex-col items-center ">
        <nav class="navbar-center flex justify-between bg-primary mx-auto px-4 w-1/2">
          <i class="fas fa-list flex items-center"></i>           

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
      <RouterView />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import useAuthStore from '@/stores/user'
import router from '@/router'

const authStore = useAuthStore()

function signOut() {
  authStore.signOut()
  router.push('/sign-in')
}
</script>

<style scoped>
.main-container {
  width: 100%;
  max-width: 960px !important;
}
</style>