<script setup>
import Button from '@/components/common/Button.vue';
import IconQuotes from '@/components/icons/IconQuotes.vue'
</script>
<template>
    <main>
        <div class="resume">
            <div class="container">
                <div class="resume__block">
                    <div class="contact-info">
                        <div class="contact-info__header" >
                            <input type="text" placeholder="Enter your name">
                        </div>
                        <h3 class="contact-info__sub-header">
                            <input type="text" placeholder="Enter your position">
                        </h3>
                        <p class="contact-info__info">
                            <a href="vladyslav070703@gmail.com"
                                ><input type="text" placeholder="Enter your email">
                            </a>
                            |
                            <a href="tel:+380994966282">
                                <input type="text" placeholder="Enter your phone">
                            </a>
                        </p>
                    </div>
                </div>  
            </div>
            <div class="container">
                <div class="resume__block">
                    <div class="intro">
                        <textarea class="intro_text" name="" id="" placeholder="Enter your intro"></textarea>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="resume__block">
                    <textarea class="header-and-text-block__text" name="" id="" cols="30" rows="10" placeholder="Enter your skills"></textarea>
                </div>
            </div>
            <div class="container container_flex-center">
                <Button title="Save"/>
            </div>
        </div>
    </main>
</template>

<style scoped src="./ResumeView.css"></style>