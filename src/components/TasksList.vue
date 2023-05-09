<template>
  <div class="tasks">
    <div to-do-items>

      <div v-for="(task, index) in taskStore.tasksList" :key="index">
        <Task class="ml-4"
          :id="task.id"
          :taskIndex="index"
          :timestamp="task.inserted_at"
          :title="task.title"
          :edited="task.editing"
        />
      </div>
    </div>
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
