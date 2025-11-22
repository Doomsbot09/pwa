<script setup>
    definePageMeta({
        layout: 'category'
    })
</script>

<template>
    <div class="container">
        <div class="section-top">
            <div class="section-1">
                <NuxtImg class="icon" src="/vocabulary.png" />
                <span class="title">Scoreboard</span>
            </div>
            <div class="section-2">
                <span>Top Students</span>
            </div>
        </div>
        <div class="section-body">
            <ComingSoon />
        </div>
        <div class="section-bottom">
            <Button label="Next" />
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

                .icon {
                    width: 2rem;
                }

                .title {
                    font-size: xx-large;
                }
            }
        }

        .section-bottom {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
    }
</style>