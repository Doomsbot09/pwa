<script setup>
    import { useAuthStore } from "../../store/auth"
    import User from '@/api/users'

    definePageMeta({
        layout: 'category'
    })

    const questionSet = ref([
        {
            instruction: "Select all the words that are the same as the words you read",
            question: "Read the words three times: Alike, Alike, Alike",
            type: "words",
            isMultipleSelect: true,
            choices: [
                {
                    name: "alike",
                    answer: true
                },
                {
                    name: "alive",
                    answer: false
                },
                {
                    name: "apple",
                    answer: false
                },
                {
                    name: "alike",
                    answer: true
                },
                {
                    name: "always",
                    answer: false
                },
                {
                    name: "alike",
                    answer: true
                },
                {
                    name: "asleep",
                    answer: false
                }
            ]
        },
        {
            instruction: "Find Its Pair",
            question: "Find and select the meaning of the word written in RED. <i style='color: red'>ALIKE</i>",
            type: "words",
            isMultipleSelect: false,
            choices: [
                {
                    name: "Hot",
                    answer: false
                },
                {
                    name: "Cold",
                    answer: false
                },
                {
                    name: "Happy",
                    answer: false
                },
                {
                    name: "Similar",
                    answer: true
                }
            ]
        },
        {
            instruction: "Select the picture that is alike.",
            question: "Find and select the picture that is alike",
            type: "pictures",
            isMultipleSelect: false,
            choices: [
                {
                    name: "/image1.png",
                    answer: true
                },
                {
                    name: "/image2.png",
                    answer: false
                }
            ]
        }
    ])
    
    const authStore = useAuthStore()
    const router = useRouter()
    const user = User()

    const showModal = ref(false)
    const showUserModal = ref(true)
    
    let score = ref(0)
    let currentSet = ref(0)
    let selectedAnswer = ref(null)
    let multiSelectedAnswer = ref([])
    let multiSelectedCorrect = ref(0)
    let showMessage = ref('')

    const selectAnswer = async (answer, index, isMultipleSelect) => {
        if (isMultipleSelect) {
            if (multiSelectedAnswer.value.length < 3) {
                multiSelectedAnswer.value.push(index)

                if (answer) {
                    multiSelectedCorrect.value += 1
                }

                if (multiSelectedAnswer.value.length === 3) {
                    if (multiSelectedCorrect.value === 3) {
                        score.value += 1
                        showMessage.value = 'Congratulations You Got The Correct Answer!'
                    } else {
                        showMessage.value = 'Nice Trying Hard But You Got The Wrong Answer'
                    }

                    setTimeout(() => {
                        showMessage.value = ''
                        currentSet.value += 1
                    }, 1000)
                }
            }
        } else {
            selectedAnswer.value = index
            showMessage.value = answer ? 'Congratulations You Got The Correct Answer!' : 'Nice Trying Hard But You Got The Wrong Answer'
            if ((currentSet.value + 1) < questionSet.value.length) {
                if (answer) {
                    score.value += 1
                }

                setTimeout(() => {
                    selectedAnswer.value = null
                    showMessage.value = ''
                    currentSet.value += 1
                }, 1000)
            } else {
                if (answer) {
                    score.value += 1
                }

                showModal.value = true

                setTimeout(() => {
                    selectedAnswer.value = null
                    showMessage.value = ''
                }, 1000)
            }
        }
    }

    const saveScore = async () => {
        const payload = {
            ...authStore.userDetails,
            score: score.value,
            game: "Word Recognition"
        }
        const result = await user.saveGameScore(payload)

        if (result) {
            console.log(result)
            router.push('/')
        } else {
            alert("No Internet")
        }
    }
</script>

