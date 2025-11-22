<script setup>
    definePageMeta({
        layout: 'category'
    })
</script>

<template>
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
            width: 100%;
            height: 75%;
        }

        .section-bottom {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
        }
    }
</style>