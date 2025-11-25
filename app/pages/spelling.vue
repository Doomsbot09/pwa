<script setup>
    import { useAuthStore } from "../../store/auth"    
    definePageMeta({
        layout: 'category'
    })

    const questionSet = ref([
        {
            question: 1,
            choices: [
                { name: "atempted", answer: false },
                { name: "attempted", answer: true },
                { name: "atemtid", answer: false },
                { name: "atemted", answer: false }
            ]
        },
        {
            question: 2,
            choices: [
                { name: "almos", answer: false },
                { name: "olmos", answer: false },
                { name: "ulmost", answer: false },
                { name: "almost", answer: true }
            ]
        },
        {
            question: 3,
            choices: [
                { name: "alayk", answer: false },
                { name: "alike", answer: true },
                { name: "allike", answer: false },
                { name: "allyk", answer: false }
            ]
        },
        {
            question: 4,
            choices: [
                { name: "amazed", answer: true },
                { name: "amized", answer: false },
                { name: "amezed", answer: false },
                { name: "ammayz", answer: false }
            ]
        },
        {
            question: 5,
            choices: [
                { name: "bownd", answer: false },
                { name: "bowned", answer: false },
                { name: "bowned", answer: false },
                { name: "bound", answer: true }
            ]
        },
        {
            question: 6,
            choices: [
                { name: "anoy", answer: false },
                { name: "annoy", answer: true },
                { name: "unknoy", answer: false },
                { name: "unnoy", answer: false }
            ]
        },
        {
            question: 7,
            choices: [
                { name: "ampol", answer: false },
                { name: "ample", answer: true },
                { name: "amplle", answer: false },
                { name: "umple", answer: false }
            ]
        },
        {
            question: 8,
            choices: [
                { name: "alaw", answer: false },
                { name: "allaw", answer: false },
                { name: "allow", answer: true },
                { name: "Alawe", answer: false }
            ]
        }
    ])

    const authStore = useAuthStore()
    const router = useRouter()

    const showUserModal = ref(true)
    const showModal = ref(false)

    let score = ref(0)
    let currentSet = ref(0)
    let selectedAnswer = ref(null)
    let showMessage = ref('')

    const selectAnswer = async (answer, index) => {
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

            console.log("save to score board")
        }
    }

    const saveScore = async () => {
        authStore.gameDetails.name = "Spelling Quiz"
        authStore.gameDetails.score = score.value
        router.push('/')
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
                <NuxtImg class="icon" src="/spelling-quiz.png" />
                <span class="title">Spelling Quiz</span>
            </div>
            <div class="section-2">
                <span>Choose the word that is spelled correctly and become a spelling superstar!</span>
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
                    <span>Choose the correct spelling of the word you learned.</span>
                </div>
            
                <div class="grid-container">
                    <div class="grid-item" v-for="(item, index) in questionSet[currentSet]['choices']" :key="index">
                        <Card 
                            @click="selectAnswer(item.answer, index)" 
                            :class="{
                                'bg-green text-white': (selectedAnswer === index && item.answer === true),
                                'bg-red text-white': (selectedAnswer === index && item.answer === false) 
                            }">
                            {{ item.name }}
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

            .section-2 {
                text-align: center;
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
            padding: 0.5rem;
            display: flex;
            flex-direction: row;
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
    .container {
        .section-bottom {
            display: grid;
            grid-template-columns: 1fr;
            place-content: center;
            place-items: center;
        }
    }
  }
</style>