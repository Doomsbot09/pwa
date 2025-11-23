<script setup>
  import { useAuthStore } from "../../store/auth"

  const authStore = useAuthStore()
  const categories = ref([
    {
      name: "Vocabulary Words",
      description: "Syllabication, pronunciation, meaning and sentences in English, Filipino and Hiligaynon",
      icon: "vocabulary-default.png",
      link: "/vocabulary",
      btnLabel: "Learn"
    },
    {
      name: "Pronunciation Practice",
      description: "Practice pronunciation with drills",
      icon: "pronunciation.png",
      link: "/pronunciation",
      btnLabel: "Learn"
    },
    {
      name: "Word Recognition",
      description: "Word Recognition and Fluency Activities",
      icon: "word-recognition.png",
      link: "/word-recognition",
      btnLabel: "Play Game"
    },
    {
      name: "Matching Game",
      description: "Match words with their meanings",
      icon: "matching.png",
      link: "/matching-game",
      btnLabel: "Play Game"
    },
    {
      name: "Multilingual Sentence Building",
      description: "Multilingual Sentence Building Exercises",
      icon: "multilingual.png",
      link: "/sentence-building",
      btnLabel: "Play Game"
    },
    {
      name: "Vocabulary Quiz",
      description: "Assessment Quiz in English, Filipino and Hiligaynon",
      icon: "vocabulary.png",
      link: "/vocabulary-quiz",
      btnLabel: "Play Game"
    }
  ])
</script>

<template>
  <Dialog :show-modal="authStore.checkIfNewUser()">
    <div class="modal-container">
      <div class="header">
        <label for="title">Hello There!</label>
        <span>Lets start by telling me your info</span>
      </div>
      <CreateUser></CreateUser>
    </div>
  </Dialog>
  <div class="container">
    <div class="section_left">
      <Card class="banner">
        <div class="banner-content">
          <span class="project-title">WELCOME TO TIES {{ authStore.userDetails.firstname }}</span>
          <span class="project-subtitle">(Three Language In Everyday Speech)</span>
          <span class="project-description">an Intervention Design to Enhance Pupil's Vocabulary through Multilingual Learning</span>
          <router-link to="/scoreboard">
            <Button label="Score Board" />
          </router-link>
        </div>
      </Card>
    </div>
    <div class="section_right">
      <div class="grid-container">
        <div class="grid-item" v-for="(item, index) in categories" :key="index">
          <Card>
            <div class="category">
              <div class="category-top">
                <NuxtImg class="icon" :src="`/${item.icon}`" />
                <span class="category-title">
                  {{ item.name }}
                </span>
                <span class="category-description">
                  {{ item.description }}
                </span>
              </div>
              <div class="category-bottom">
                <router-link :to="item.link">
                  <Button :label="item.btnLabel" />
                </router-link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;

    .section_left {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .banner {
        width: 70%;
        height: 70%;
      }

      .banner-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1.5rem;

        .project-title {
          font-size: 2.5rem;
          font-weight: 800;
        }

        .project-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .project-decription {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }

    .section_right {
      height: 100%;
      width: 50%;

      .grid-container {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        gap: 16px; /* spacing between items */
        padding: 16px;
      }

      .grid-item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;

        .category {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }

        .category-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          gap: 1rem;

          
          .icon {
            width: 4rem;
          }

          .category-title {
            font-size: 1.5rem;
            font-weight: 600;
          }

          .category-description {
            font-weight: 500;
          }
        }
      }
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
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .container {
      display: block;
      
      .section_left {
        height: auto;
        min-height: 50%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;

        .banner {
          height: 90%;
          width: 90%;

          .banner-content {
            justify-content: space-between;
            height: 40vh;

            .project-title {
              font-size: 1.5rem;
            }

            .project-subtitle {
              font-size: 1rem;
            }

            .project-decription {
              font-size: 0.5rem;
            }
          }
        }
      }

      .section_right {
        height: auto;
        width: 100%;
        
        .grid-container {
          grid-template-columns: 1fr;

          .grid-item {

            .category {
              
              .category-top {
                gap: 1rem;
                justify-content: flex-start;
                height: 35vh;
              }
            }
          }
        }
      }
      
    }
  }
</style>