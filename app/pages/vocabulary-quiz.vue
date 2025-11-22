<script setup>
    definePageMeta({
        layout: 'category'
    })

    const questionSet = ref([
        {
            question: `What is the meaning of the word "room" in English?`,
            choices: [
                { name: "A small furry animal", answer: false },
                { name: "A space in a building", answer: true },
                { name: "A tool for writing", answer: false },
                { name: "An animal that can fly", answer: false }
            ]
        },
        {
            question: `What does the word "bright" mean in English?`,
            choices: [
                { name: "Full of light", answer: true },
                { name: "Very slow", answer: false },
                { name: "Covered in mud", answer: false },
                { name: "Hard to hear", answer: false }
            ]
        },
        {
            question: `What is the opposite of "hot"?`,
            choices: [
                { name: "Warm", answer: false },
                { name: "Cold", answer: true },
                { name: "Spicy", answer: false },
                { name: "Soft", answer: false }
            ]
        },
        {
            question: `What does the word "quickly" describe?`,
            choices: [
                { name: "How something moves", answer: true },
                { name: "Why something happens", answer: false },
                { name: "Who is speaking", answer: false },
                { name: "Where someone lives", answer: false }
            ]
        },
        {
            question: `What is the plural of "child"?`,
            choices: [
                { name: "Childs", answer: false },
                { name: "Children", answer: true },
                { name: "Childes", answer: false },
                { name: "Childrens", answer: false }
            ]
        },
        {
            question: `Ano ang kahulugan ng salitang "bahay"?`,
            choices: [
                { name: "Lugar na tinitirhan", answer: true },
                { name: "Isang uri ng hayop", answer: false },
                { name: "Kagamitan sa pagluluto", answer: false },
                { name: "Sasakyang panghimpapawid", answer: false }
            ]
        },
        {
            question: `Ano ang kasalungat ng salitang "malakas"?`,
            choices: [
                { name: "Mahina", answer: true },
                { name: "Mabagal", answer: false },
                { name: "Mataas", answer: false },
                { name: "Mainit", answer: false }
            ]
        },
        {
            question: `Ano ang ibig sabihin ng "masaya"?`,
            choices: [
                { name: "Malungkot", answer: false },
                { name: "Masigla at masaya ang pakiramdam", answer: true },
                { name: "Gutóm", answer: false },
                { name: "Pagod", answer: false }
            ]
        },
        {
            question: `Ano ang tamang baybay ng salitang nangangahulugang 'teacher' sa Filipino?`,
            choices: [
                { name: "Titser", answer: true },
                { name: "Ticher", answer: false },
                { name: "Titsher", answer: false },
                { name: "Titsir", answer: false }
            ]
        },
        {
            question: `Ano ang tawag sa pangngalang tumutukoy sa ngalan ng tao, bagay, hayop o lugar?`,
            choices: [
                { name: "Pangngalan", answer: true },
                { name: "Pandiwa", answer: false },
                { name: "Pangatnig", answer: false },
                { name: "Pang-uri", answer: false }
            ]
        }
    ])
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

            setTimeout(() => {
                selectedAnswer.value = null
                showMessage.value = ''
            }, 1000)

            console.log("save to score board")
        }
    }
    
</script>

<template>
    <div class="container">
        <div class="section-top">
            <div class="section-1">
                <NuxtImg class="icon" src="/vocabulary.png" />
                <span class="title">Vocabulary Quiz</span>
            </div>
            <div class="section-2">
                <span>Test your knowledge in English, Filipino, and Hiligaynon</span>
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
                    <label for="question">Question {{ currentSet + 1 }}</label>
                    <span>{{ questionSet[currentSet]['question'] }}</span>
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;

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
    }
</style>