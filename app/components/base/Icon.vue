<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'sm'
        }
    })
</script>

<template>
    <q-icon :name="props.name" :size="props.size" ></q-icon>
</template>