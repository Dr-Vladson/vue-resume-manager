<script setup>
import { RouterLink } from 'vue-router';
import Button from '../common/Button.vue'
import { defineProps } from 'vue';

const props = defineProps(['id','name', 'position'])
</script>

<template>
    <div class="resume-card">
        <h2 class="resume-card__title">
            {{ name }}
        </h2>
        <p class="resume-card__text">
            {{ position }}
        </p>
        <RouterLink :to="`/view-resume/${id}`"><Button title="View resume"/></RouterLink>
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