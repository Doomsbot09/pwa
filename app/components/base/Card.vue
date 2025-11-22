<script setup>
  const props = defineProps({
    style: {
      type: String,
      default: ''
    },
    class: {
      type: String,
      default: ''
    }
  })
</script>

<template>
    <q-card class="card" :class="props.class" :style="props.style">
      <q-card-section class="section">
        <slot></slot>
      </q-card-section>
    </q-card>
</template>
<style scoped>
    .card {
      width: 100%;
      height: 100%;

      .section {
        height: 100%;
        width: 100%;
      }
    }

    @media (max-width: 600px) {
      .card {
        height: auto;
        
        .section {
          height: auto;
        }
      } 
      
    }    
</style>