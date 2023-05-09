<template>
  <div class="flex justify-between">    
    <h4 v-if="authStore.currentUser">Welcome</h4>
    <h5 v-if="authStore.currentUser">{{ authStore.currentUser.email }}</h5>
  </div>
  
</template>

<script setup>
import useAuthStore from '@/stores/user';
const authStore = useAuthStore();
</script>
