<script setup>
    import { useAuthStore } from "../../store/auth"    
    definePageMeta({
        layout: 'category'
    })

    const authStore = useAuthStore()

    const showModal = ref(false)
    const currentWord = ref(0)
    const data = ref([
        {
            word: "Alike",
            syllabication: "a-like",
            pronunciation: "/əˈlīk/",
            meanings: [
            { language: "English", meaning: "Similar" },
            { language: "Filipino", meaning: "Magkatulad" },
            { language: "Hiligaynon", meaning: "Magkatulad" }
            ],
            examples: [
            { language: "English", example: "The twins often dress alike." },
            { language: "Filipino", example: "Madalas magkatulad ang damit ng kambal." },
            { language: "Hiligaynon", example: "Masami nga pareho ang bayo sang kapid." }
            ]
        },
        {
            word: "Almost",
            syllabication: "al-most",
            pronunciation: "ôlmōst",
            meanings: [
            { language: "English", meaning: "nearly" },
            { language: "Filipino", meaning: "halos" },
            { language: "Hiligaynon", meaning: "daw" }
            ],
            examples: [
            { language: "English", example: "I am almost finished with my work." },
            { language: "Filipino", example: "Halos patapos na ako sa aking trabaho." },
            { language: "Hiligaynon", example: "Daw patapos na ako sa akon obra." }
            ]
        },
        {
            word: "Attempted",
            syllabication: "at-tempt-ted",
            pronunciation: "əˈtem(p)t-ted",
            meanings: [
            { language: "English", meaning: "try" },
            { language: "Filipino", meaning: "Nagtangka" },
            { language: "Hiligaynon", meaning: "nagtinguha" }
            ],
            examples: [
            { language: "English", example: "The kittens attempted to follow the rat up the" },
            { language: "Filipino", example: "Ang mga kuting ay nagtangka na sundan" },
            { language: "Hiligaynon", example: "Nagtinguha ang mga kuring sa pagsunod" }
            ]
        },
        {
            word: "Allow",
            syllabication: "al-low",
            pronunciation: "əˈlou",
            meanings: [
            { language: "English", meaning: "permit" },
            { language: "Filipino", meaning: "payagan" },
            { language: "Hiligaynon", meaning: "pasugtan" }
            ],
            examples: [
            { language: "English", example: "Will you allow me to use your bicycle?" },
            { language: "Filipino", example: "Pinapayagan mo ba akong gamitin ang iyong bisekleta?" },
            { language: "Hiligaynon", example: "Ginapasugtan mo bala ako nga gamiton ang imo bisekleta?" }
            ]
        },
        {
            word: "Amazed",
            syllabication: "a-mazed",
            pronunciation: "əˈmāzed",
            meanings: [
            { language: "English", meaning: "surprised" },
            { language: "Filipino", meaning: "humanga" },
            { language: "Hiligaynon", meaning: "makatilingala" }
            ],
            examples: [
            { language: "English", example: "The child’s speed in solving mathematical problems amazed us." },
            { language: "Filipino", example: "Humanga ako sa bilis ng bata sa paglutas ng mga problema sa Matematika." },
            { language: "Hiligaynon", example: "Makatilingala ang kadasigon sang bata sa pag solbar  sang mga problema sa Math." } // no sample provided
            ]
        },
        {
            word: "Ample",
            syllabication: "am-ple",
            pronunciation: "amp(ə)l",
            meanings: [
            { language: "English", meaning: "abundant" },
            { language: "Filipino", meaning: "sapat" },
            { language: "Hiligaynon", meaning: "bastante" }
            ],
            examples: [
            { language: "English", example: "We brought ample food for our camping trip." },
            { language: "Filipino", example: "Nagdala kami ng sapat na pagkain para sa aming camping." },
            { language: "Hiligaynon", example: "Nagdala kami sang bastante nga pagkaon para sa amon camping." }
            ]
        },
        {
            word: "Annoy",
            syllabication: "an-noy",
            pronunciation: "əˈnoi",
            meanings: [
            { language: "English", meaning: "disturb" },
            { language: "Filipino", meaning: "inis" },
            { language: "Hiligaynon", meaning: "nagapaugtas" }
            ],
            examples: [
            { language: "English", example: "The sound of that loud music from the radio annoys me." },
            { language: "Filipino", example: "Nainis ako sa malakas na tunog ng musika mula sa radyo." },
            { language: "Hiligaynon", example: "Nagaugtas ako sa matunog nga musika halin sa radyo." }
            ]
        },
        {
            word: "Bound",
            syllabication: "bound",
            pronunciation: "bound",
            meanings: [
            { language: "English", meaning: "going/headed" },
            { language: "Filipino", meaning: "punta" },
            { language: "Hiligaynon", meaning: "pakadto" }
            ],
            examples: [
            { language: "English", example: "The train is bound for Manila." },
            { language: "Filipino", example: "Ang tren ay papunta sa Maynila." },
            { language: "Hiligaynon", example: "Ang tren pakadto sa Manila." }
            ]
        }
    ])

    const changeWord = (action) => {
        if (action === 'next') {
            if ((currentWord.value + 1) < data.value.length) {
                currentWord.value ++
            }
        } else if (action === 'back') {
            if (currentWord.value > 0) {
                currentWord.value --
            }
        }
    }
