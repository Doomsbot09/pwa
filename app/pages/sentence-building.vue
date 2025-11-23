<script setup>
    definePageMeta({
        layout: 'category'
    })

    const router = useRouter()
    const questionSet = ref([
        {
            question: `The twins look very __________ when they wear the same clothes.`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: false },
                { name: "bound", answer: false },
                { name: "annoy", answer: false },
                { name: "allow", answer: false },
                { name: "alike", answer: true },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: false }
            ]
        },
        {
            question: `I am __________ done cleaning my room.`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: true },
                { name: "bound", answer: false },
                { name: "annoy", answer: false },
                { name: "allow", answer: false },
                { name: "alike", answer: false },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: false }
            ]
        },
        {
            question: `The cat __________ to jump onto the table but failed.`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: false },
                { name: "bound", answer: false },
                { name: "annoy", answer: false },
                { name: "allow", answer: false },
                { name: "alike", answer: false },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: true }
            ]
        },
        {
            question: `Will you __________ me to borrow your book?`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: false },
                { name: "bound", answer: false },
                { name: "annoy", answer: false },
                { name: "allow", answer: true },
                { name: "alike", answer: false },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: false }
            ]
        },
        {
            question: `We were __________ by the magician’s tricks`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: false },
                { name: "bound", answer: false },
                { name: "annoy", answer: false },
                { name: "allow", answer: false },
                { name: "alike", answer: false },
                { name: 'amazed', answer: true },
                { name: "attempted", answer: false }
            ]
        },
        {
            question: `We brought __________ water for our trip.`,
            choices: [
                { name: "ample", answer: true },
                { name: "almost", answer: false },
                { name: "bound", answer: false },
                { name: "annoy", answer: false },
                { name: "allow", answer: false },
                { name: "alike", answer: false },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: false }
            ]
        },
        {
            question: `The buzzing mosquito really __________ me.`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: false },
                { name: "bound", answer: false },
                { name: "annoy", answer: true },
                { name: "allow", answer: false },
                { name: "alike", answer: false },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: false }
            ]
        },
        {
            question: `The bus is __________ for Iloilo City.`,
            choices: [
                { name: "ample", answer: false },
                { name: "almost", answer: false },
                { name: "bound", answer: true },
                { name: "annoy", answer: false },
                { name: "allow", answer: false },
                { name: "alike", answer: false },
                { name: 'amazed', answer: false },
                { name: "attempted", answer: false }
            ]
        }
    ]);

    let score = ref(0)
    let currentSet = ref(0)
    let selectedAnswer = ref(null)
    let showMessage = ref('')
    let showModal = ref(false)

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

    const backToHome = async () => {
        router.push('/')
    }
</script>

<template>
    <div class="container">
        <div class="section-top">
            <div class="section-1">
                <NuxtImg class="icon" src="/multilingual.png" />
                <span class="title">Sentence Building</span>
            </div>
            <div class="section-2">
                <span>Build sentences by arranging words in the correct order</span>
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
                    <span>Sentence Completion (Use the correct word in each blank) (alike, almost, attempted, allow, amazed, ample, annoy, bound)</span>
                    <label for="question">Question {{ currentSet + 1 }}</label>
                    <span v-html="questionSet[currentSet]['question']"></span>
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
    <Dialog 
        :show-modal="showModal"
        :show-btn="true"
        :backdrop="true"
        @close="backToHome()">
        <div class="modal-content">
            <span>Job Well Done!</span>
            <p>You Got A Score Of {{ score }} Out Of {{ questionSet.length }}</p>
        </div>
    </Dialog>
</template>

<style>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .section-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 15%;

            .section-1 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                .icon {
                    width: 2rem;
                }

                .title {
                    font-size: xx-large;
                    font-weight: 600;
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
            height: 10%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1rem;
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

    .card {
        .section {
            height: auto !important;
        }
    }

    /* Mobile */
    /* Responsive: 2 columns on tablets, 1 on mobile */
    @media (max-width: 1024px) {
        .grid-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .container {

            .section-top > .section-2 {
                padding: 0.5rem 0;
            }
        
            .section-body {

                .section-2 {

                    .grid-container {
                        grid-template-columns: 1fr;
                    }
                }
            }

            .section-bottom {
                margin-top: 1rem;
            }
        }

        .modal-content {
            width: 80vw;
        }
    }
</style>