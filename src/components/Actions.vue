<template>
  <div class="flex gap-2">
    <i class="fas fa-edit cursor-pointer" @click="handleEdit()"></i>
    <i class="fas fa-trash cursor-pointer" @click="handleDelete()"></i>
  </div>
</template>

<script setup>
import useTaskStore from '@/stores/task'

const taskStore = useTaskStore()
const props = defineProps({ id: Number, taskIndex: Number });

const handleDelete = async () => {
  try {
    await taskStore.delete(props.id, props.taskIndex);
  } catch (error) {
    console.log('Error on delete task:', error)
  }
}

function handleEdit() {
  const editTask = document.getElementById('m1').style.display;
  if (editTask === 'block') {
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m2').style.display = 'block';    
  } else {
    document.getElementById('m1').style.display = 'block';
    document.getElementById('m2').style.display = 'none';
  }
  console.log('Edit task')
}
</script>