<template>
    <Dialog :show-modal="showUserModal">
        <div class="modal-container">
        <div class="header">
            <label for="title">Hello There!</label>
            <span>Lets start by telling me your info</span>
        </div>
            <CreateUser @submit="showUserModal = false"></CreateUser>
        </div>
    </Dialog>
    <Dialog 
        :show-modal="showModal"
        :show-btn="true"
        :backdrop="true"
        @close="saveScore()">
        <div class="modal-content">
            <span>Job Well Done {{ authStore.userDetails.firstname }}!</span>
            <p>You Got A Score Of {{ score }} Out Of {{ questionSet.length }}</p>
        </div>
    </Dialog>
    <div class="container">
        <div class="section-top">
            <div class="section-1">
                <NuxtImg class="icon" src="/word-recognition.png" />
                <span class="title">Word Recognition</span>
            </div>
            <div class="section-2">
                <span>Learn words with syllabication, pronunciation, meanings, and sentences</span>
            </div>
        </div>
        <div class="section-body">
            <Card class="section-1">
                <div class="section-main">
                    <div class="section-left">
                        <label for="score">Score</label>
                        <span>{{ score }}</span>
                    </div>
                    <div class="section-right">
                        <label for="question">Question</label>
                        <span>{{ currentSet + 1 }}/{{ questionSet.length }}</span> 
                    </div>
                </div>
            </Card>
            <Card class="section-2">
                <div class="section-top">
                    <label for="instruction">Instruction</label>
                    <span v-html="questionSet[currentSet]['instruction']"></span>
                    <label for="question">Activity {{ currentSet + 1 }}</label>
                    <span v-html="questionSet[currentSet]['question']"></span>
                </div>
            
                <div class="grid-container">
                    <div 
                        class="grid-item"
                        v-if="questionSet[currentSet]['isMultipleSelect']" 
                        v-for="(item, index) in questionSet[currentSet]['choices']" :key="index">
                        <Card 
                            @click="selectAnswer(item.answer, index, true)" 
                            class="item-hover"
                            :class="{
                                'bg-green text-white': (multiSelectedAnswer.includes(index) && item.answer === true),
                                'bg-red text-white': (multiSelectedAnswer.includes(index) && item.answer === false) 
                            }">
                            {{ item.name }}
                        </Card>
                    </div>
                    <div 
                        class="grid-item"
                        v-if="questionSet[currentSet]['type'] === 'words' && !questionSet[currentSet]['isMultipleSelect']" 
                        v-for="(item, index) in questionSet[currentSet]['choices']" :key="index">
                        <Card 
                            @click="selectAnswer(item.answer, index, false)"
                            class="item-hover"
                            :class="{
                                'bg-green text-white': (selectedAnswer === index && item.answer === true),
                                'bg-red text-white': (selectedAnswer === index && item.answer === false) 
                            }">
                            {{ item.name }}
                        </Card>
                    </div>
                    <div 
                        class="grid-item"
                        v-if="questionSet[currentSet]['type'] === 'pictures' && !questionSet[currentSet]['isMultipleSelect']" 
                        v-for="(item, index) in questionSet[currentSet]['choices']" :key="index">
                        <Card 
                            @click="selectAnswer(item.answer, index, false)"
                            class="item-hover"
                            :class="{
                                'bg-green text-white': (selectedAnswer === index && item.answer === true),
                                'bg-red text-white': (selectedAnswer === index && item.answer === false) 
                            }">
                            <NuxtImg :src="item.name" />
                        </Card>
                    </div>
                </div>

                <Card 
                    v-show="showMessage !== ''"
                    style="height: 20%; margin-top: 1rem; text-align: center;"
                    class="bg-dark text-white">
                    {{ showMessage }}
                </Card>
            </Card>
        </div>
        <div class="section-bottom">
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
                    font-size: 1.5rem;
                }
            }
        }

        .section-body {
            width: 100%;
            height: 75%;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .section-1 {
                height: 30%;
                width: 100%;

                .section-main {
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;

                    span {
                        font-size: large;
                    }
                    
                    .section-left, .section-right {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                }

                .section-left {
                    display: flex;   
                }
            }

            .section-2 {
                height: 70%;
                width: 100%;

                .section-top {
                    height: 40%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 0.5rem;
                    text-align: start;

                    label {
                        font-size: large;
                    }
                }

                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3 columns */
                    gap: 1rem; /* spacing between items */
                    padding: 2rem 0 0 0;
                }
            }
        }

        .section-bottom {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
    }

    .modal-content {
        height: 11vh;
        width: 36vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem;

        span {
            font-size: 1.5rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            font-weight: 500;
        }
    }

    .modal-container {
        padding: 0.5rem;

        .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            label {
                font-size: 1.5rem;
                font-weight: 600;
            }

            span {
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }
  
  /* Responsive: 2 columns on tablets, 1 on mobile */
  @media (max-width: 1024px) {
    
  }

  @media (max-width: 600px) {
    .modal-content {
        width: 80vw;
    }
  }
</style>