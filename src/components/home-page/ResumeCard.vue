<script setup>
import { RouterLink } from 'vue-router';
import Button from '../common/Button.vue'
</script>

<template>
    <div class="resume-card">
        <h2 class="resume-card__title">
            Vladyslav Liubashenko
        </h2>
        <p class="resume-card__text">
            Junior Fullstack developer
        </p>
        <RouterLink to="/view-resume"><Button title="View resume"/></RouterLink>
    </div>
</template>
<style scoped>
.resume-card {
    box-sizing: border-box;
    width: 290px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    box-shadow: 1px 1px 7px 1px var(--main);
}
.resume-card__title,
.resume-card__text {
    text-align: center;
}
</style>