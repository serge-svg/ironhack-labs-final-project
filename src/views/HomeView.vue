<template>
  <div>
  <h2>Task Manager</h2>
</div>
<div>
  <h4>Welcome</h4>
  <h5> {{ authStore.currentUser.email }}</h5>
</div>
</template>

<script setup>
import useAuthStore from '@/stores/user'
const authStore = useAuthStore();
</script>


