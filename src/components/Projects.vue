<template>
    <div class="projects">

        <Breadcrumbs text="projects"></Breadcrumbs>
        <Scroller @scrollClicked="$emit('projectScrollerClicked')" class="home__content__scroller" text="xtra projects"></Scroller>

        <div class="projects__content">

            <router-link to="/droom" class="no-style">
                <Project name="droom" :data="projects[0]"></Project>
            </router-link>

            <router-link to="/148" class="no-style">
                <Project name="148" :data="projects[1]"></Project>
            </router-link>

            <router-link to="/thesaltfactory" class="no-style">
                <Project name="tsf" :data="projects[2]"></Project>
            </router-link>

            <router-link to="/droom" class="no-style">
                <Project name="folio" :data="projects[3]"></Project>
            </router-link>

        </div>
    </div>
</template>

<script>
 import Breadcrumbs from '@/components/Breadcrumbs'
 import Project from '@/components/Project'
 import Scroller from '@/components/Scroller'
 export default {
     name: 'Projects',
     components: {
         'Breadcrumbs': Breadcrumbs,
         'Project': Project,
         'Scroller': Scroller
     },
     data () {
         return {
             "projects": [
                 {
                     "number": "01",
                     "title": "droom",
                     "description": "A rhythm game playable with midi controller",
                     "details": "2017 - Sylvain Cherrier - react.firebase",
                     "preview": {"src":"projects/droom.jpg", "alt":"Droom main interface"}
                 },
                 {
                     "number": "02",
                     "title": "148",
                     "description": "A fresh skin for a cool french creative web agency",
                     "details": "2017 - 148 - javascript.php",
                     "preview": {"src":"projects/148.jpg", "alt":"Droom main interface"}
                 },
                 {
                     "number": "03",
                     "title": "TSF",
                     "description": "A community website full of salt",
                     "details": "2017 - Imac ingénieur - react.php",
                     "preview": {"src":"projects/tsf.jpg", "alt":"tsf loading screen"}
                 },
                 {
                     "number": "04",
                     "title": "folio v2",
                     "description": "my older portfolio",
                     "details": "2017 - Noisiv - javascript",
                     "preview": {"src":"projects/tsf.jpg", "alt":"tsf loading screen"}
                 }
             ]
         }
     }
 }
</script>

<style lang="scss">
 .projects {
     position: relative;
     width: 100%;

     display: flex;
     justify-content: center;

     &__content {
         position:relative;
         width: 75%;

         display: flex;
         flex-direction: column;
         align-items: center;

         margin: 150px 0;
     }
 }
</style>
