<template>
  <div class="flex flex-col items-center">
    <Task
      v-for="(task, index) in taskStore.tasksList"
      :key="index"
      :id="task.id"
      :taskIndex="index"
      :created_at="task.inserted_at"
      :title="task.title"
      :edited="task.editing"
      :status="task.is_complete"
      :completed_at="task.completed_at"
    />
  </div>
</template>

<script setup>
import Task from '@/components/Task.vue'
import useTaskStore from '@/stores/task'

const taskStore = useTaskStore()

async function getTask() {
  try {
    await taskStore.fetchTasks()
  } catch (error) {
    console.log('Error on fetchtask:', error.message)
  }
}

getTask()
</script>
