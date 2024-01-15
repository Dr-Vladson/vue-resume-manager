<script setup>
import ResumeCard from '../components/home-page/ResumeCard.vue'
import CreateNewCard from '../components/home-page/CreateNewCard.vue'
import {store} from '../store/index'
import {getResumes} from '../features/queries'
import {onMounted} from 'vue'

onMounted(() => {
  getResumes();
});
</script>

<template>
  <main>
    <div v-if="!store.resumesSimpleArray[0]" class="loading-container"><h2>Loading</h2></div>
    <div v-else class="home-container">
        <ResumeCard v-for="resume in store.resumesSimpleArray" :key="resume.id" :id="resume.id" :name="resume.name" :position="resume.position"/>
        <CreateNewCard/>
    </div>
  </main>
</template>
<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
}
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
