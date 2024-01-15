<script setup>
import Button from '@/components/common/Button.vue';
import { getIsResumeValid } from '../../features/validators';
import {createResume} from '../../features/queries'
import {ref} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const name = ref('')
const position = ref('')
const email = ref('')
const phone = ref('')
const intro = ref('')
const skills = ref('')
const isDataInvalid = ref(false)

function submitResume (){
    if (getIsResumeValid(name.value, position.value, email.value, phone.value, intro.value, skills.value)){
        isDataInvalid.value = false
        const newResumeId = createResume({
            name : name.value,
            position: position.value,
            email: email.value,
            phone: phone.value,
            intro: intro.value, 
            skills: skills.value
        })
        console.log(newResumeId)
        router.push("/")
    }
    else {
        isDataInvalid.value = true
    }
}
</script>
<template>
    <main>
        <div class="resume">
            <div class="container">
                <div class="resume__block">
                    <div class="contact-info">
                        <div class="contact-info__header" >
                            <input type="text" v-model="name" placeholder="Enter your name">
                        </div>
                        <h3 class="contact-info__sub-header">
                            <input type="text" v-model="position" placeholder="Enter your position">
                        </h3>
                        <p class="contact-info__info">
                            <input type="text" v-model="email" placeholder="Enter your email">
                            |
                            <input type="text" v-model="phone" placeholder="Enter your phone">
                        </p>
                    </div>
                </div>  
            </div>
            <div class="container">
                <div class="resume__block">
                    <div class="intro">
                        <textarea class="intro_text" v-model="intro" placeholder="Enter your intro"></textarea>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="resume__block">
                    <textarea class="header-and-text-block__text" v-model="skills" placeholder="Enter your skills"></textarea>
                </div>
                <p class="invalid-text" v-if="isDataInvalid">Enter valid data!</p>
            </div>
            <div class="container container_flex-center">
                <div @click.prevent="submitResume">
                    <Button title="Save"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped src="./ResumeView.css"></style>