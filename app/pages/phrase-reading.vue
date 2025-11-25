<script setup>
    import { useAuthStore } from "../../store/auth"    
    definePageMeta({
        layout: 'category'
    })

    const data = ref([
        {
            set: "a",
            items: [
                "Ample time to rest",
                "Ample water to drink",
                "An ample amount of rice"
            ]
        },
        {
            set: "b",
            items: [
                "Annoy me",
                "Annoy my friend",
                "An annoying sound"
            ]
        }
    ])

    const authStore = useAuthStore()
    const showModal = ref(false)
    
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
                <NuxtImg class="icon" src="/pronunciation.png" />
                <span class="title">Phrase Reading</span>
            </div>
            <div class="section-2">
                <span>Practice pronouncing words correctly</span>
            </div>
        </div>
        <div class="section-body">
            <Card class="section-1">
                <div class="section-top">
                    <label for="instruction">Instruction</label>
                    <span>Read the phrases aloud three times</span>
                </div>
            </Card>
            <div class="section-2" v-for="(item, index) in data" :key="index">
                <Card>
                    <div class="sentences">
                        <div class="sentence-container" v-for="(subItem, index) in item.items" :key="index">
                            <span>
                                {{ subItem }}
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <div class="section-bottom">
            <!-- <Button label="Next" />
            <Button label="Play Word Pronunciation" /> -->
            <router-link to="/">
                <Button label="Back to Home" />
            </router-link>
        </div>
    </div>
</template>

<style>
    .card {
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
                    padding: 0.7rem;
                }
            }
        }

        .section-bottom {
            padding: 0.5rem;
            display: flex;
            flex-direction: row;
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