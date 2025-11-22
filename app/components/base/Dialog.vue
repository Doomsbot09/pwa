<script setup>
    const props = defineProps({
        showModal: {
            type: Boolean,
            default: false
        },
        showBtn: {
            type: Boolean,
            default: false
        },
        showBtnLabel: {
            type: String,
            default: 'OK'
        },
        backdrop: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <q-dialog 
        v-model="props.showModal"
        :persistent="props.backdrop">
        <q-card>
            <slot />

            <q-card-actions v-show="props.showBtn" align="right">
                <q-btn fab-mini :label="props.showBtnLabel" color="primary" @click="$emit('close')" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>