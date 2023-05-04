<template>
  <div class="container">
    <AddTask/>
    <TasksList/>
  </div>
</template>

<script setup>
  import TasksList from "@/components/TasksList.vue";
  import AddTask from "@/components/AddTask.vue";
</script>
