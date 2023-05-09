<template>
  <form @submit.prevent="validateForm" class="flex items-center m-4">
    <input 
      id="title"
      v-model="title"
      type="text"
      placeholder="Add thing to do" 
      class="border rounded px-4 py-2 mr-2" 
    />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2">
      Add
    </button>
  </form>
</template>

<script setup>
import useTaskStore from '@/stores/task'
import useAuthStore from '@/stores/user'
import { ref } from 'vue'

const authStore = useAuthStore()
const taskStore = useTaskStore()
const title = ref('')

const handleAddTask = async () => {
  const user_id = ref(authStore.currentUser.id)
  const task = ref({ title, user_id })

  try {
    await taskStore.add(task.value)
    title.value = ''
  } catch (error) {
    console.log('Error creating a task:', error)
  }
}

function validateForm(){
  console.log('validateForm')
  if (title.value === '') {
    console.log('empty title')
  } else {
    console.log('ok')
    handleAddTask();
  }
}
</script>
