<template>
    <form @submit.prevent="handleAddTask" class="to-do-item">
        <input v-model="title" type="text" placeholder="Add thing to do" class="input input-bordered input-primary w-full max-w-xs" />
        <button class="btn btn-primary">Add</button>
    </form>
</template>

<script setup>
  import useTaskStore from "@/stores/task";
  import useAuthStore from '@/stores/user'
  import { ref } from 'vue';

  const authStore = useAuthStore()
  const taskStore = useTaskStore();
  const title = ref('')
  debugger
  const user_id = ref(authStore.currentUser);
  const task = ref({title, user_id});
  

  const handleAddTask = async () => {

    console.log(`user_id: ${user_id.value}`)
    try {
        await taskStore.add(task.value)
    } catch (error) {
        console.log('Error creating a task:', error)
    }
  }

</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #to-do-items {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  </style>  