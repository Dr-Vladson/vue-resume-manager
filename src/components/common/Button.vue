<script setup>
defineProps({
    title: String,
})
</script>
<template>
    <div class="btn">
        <span>{{ title }}</span>
    </div>
</template>

<style scoped>
.btn {
    color: var(--second);
    box-shadow: 0 0 5px 0 var(--second);
    background-color: var(--main);
    width: 70px;
    height: 45px;     
    font-family: 'Lemon', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
}
</style>