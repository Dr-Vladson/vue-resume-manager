<script setup>
import IconQuotes from '@/components/icons/IconQuotes.vue'
import { defineProps } from 'vue';
import {getFullResume} from '../../features/queries'
import {onMounted} from 'vue'
import { store } from '@/store';

const props = defineProps(['id'])
onMounted(() => {
    getFullResume(props.id);
});
</script>
<template>
    <main>
        <div class="resume">
            <div class="container">
                <div class="resume__block">
                    <div class="contact-info">
                        <h2 class="contact-info__header">{{ store.currentFullResume.name }}</h2>
                        <h3 class="contact-info__sub-header">
                            {{ store.currentFullResume.position }}
                        </h3>
                        <p class="contact-info__info">
                            <a href="vladyslav070703@gmail.com"
                                >{{ store.currentFullResume.email }}
                            </a>
                            |
                            <a href="tel:+380994966282">{{ store.currentFullResume.phone }}</a>
                        </p>
                    </div>
                </div>  
            </div>
            <div class="container">
                <div class="resume__block">
                    <div class="intro">
                        <div class="intro__icon-wrapper">
                            <IconQuotes/>
                        </div>
                        <p class="intro_text">
                            {{ store.currentFullResume.intro }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="resume__block">
                    <div class="header-and-text-block">
                        <h3 class="header-and-text-block__header">Skills</h3>
                        <p class="header-and-text-block__text">
                            {{ store.currentFullResume.skills }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped src="./ResumeView.css"></style>
