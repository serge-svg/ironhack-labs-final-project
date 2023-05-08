<script setup>
  const props = defineProps({
    timestamp: String
  });

</script>

<template>
   <span>Created: </span> {{ timestamp }}
</template>