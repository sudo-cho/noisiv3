<template>
    <div class="projects">

        <Breadcrumbs text="projects"></Breadcrumbs>
        <Scroller @scrollClicked="$emit('projectScrollerClicked')" class="home__content__scroller" text="xtra projects"></Scroller>

        <div class="projects__content">

            <Intersect
                :threshold="[0.5]"
                v-for="(project, key) in projects"
                :key="project.title"
                @enter.once="animEnterProject($refs[project.title])"
            >
                <router-link :to="{path: `/${project.title}`}" class="no-style">
                    <Project :ref="project.title" :name="project.title" :data="projects[key]" :enterActive="false"></Project>
                </router-link>
            </Intersect>

        </div>
    </div>
</template>

<script>
 import Breadcrumbs from '@/components/Breadcrumbs'
 import Project from '@/components/Project'
 import Scroller from '@/components/Scroller'
 import Intersect from 'vue-intersect'

 export default {
     name: 'Projects',
     components: {
         'Breadcrumbs': Breadcrumbs,
         'Project': Project,
         'Scroller': Scroller,
         'Intersect': Intersect
     },
     methods: {
         animEnterProject(elm) {
             elm[0].enterActive = true
         }
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
