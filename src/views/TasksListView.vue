<template>
  <div class="tasks">
    <h2>List of tasks</h2>
    <h5>Taskscounter:</h5> {{ tasks.length }}
    <Task v-for="(task, index) in tasks" :key="index"
      :timestamp="task.timestamp"
      :message="task.message"
      />

  </div>
</template>

<script setup>
import Task from "@/components/Task.vue";
import useTaskStore from "@/stores/task";
import { ref } from 'vue';

  const tasks = ref([])
  const taskStore = useTaskStore();

  async function getTask(){
    tasks.value = await taskStore.fetchTasks();
  }

  getTask();

</script>

  