<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'Dropdown'
    },
    items: {
      type: Array,
      required: true
    }
  })

</script>

<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="primary" :label="props.label">
      <q-list>
        <q-item v-for="(item, index) in items" clickable v-close-popup @click="$emit('selectItem', item.value)" :key="index">
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>