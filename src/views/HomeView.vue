<script setup>
import ResumeCard from '../components/home-page/ResumeCard.vue'
import CreateNewCard from '../components/home-page/CreateNewCard.vue'
</script>

<template>
  <main>
    <div class="home-container">
        <ResumeCard/>
        <CreateNewCard/>
    </div>
  </main>
</template>
<style scoped>
.home-container {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1200px;
}
</style>
