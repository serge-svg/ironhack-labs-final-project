<template>
  <div class="tasks">
    <div to-do-items>

      <div v-for="(task, index) in tasks" :key="index">
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
import { ref } from 'vue'

const tasks = ref([])
const taskStore = useTaskStore()

async function getTask() {
  console.log(`getTask`)
  tasks.value = await taskStore.fetchTasks();
}

getTask()
</script>
