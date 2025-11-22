<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: "Button"
        },
        color: {
            type: String,
            default: "dark"
        }
    })
</script>

<template>
    <q-btn :label="props.label" :color="props.color"></q-btn>
</template>