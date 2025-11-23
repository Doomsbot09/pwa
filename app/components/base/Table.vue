<script setup>
    const emits = defineEmits(['filteredBySelected'])
    const props = defineProps({
        title: {
            type: String,
            default: 'Table Name'
        },
        data: {
            type: Array,
            required: true
        },
        fields: {
            type: Array,
            required: true
        },
        sortable: {
            type: Boolean,
            default: false
        },
        searchable: {
            type: Boolean,
            default: false
        },
        filterable: {
            type: Boolean,
            default: false
        },
        filterBy: {
            type: Array,
            default: []
        },
        filterItem: {
            type: Array,
            default: []
        }
    })
    const search = ref('')

    const columns = computed(() => props.fields.map((item) => ({
        name: item.name,
        field: item.name,
        label: item.label,
        align: item?.align ? item.align : 'center',
        sortable: props.sortable
    })))

    const selectFilterBy = (data) => {
        emits('filteredBySelected', data)
    }
</script>

<template>
    <q-table
      :title="props.title"
      :rows="props.data"
      :columns="columns"
      row-key="name">
        <template v-slot:top-right>
            <Select 
                v-show="filterable"
                label="Filter By"
                :items="props.filterBy"
                @selectItem="selectFilterBy"
            />
            <Select 
                v-show="filterable"
                label="Filter Item"
                :items="props.filterItem"
            />
            <q-input v-show="props.searchable" class="search" debounce="300" v-model="search" placeholder="Search">
                <template v-slot:append>
                    <q-icon name="search" style="cursor: pointer;" @click="$emit('search', search)" />
                </template>
            </q-input>
        </template>
    </q-table>

</template>

<style scoped>
     /* Responsive: 2 columns on tablets, 1 on mobile */
    @media (max-width: 1024px) {
        
    }

    @media (max-width: 600px) {
        .search {
            width: 95%;
        }
    }
</style>