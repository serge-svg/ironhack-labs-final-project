<script setup>
  import useTaskStore from '@/stores/task'
  const taskStore = useTaskStore()

  const props = defineProps({
    message: String
  });

  async function handleSave() {
    console.log('Save task')
    try {
      await taskStore.update(props.message);
    } catch (error) {
      console.log('Error on update task:', error)
    }
  }
</script>

<template>
  <div id="m1" style="display: none;">
    <input type="text" :value="message">
    <button @click="handleSave()">Save</button>  
  </div>

  <div id="m2">
      {{ message }}
  </div>
</template>

