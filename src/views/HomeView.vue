<script setup>
  import userStore from "../stores/userStore";
  import { ref } from 'vue';

//  const userStore = userStore();
  const nameInput = ref('');
  const handleSubmit = () => {
    userStore.changeName(nameInput.value);
    nameInput.value = '';
  };
</script>

<template>
  <div class="users">
    <h2>User: {{ userStore.user.name }}</h2>
    <h2>Email: {{ userStore.user.email }}</h2>
    <input type="text" placeholder="New name" v-model="nameInput"/>
    <button @click="handleSubmit">Update name</button>
  </div>

    <!--
  <div class="tasks">
    <h2>List of tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>

  <div class="tasks">
    <h2>List of users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.username }}</li>
    </ul>
  </div>
  -->
</template>