</script>

<template>
    <Dialog :show-modal="showModal">
        <div class="modal-container">
        <div class="header">
            <label for="title">Hello There!</label>
            <span>Lets start by telling me your info</span>
        </div>
            <CreateUser></CreateUser>
        </div>
    </Dialog>
    <div class="container">
        <div class="section-top">
            <div class="section-1">
                <NuxtImg class="icon" src="/vocabulary-default.png" />
                <span class="title">Vocabulary</span>
            </div>
            <div class="section-2">
                <span>Learn words with syllabication, pronunciation, meanings, and sentences</span>
            </div>
        </div>
        <div class="section-body">
            <div class="section-1">
                <Card>
                    <div class="section-left">
                        <label for="word">Word</label>
                        <span>{{ data[currentWord].word }}</span>
                    </div>
                </Card>
                <Card>
                    <div class="section-right">
                        <label for="viewed">Viewed</label>
                        <span>{{ (currentWord + 1) }}/{{ data.length }}</span>
                    </div>
                </Card>
            </div>
            <div class="section-2">
                <Card>
                    <div class="section-2-container">
                        <div class="section-top">
                            <span>Syllabication: {{ data[currentWord].syllabication }}</span>
                            <span>Pronunciation: {{ data[currentWord].pronunciation }}</span>
                        </div>
                        <div class="section-bottom">
                            <span>Meanings</span>
                            <span v-for="(item, index) in data[currentWord].meanings" :key="index">
                                {{ item.language }}: {{ item.meaning }} 
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="section-3">
                <Card>
                    <span>Example Sentences</span>
                    <div class="sentences">
                        <div class="sentence-container" v-for="(item, index) in data[currentWord].examples" :key="index">
                            <span>
                                {{ item.language }}: {{ item.example }}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <div class="section-bottom">
            <Button label="Next" @click="changeWord('next')" />
            <Button label="Back" @click="changeWord('back')"/>
            <router-link to="/">
                <Button label="Back to Home" />
            </router-link>
        </div>
    </div>
</template>

<style>
    .container {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .section-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

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
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0.5rem;
            margin-top: 0.5rem;
            width: 100%;
            height: 75%;

            .section-1  {
                height: 20%;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                gap: 0.5rem;


                .section-left {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .section-right {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }

            .section-2 {
                height: 60%;

                .section-2-container {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    .section-top {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-self: center;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }

                    .section-bottom {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        border-left: 0.2rem solid gray;
                        border-radius: 1rem;
                        padding: 1rem;
                    }
                }
            }

            .section-3 {

                .sentences {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-top: 0.5rem;
                }

                .sentence-container {
                    border-left: 0.1rem solid gray;
                    border-radius: 0.5rem;
                    padding: 0.5rem;
                }
            }
        }

        .section-bottom {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            margin-top: 0.5rem;
            align-items: flex-start;
        }
    }

    .content {
        .section {
            height: auto !important;
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
</style>