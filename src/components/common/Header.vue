<template>
    <header class="header">
        <div class="header__container">
            <h1 class="header__title">Welcome to resume creator!</h1>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: var(--main);
    box-shadow: 0 0 5px 0 var(--second);
}
.header__container {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.header__title {
    font-size: 30px;
    color: var(--second);
}
</style>
