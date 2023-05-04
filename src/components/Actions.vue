<template>
   <div class="actions">
    <!-- Font Awesome icons -->  
    <i class="fas fa-edit cursor-pointer"></i>
    <i class="fas fa-trash cursor-pointer" @click="handleDelete()"></i>
  </div>
</template>

<script setup>
import useTaskStore from '@/stores/task'
import TaskIndex from '@/components/TaskIndex.vue'

const taskStore = useTaskStore()
const props = defineProps({ id: Number, taskIndex: Number });

const handleDelete = async () => {
  try {
    await taskStore.delete(props.id, props.taskIndex);
  } catch (error) {
    console.log('Error on delete task:', error)
  }
}
</script>