<template>
  <div class="text-center my-2">
    <div class="flex items-center justify-between mx-auto px-1 w-1/2">
      <h4 v-if="authStore.currentUser">Welcome</h4>
      <h5 v-if="authStore.currentUser">{{ authStore.currentUser.email }}</h5>
    </div>
    <hr class="flex mx-auto items-center my-2 w-1/2" />
    <form @submit.prevent="validateForm">
      <input
        id="title"
        v-model="title"
        type="text"
        placeholder="Add thing to do"
        class="border rounded px-4 py-2 mr-2 w-1/3"
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2">
        Add
      </button>
    </form>
  </div>
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
    title.value = '';
  } catch (error) {
    console.log('Error creating a task:', error);
  }
}

function validateForm() {
  if (title.value === '' || title.value.length < 3) {
    alert('Description is required and must be at least 3 characters long');
  } else {
    handleAddTask();
  }
}
</script>
