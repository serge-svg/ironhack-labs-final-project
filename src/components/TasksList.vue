<template>
  <div class="tasks">
    <div to-do-items>
      <p v-if="tasks.length === 0">No items to display.</p>

      <div v-for="(task, index) in tasks" :key="index" >     
        <Task class="ml-4"
        :taskIndex="index"
        :message="task.title"
        :timestamp="task.inserted_at"
        :id="task.id"            
        />
      </div>
    </div>
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