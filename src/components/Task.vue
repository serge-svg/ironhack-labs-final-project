<template>
  <div class="text-center w-1/2 px-5 py-3">
    <div class="flex gap-2 justify-between items-center mt-1">
      <p>Created</p>
      {{ created_at }}
    </div>
    <div v-if="completed" class="flex gap-2 justify-between items-center mt-1">
      <p>Completed</p>
      {{ completed_at }}
    </div>

    <div class="flex justify-between items-center">
      <div class="flex flex-start gap-2 items-center w-full">
        <input
          v-model="completed"
          type="checkbox"
          class="form-checkbox h-4 w-4 text-blue-600 align-center"
          @click="handleStatus"
        />

        <div v-if="isEditing" class="flex gap-2 w-full">
          <input
            type="text"
            v-model="newTitle"
            class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 w-full"
            placeholder="introduce a task"
            required
          />
          <button
            @click="handleSave()"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded px-2 py-1 mr-2"
          >
            Save
          </button>
        </div>

        <div v-else>
          <p id="task-desc">{{ title }}</p>
        </div>
      </div>

      <div class="flex gap-2 items-center my-4">
        <i class="fas fa-edit cursor-pointer" @click="handleEdit()"></i>
        <i class="fas fa-trash cursor-pointer" @click="handleDelete()"></i>
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useTaskStore from '@/stores/task'

const taskStore = useTaskStore()
const isEditing = ref(props.editing)
const newTitle = ref(props.title)
const completed = ref(props.status)
let completed_at = ref(props.completed_at)

const props = defineProps({
  id: Number,
  taskIndex: Number,
  created_at: String,
  title: String,
  editing: Boolean,
  status: Boolean,
  completed_at: String
})

async function handleSave() {
  try {
    await taskStore.updateDescription(props.id, newTitle.value)
    isEditing.value = !isEditing.value
  } catch (error) {
    console.log('Error saving task:', error)
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
  if (!newTitle.value) newTitle.value = props.title
  isEditing.value = !isEditing.value
}

async function handleStatus() {
  const newStatus = completed.value ? false : true
  completed_at = completed ? new Date().toISOString() : null

  try {
    await taskStore.updateStatus(props.id, newStatus)
  } catch (error) {
    console.log('Error saving task:', error)
  }
}
</script>
