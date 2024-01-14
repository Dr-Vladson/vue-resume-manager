<script setup>
import { RouterLink } from 'vue-router';
import Button from '../common/Button.vue'
</script>

<template>
    <div class="resume-card">
        <h2 class="resume-card__title">
            Vladyslav Liubashenko
        </h2>
        <p class="resume-card__title">
            Junior Fullstack developer
        </p>
        <RouterLink to="/watch-resume"><Button title="View"/></RouterLink>
    </div>
</template>
<style scoped>
.resume-card {
    width: 290px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    box-shadow: 1px 1px 7px 1px var(--main);
}
</style>