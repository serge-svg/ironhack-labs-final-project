<template>
  <AddTask />
  <hr class="flex mx-auto items-center w-1/2" />
  <TasksList />
</template>

<script setup>
import TasksList from '@/components/TasksList.vue'
import AddTask from '@/components/AddTask.vue'
</script>
