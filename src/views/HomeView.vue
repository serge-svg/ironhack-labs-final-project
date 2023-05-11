<template>
  <div class="home-container">
    <div class="flex justify-between">    
      <h4 v-if="authStore.currentUser">Welcome</h4>
      <h5 v-if="authStore.currentUser">{{ authStore.currentUser.email }}</h5>
    </div>
    <h2 class="text-2xl font-bold">Manage your task with</h2>
  </div>
</template>

<script setup>
import useAuthStore from '@/stores/user';
const authStore = useAuthStore();
</script>

<style scoped>
.home-container {
  background-image: url('../assets/img/home_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 40vh;
  width: auto;
}
</style>
```
