<template>
    <div class="lab" id="lab">
        <h2 class="lab__title">Lab</h2>
        <h2 class="lab__sub">Discover my recent works</h2>
        <div class="lab__grid">
            <div v-for="item in datas" class="lab__grid__elmt">
                <h2 class="lab__grid__elmt__title">/ {{item.title}}</h2>
                <ul class="lab__grid__elmt__list">
                    <li class="lab__grid__elmt__list__item" v-for="project in item.projects">
                        <a class="lab__grid__elmt__list__item__anchor" target="_blank" rel="noopener" :href="project.url">{{project.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'Lab',
     data () {
         return {
             datas : [
                 {
                     title: 'music',
                     projects: [
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
                         {url: 'https://github.com/sudo-cho/DungeonImac', name: 'Dungeon Master'},
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

<style lang='scss'>
 .lab {
     flex-grow: 2;
     &__title {
         font-size: 40px;
     }
     &__sub {
         font-size: 1em;
         line-height: 30px;
     }
     &__grid {
         margin-top: 90px;
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(2, 1fr);
         grid-column-gap: 200px;
         grid-row-gap: 200px;
         &__elmt {
             &__title {
                 font-size: 20px;
             }
             &__list {
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
