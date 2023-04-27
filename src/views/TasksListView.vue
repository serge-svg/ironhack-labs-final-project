<template>
  <div class="tasks">
    <h2>List of tasks</h2>
  
    <ul>
      <li v-for="item in tasks" :key="item.id">
        {{ item.title }}
      </li>
    </ul>   

  </div>
</template>

<script setup>

import useTaskStore from "@/stores/task";
import { ref } from 'vue';
const tasks = ref([])
const taskStore = useTaskStore();
tasks.value = taskStore.fetchTasks();

console.log(`tasks: ${tasks}`)
</script>

  