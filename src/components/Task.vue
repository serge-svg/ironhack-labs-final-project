<template>
  <div class="flex flex-col">
        <div class="flex gap-2 items-center mt-1">
            <p>Created:</p> {{ timestamp }}
        </div>
        
        <div class="flex justify-between items-center">
            <div v-if="isEditing" class="flex gap-2">
                <input type="text" v-model="newTitle" 
                class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="introduce a task" required />
                <button @click="handleSave()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-2 py-1">
                Save
                </button>
            </div>    
            
            <div v-else><p>{{ newTitle }}</p></div>

            <div class="flex gap-2 items-center my-4">
                <i class="fas fa-edit cursor-pointer" @click="handleEdit()"></i>
                <i class="fas fa-trash cursor-pointer" @click="handleDelete()"></i>
            </div>
            id:{{ id }}
            index:{{ taskIndex }}
        </div>  
    <hr>    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useTaskStore from '@/stores/task'

const taskStore = useTaskStore();
const isEditing = ref(props.editing);
const newTitle = ref(props.title);

const props = defineProps({
  id: Number,
  taskIndex: Number,
  timestamp: String,
  title: String,  
  editing: Boolean
});

async function handleSave() {
  try {
    await taskStore.update(props.id, newTitle.value);
    newTitle.value = newTitle.value;
    isEditing.value = !isEditing.value;
  } catch (error) {
    console.log('Error saving task:', error);
  }
}

const handleDelete = async () => {
  try {
    await taskStore.delete(props.id, props.taskIndex)
  } catch (error) {
    console.log('Error deleting task:', error)
  }
}

function handleEdit() {
    if (!newTitle.value) newTitle.value = props.title;
    isEditing.value = !isEditing.value;
}
</script>
