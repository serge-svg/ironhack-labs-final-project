<template>
    <div class="task">
        <div class="body">
            <div class="top">
                <Timestamp :timestamp="timestamp" />
            </div>

            <Message :message="message" />
            <Actions :id="id" :taskIndex="taskIndex"/>
            
            
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