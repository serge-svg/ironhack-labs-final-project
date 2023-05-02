<template>
    <div class="task">
        <div class="body">
            <div class="top">
                <Message :message="message" />
                <Timestamp :timestamp="timestamp" />
            </div>
            <Actions/>
        </div>
    </div>
</template>

<script setup>
    import Message from '@/components/Message.vue'
    import Timestamp from '@/components/Timestamp.vue'
    import Actions from '@/components/Actions.vue'

    const props = defineProps({
        timestamp: String,
        message: String
    });
</script>