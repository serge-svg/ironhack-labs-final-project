<template>
  <div class="tasks">
    <h2>List of tasks</h2>
  
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>   

  </div>
</template>

<script setup>
import useTaskStore from "@/stores/task";
import { ref } from 'vue';

  const tasks = ref([])
  const taskStore = useTaskStore();

  async function getTask(){
    tasks.value = await taskStore.fetchTasks();
  }

  getTask();

</script>

  