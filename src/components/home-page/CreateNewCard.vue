<script setup>
import { RouterLink } from 'vue-router';
import IconPlus from '../icons/IconPlus.vue'
</script>

<template>
    <RouterLink to="/create-resume" class="create-new-card">
        <h2 class="create-new-card__title">
            Create new
        </h2>
        <IconPlus/>
    </RouterLink>
</template>
<style scoped>
.create-new-card {
    box-sizing: border-box;
    width: 290px;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 5px dashed var(--main);
}
.create-new-card svg{
    width: 60px;
    height: 60px;
}
.create-new-card__title {
    color: var(--second);
}
</style>