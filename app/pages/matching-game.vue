<script setup>
    import { useAuthStore } from "../../store/auth"    
    definePageMeta({
        layout: 'category'
    })

    const authStore = useAuthStore()
    const showModal = ref(true)

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
                <NuxtImg class="icon" src="/matching.png" />
                <span class="title">Matching Word</span>
            </div>
            <div class="section-2">
                <span>Match each word with its correct meaning</span>
            </div>
        </div>
        <div class="section-body">
            <ComingSoon />
        </div>
        <div class="section-bottom">
            <Button label="Check Completion" />
            <!-- <Button label="Finish Game & Save Score" /> -->
            <Button label="New Game" />
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

        .section-bottom {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
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