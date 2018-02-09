<template>
    <div class="xtra">
        <Breadcrumbs text="xtra"></Breadcrumbs>
        <div class="xtra__content">
            <div v-for="item in datas" class="xtra__content__elmt">
                <h2 class="xtra__content__elmt__title">/ {{item.title}}</h2>
                <ul class="xtra__content__elmt__list">
                    <li class="xtra__content__elmt__list__item" v-for="project in item.projects">
                        <a class="no-style xtra__content__elmt__list__item__anchor" target="_blank" rel="noopener" :href="project.url">{{project.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
 import Breadcrumbs from '@/components/Breadcrumbs'
 export default {
     name: 'Xtra',
     components: {
         'Breadcrumbs': Breadcrumbs
     },
     data () {
         return {
             datas : [
                 {
                     title: 'music',
                     projects: [
                         {url: 'https://monoclaus.bandcamp.com', name: 'monoclaus'},
                         {url: 'https://soundcloud.com/zerogravite', name: '0-gravité'},
                         {url: 'https://www.youtube.com/channel/UCul_sScQEHR7-2MgB7f2ITA', name: 'Velvet Dream'}
                     ]
                 },
                 {
                     title: 'web',
                     projects: [
                         {url: 'https://imac2018.github.io/Seta/', name: 'Seta'},
                         {url: 'https://sudo-cho.github.io/movieweather/', name: 'Movie Weather'},
                         {url: 'https://sudo-cho.github.io/webTodoList/', name: 'Todo-List'}
                     ]
                 },
                 {
                     title: 'movie',
                     projects: [
                         {url: 'https://www.youtube.com/watch?v=Ydhsa-Cdo0A', name: 'Maroh'},
                         {url: 'https://www.youtube.com/watch?v=iM989URrmAQ', name: 'Ellipse'},
                         {url: 'https://vimeo.com/user33057809', name: 'Le 24p'}
                     ]
                 },
                 {
                     title: 'photo',
                     projects: [
                         {url: 'hh', name: 'Splash'}
                     ]
                 },
                 {
                     title: 'code & game',
                     projects: [
                         {url: 'https://github.com/sudo-cho/imac-pacman-3d', name: 'Pacman3d'},
                         {url: 'https://github.com/sudo-cho/patatap-cpp', name: 'Patatap-cpp'},
                         {url: 'https://github.com/sudo-cho/hoverspace', name: 'Hoverspace'},
                         {url: 'https://github.com/yoanlcq/imagimp', name: 'Imagimp'}
                     ]
                 },
                 {
                     title: 'ui',
                     projects: [
                         {url: 'hh', name: 'Music Player'}
                     ]
                 },
             ]
         }
     }
 }
</script>

<style lang="scss">
 .xtra{
     position: relative;
     width: 100%;
     height: 100vh;

     display: flex;
     justify-content: flex-end;
     align-items: center;

     &__content {
         width: 70%;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(2, 1fr);
         grid-column-gap: 150px;
         grid-row-gap: 150px;
         &__elmt {
             &__title {
                 font-size: 1.5em;
             }
             &__list {
                 padding: 0;
                 list-style-type: none;
                 &__item {
                     margin-bottom: 10px;
                     &__anchor {
                         &:hover {
                             cursor: pointer;
                             text-decoration: underline;
                         }
                     }
                 }
             }
         }
     }
 }
</style>
