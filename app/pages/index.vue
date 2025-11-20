<script setup lang="ts">
//
</script>

<template>
  <div class="container">
    <div class="section_left">
      <h1>Banner</h1>
      <h2>Project Name</h2>
      <h3>Project Description</h3>      
      <button>Score Board</button>
    </div>
    <div class="section_right">
      <div class="grid-container">
        <div class="grid-item" v-for="n in 6" :key="n">
          <Card>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non, voluptas ratione excepturi repellendus omnis fugit eos, veritatis consequuntur quasi obcaecati itaque nostrum illum saepe. Qui amet voluptas recusandae aspernatur.</span>
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
      border: 1px solid green;
      height: 100%;
      width: 50%;
    }

    .section_right {
      border: 1px solid blue;
      height: 100%;
      width: 50%;

      .grid-container {
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        gap: 16px; /* spacing between items */
        padding: 16px;
      }

      /* Responsive: 2 columns on tablets, 1 on mobile */
      @media (max-width: 1024px) {
        .grid-container {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 600px) {
        .grid-container {
          grid-template-columns: 1fr;
        }
      }

      .grid-item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
      }
    }
  }
</style>