<script setup>
    import { useAuthStore } from "../../store/auth"    
    definePageMeta({
        layout: 'category'
    })

    const data = ref([
        {
            set: "a",
            items: [
                {
                    language: "English",
                    sentence: "He attempted to open the door but it was locked."
                },
                {
                    language: "Filipino",
                    sentence: "Nagtangka siyang buksan ang pinto ngunit ito’y nakasara."
                },
                {
                    language: "Hiligaynon",
                    sentence: "Nagtinguha siya nga ablihon ang pwertahan pero sirado ini."
                }
            ]
        },
        {
            set: "b",
            items: [
                {
                    language: "English",
                    sentence: "She attempted to solve the puzzle."
                },
                {
                    language: "Filipino",
                    sentence: "Nagtangka siyang lutasin ang palaisipan."
                },
                {
                    language: "Hiligaynon",
                    sentence: "Nagtinguha siya nga sulbaron ang puzzle."
                }
            ]
        },
        {
            set: "c",
            items: [
                {
                    language: "English",
                    sentence: "The boy attempted to climb the tree."
                },
                {
                    language: "Filipino",
                    sentence: "Nagtangka ang batang umakyat sa puno."
                },
                {
                    language: "Hiligaynon",
                    sentence: "Nagtinguha ang bata nga magsaka sa kahoy."
                }
            ]
        },
        {
            set: "d",
            items: [
                {
                    language: "English",
                    sentence: "We attempted to finish our work on time."
                },
                {
                    language: "Filipino",
                    sentence: "Nagtangka kaming tapusin ang aming trabaho sa oras."
                },
                {
                    language: "Hiligaynon",
                    sentence: "Nagtinguha kami nga matapos ang amon obra sa tion."
                }
            ]
        },
        {
            set: "e",
            items: [
                {
                    language: "English",
                    sentence: "We brought ample food for our camping trip."
                },
                {
                    language: "Filipino",
                    sentence: "Nagdala kami ng sapat na pagkain para sa aming camping."
                },
                {
                    language: "Hiligaynon",
                    sentence: "Nagdala kami sang bastante nga pagkaon para sa amon camping."
                }
            ]
        },
        {
            set: "f",
            items: [
                {
                    language: "English",
                    sentence: "The classroom has ample space for group work."
                },
                {
                    language: "Filipino",
                    sentence: "May sapat na espasyo sa silid-aralan para sa group work."
                },
                {
                    language: "Hiligaynon",
                    sentence: "May bastante nga lugar sa kwarto para sa grupo."
                }
            ]
        },
        {
            set: "g",
            items: [
                {
                    language: "English",
                    sentence: "I am annoyed because my friend is late again."
                },
                {
                    language: "Filipino",
                    sentence: "Naiinis ako dahil nahuli na naman ang aking kaibigan."
                },
                {
                    language: "Hiligaynon",
                    sentence: "Naimol ako kay naulihi naman ang akon abyan."
                }
            ]
        }
    ])

    const authStore = useAuthStore()
    const showModal = ref(false)
    const currentSet = ref(0)

    const changeWord = (action) => {
        if (action === 'next') {
            if ((currentSet.value + 1) < data.value.length) {
                currentSet.value ++
            }
        } else if (action === 'back') {
            if (currentSet.value > 0) {
                currentSet.value --
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
                <NuxtImg class="icon" src="/sentence-reading.png" />
                <span class="title">Sentence Reading</span>
            </div>
            <div class="section-2">
                <span>Reading sentence in 3 languages</span>
            </div>
        </div>
        <div class="section-body">
            <Card class="section-1">
                <div class="section-top">
                    <label for="instruction">Instruction</label>
                    <span>Read the phrases aloud three times</span>
                </div>
            </Card>
            <Card>
                <div class="section-2">
                    <label for="viewed">Viewed</label>
                    <span>{{ (currentSet + 1) }}/{{ data.length }}</span>
                </div>
            </Card>
            <div class="section-3">
                <Card>
                    <div class="sentences">
                        <div class="sentence-container" v-for="(item, index) in data[currentSet]['items']" :key="index">
                            <span>
                                {{ item.language }}: {{ item.sentence }}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <div class="section-bottom">
            <!-- <Button label="Play Word Pronunciation" /> -->
            <Button label="Next" @click="changeWord('next')" />
            <Button label="Back" @click="changeWord('back')"/>
            <router-link to="/">
                <Button label="Back to Home" />
            </router-link>
        </div>
    </div>
</template>

<style>
    .content {
        .section {
            height: auto !important;
        }
    }

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
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0.5rem;
            margin-top: 0.5rem;
            width: 100%;
            height: 75%;

            .section-1 {
                width: 100%;

                .section-top {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 0.5rem;

                    label {
                        font-size: large;
                    }
                }
            }

            .section-2 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .section-3 {
                .sentences {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-top: 0.5rem;
                }

                .sentence-container {
                    border-left: 0.1rem solid gray;
                    border-radius: 0.5rem;
                    padding: 1rem;
                }
            }
        }

        .section-bottom {
            padding: 0.5rem;
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            margin-top: 0.5rem;
            align-items: flex-start;
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