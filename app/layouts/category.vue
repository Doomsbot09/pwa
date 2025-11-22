<template>
    <div class="content">
        <Card class="section">
            <slot />
        </Card>
    </div>
</template>

<style scoped>
    .content {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .section {
            height: 90%;
            width: 60%;
        }
    }

    /* Mobile */
    /* Responsive: 2 columns on tablets, 1 on mobile */
    @media (max-width: 1024px) {
        .section {
            width: 100%;
        }
    }

    @media (max-width: 600px) {
        .content {
            height: auto;
            margin: 1rem 0;

            .section {
                height: 95%;
                width: 90%;
            }
        } 
        
    }
</style>