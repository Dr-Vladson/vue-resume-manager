<script setup>
import ResumeCard from '../components/home-page/ResumeCard.vue'
import CreateNewCard from '../components/home-page/CreateNewCard.vue'
</script>

<template>
  <main>
    <div class="home-container">
        <ResumeCard/>
        <ResumeCard/>
        <ResumeCard/>
        <CreateNewCard/>
    </div>
  </main>
</template>
<style scoped>
.home-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px auto 0;
  padding: 0 30px;
  max-width: 1200px;
}
</style>
