<script setup>
    const selected = ref(null)
    const props = defineProps({
        label: {
            type: String,
            default: 'Select'
        },
        items: {
            type: Array,
            required: true
        }
    })
    
</script>

<template>
    <div class="container" style="max-width: 300px">
        <div class="q-gutter-md">
            <q-select 
                v-model="selected" 
                :options="items" 
                :label="props.label"
                :clearable="true"
                option-label="name"
                option-value="value"
                class="select"
                @update:model-value="$emit('selectItem', selected.value)"
            />
        </div>
    </div>
</template>

<style scoped>
    .container {
        padding: 0 0.5rem;
        
        .select {
            width: 10vw;
        }
    }

    /* Responsive: 2 columns on tablets, 1 on mobile */
    @media (max-width: 1024px) {
        
    }

    @media (max-width: 600px) {
        .container {
            width: 100%;
            padding: 0;

            .select {
                width: 70vw;
            }
        } 
    }
</style>