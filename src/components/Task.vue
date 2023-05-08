<template>
    <div class="flex flex-col">
        <div class="flex-row">             
            <Timestamp :timestamp="timestamp" />
        </div>
        <div class="flex-row">
          <span class="flex gap-4">
            <Message :message="message" />
            <Actions :id="id" :taskIndex="taskIndex"/>                        
        </span>
        </div>
    </div>
</template>

<script setup>
    import Message from '@/components/Message.vue'
    import Timestamp from '@/components/Timestamp.vue'
    import Actions from '@/components/Actions.vue'
    
    const props = defineProps({
        timestamp: String,
        message: String,
        taskIndex: Number,
        id: Number
    });

    console.log('timestamp---> '+props.timestamp)
    console.log('message---> '+props.message)
    console.log('index---> '+props.taskIndex)
</script>