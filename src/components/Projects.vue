<template>
    <div class="projects">

        <Breadcrumbs text="projects"></Breadcrumbs>
        <Scroller class="home__content__scroller" text="xtra projects"></Scroller>

        <div class="projects__content">
            <Project name="droom" :data="projects[0]"></Project>
            <Project name="refonte148" :data="projects[1]"></Project>
            <Project name="tsf" :data="projects[0]"></Project>
            <Project name="four" :data="projects[0]"></Project>
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
                     "preview": {"src":"projects/droom.jpg", "alt":"Droom main interface"}
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
         width: 80%;

         display: flex;
         flex-direction: column;
         align-items: center;

         margin: 150px 0;
     }
 }
</style>
