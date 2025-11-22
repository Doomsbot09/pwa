<script setup>
    definePageMeta({
        layout: 'category'
    })
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
            <ComingSoon />
        </div>
        <div class="section-bottom">
            <Button label="Check Answer" />
            <Button label="Reset" />
            <Button label="Finish Game & Save Score" />
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