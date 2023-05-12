<template>
  <div class="max-w-960 text-center">
      <Task v-for="(task, index) in taskStore.tasksList" :key="index" :id="task.id" :taskIndex="index"
        :timestamp="task.inserted_at" :title="task.title" :edited="task.editing" :status="task.is_complete" 
      />
  </div>  
</template>

<script setup>
import Task from '@/components/Task.vue'
import useTaskStore from '@/stores/task'

const taskStore = useTaskStore();

async function getTask() {
  try {
    await taskStore.fetchTasks();

  } catch (error) {
    console.log('Error on fetchtask:', error.message);
  }
}

getTask()
</script>
