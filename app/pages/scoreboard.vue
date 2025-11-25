<script setup>
    import User from '@/api/users'

    definePageMeta({
        layout: 'category'
    })

    const user = User()

    const fields = ref([
        {
            name: 'name',
            label: 'Name'
        },
        {
            name: 'grade',
            label: 'Grade'
        },
        {
            name: 'section',
            label: 'Section'
        },
        {
            name: 'game',
            label: 'Game'
        },
        {
            name: 'score',
            label: 'Score'
        },
        {
            name: 'date',
            label: 'Date'
        }
    ])

    const data = ref([])
    
    const filteredBy = ref('grade')
    const filterByOptions = ref([
        {
            name: 'Grade',
            value: 'grade'
        },
        {
            name: 'Section',
            value: 'section'
        },
        {
            name: 'Category',
            value: 'category'
        }
    ])

    const filterItems = ref([
        {
            name: 'grade',
            items: [{
                name: '4',
                value: '4'
            },{
                name: '5',
                value: '5'
            },{
                name: '6',
                value: '6'
            }]
        },
        {
            name: 'section',
            items: [{
                name: 'Galaxy',
                value: 'galaxy'
            },{
                name: 'Planet',
                value: 'planet'
            },{
                name: 'Meteor',
                value: 'meteor'
            },{
                name: 'Pearl',
                value: 'pearl'
            },{
                name: 'Sapphire',
                value: 'sapphire'
            },{
                name: 'Topaz',
                value: 'topaz'
            },{
                name: 'Atis',
                value: 'atis'
            },{
                name: 'Guava',
                value: 'guava'
            }]
        },
        {
            name: 'category',
            items: [{
                name: 'Vocabulary Quiz',
                value: 'vocabulary-quiz',
            },{
                name: 'Matching Game',
                value: 'matching',
            },{
                name: 'Sentence Building',
                value: 'sentence-building',
            },{
                name: 'Word Recognition',
                value: 'word',
            }]
        }
    ])
    const computedFilterItems = computed(() => filterItems.value.find((item) => item.name === filteredBy.value))

    const findStudent = async (data) => {
        
    }

    const filteredByHandler = async (data) => {
        filteredBy.value = data
    }

    const getUsers = async () => {
        const resp = await user.getScores()
        if(resp) {
            data.value = resp.data.value.users.map((item) => ({...item, name: `${item.firstname} ${item.lastname}`}))
        } else {
            alert("No Internet")
        }
    }

    onMounted(async() => {
        await getUsers()
    })
</script>

<template>
    <div class="container">
        <div class="section-top">
            <div class="section-1">
                <NuxtImg class="icon" src="/scoreboard.png" />
                <span class="title">Scoreboard</span>
            </div>
            <div class="section-2">
                <span>Top Students</span>
            </div>
        </div>
        <div class="section-body">
            <Table 
                title="Students Score"
                :data="data"
                :fields="fields"
                :sortable="true"
                :searchable="true"
                :filterable="true"
                :filter-by="filterByOptions"
                :filter-item="computedFilterItems.items"
                @search="findStudent"
                @filteredBySelected="filteredByHandler"
            />
        </div>
        <div class="section-bottom">
            <Button label="Next" />
            <router-link to="/">
                <Button label="Back to Home" />
            </router-link>
        </div>
    </div>
</template>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .section-top {
            display: flex;
            flex-direction: column;
            align-items: center;

            .section-1 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;

                .icon {
                    width: 2rem;
                }

                .title {
                    font-size: xx-large;
                }
            }
        }

        .section-body {
            width: 100%;
            padding: 1rem 0;
        }

        .section-bottom {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
    }
</style>