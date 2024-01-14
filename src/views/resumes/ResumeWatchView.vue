<script setup>
import IconQuotes from '@/components/icons/IconQuotes.vue'
</script>
<template>
    <main>
        <div class="resume">
            <div class="container">
                <div class="resume__block">
                    <div class="contact-info">
                        <h2 class="contact-info__header">Vladislav Liubashenko</h2>
                        <h3 class="contact-info__sub-header">
                            Junior Fullstack developer
                        </h3>
                        <p class="contact-info__info">
                            <a href="vladyslav070703@gmail.com"
                                >vladyslav070703@gmail.com
                            </a>
                            |
                            <a href="tel:+380994966282">+380994966282</a>
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
                            I am an enthusiastic student of the Faculty of
                            Informatics and Software Engineering at KPI. Being a
                            responsible and organized individual has enabled me
                            not only to independently learn various web
                            technologies, but also to keep expanding my horizons
                            in other different IT areas at the university.
                            Currently, I am looking for an opportunity to deepen
                            my knowledge and to get the team work experience in
                            conditions, which are as close as possible to a
                            commercial project, to be ready to take up the
                            challenge of real projects in IT company afterwards.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="resume__block">
                    <div class="header-and-text-block">
                        <h3 class="header-and-text-block__header">Skills</h3>
                        <p class="header-and-text-block__text">
                            HTML / CSS, JavaScript / TypeScript, React.js /
                            Node.js, MsSQL / MySQL, Redux, Git / Github / Jira,
                            С# / С++, WebStorm / VS Code / Visual Studio
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped src="./ResumeView.css"></style>
