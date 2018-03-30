<template>
    <transition name="fade">
        <div ref="work" id="work" class="work">
            <header class="work__header">
                <div class="work__header__left">
                    <div class="work__header__left__title">{{data.title}}</div>
                    <div class="work__header__left__desc">/ {{data.description}}</div>
                </div>
                <div class="work__header__right">
                    <img class="work__header__right__img" :alt="data.preview.alt" :src="imagePath(data.preview.src)"/>
                </div>
            </header>

            <main class="work__main">

                <div class="work__main__sum">
                    <div class="work__main__sum__details">
                        <h2 class="work__main__sum__details__text">Date<span class="work__main__sum__details__text__title">{{data.details2.date}}</span></h2>
                        <h2 class="work__main__sum__details__text">Clients<span class="work__main__sum__details__text__title">{{data.details2.client}}</span></h2>
                        <h2 class="work__main__sum__details__text">Jobs<span class="work__main__sum__details__text__title">{{data.details2.jobs}}</span></h2>
                    </div>
                    <p class="work__main__sum__text">{{data.summary}}</p>
                    <a v-if="data.link != 'null'" :href="data.link" rel="noopener" target="_blank" class="no-style"><p class="work__main__sum__button">Try it by yourself</p></a>
                </div>

                <div class="work__main__gallery">
                    <img v-for="item in data.gallery" class="work__main__gallery__img" :alt="data.preview.alt" :src="imagePath(item)"/>
                </div>

            </main>

            <footer class="work__footer">
                <h2 class="work__footer__text">Next project</h2>
                <router-link class="no-style" :to="data.next.link">
                    <h2 class="work__footer__title">{{data.next.title}}</h2>
                </router-link>
            </footer>
        </div>
    </transition>
</template>

<script>
 import {TweenLite, Expo} from "gsap";
 import ScrollToPlugin from "gsap/ScrollToPlugin";

 export default {
     name: 'Work',
     data () {
         return {
             data: null,
             "projects": [
                 {
                     "number": "01",
                     "title": "droom",
                     "description": "A rhythm game playable with midi controller",
                     "details2": {
                         "client": "Sylvain Cherrier",
                         "date": "may 2017",
                         "jobs": "frontend, backend"
                     },
                     "preview": {"src":"droom.jpg", "alt":"Droom main interface"},
                     "summary": "This project is a rhythm game focused in drums, playable in your browser. You can play it with a keyboard or with a MIDI controller such as an electronic drums. It has been coded in javascript using the framework ReactJS, canvas and the web MIDI API. The back-end is done with the framework SailsJS.",
                     "link": "https://droom-game.github.io",
                     "stack": [],
                     "next": {"title": "148", "link": "/148"},
                     "gallery": ["droom/01.jpg", "droom/02.jpg", "droom/03.jpg"]
                 },
                 {
                     "number": "02",
                     "title": "148",
                     "description": "A french creative web agency",
                     "details2": {
                         "client": "Agence 148",
                         "date": "July 2017",
                         "jobs": "frontend, backend, graphism"
                     },
                     "preview": {"src":"148.jpg", "alt":"148 homepage"},
                     "summary": "It was a 2-month project. This redesign has been done by the web designers and we had the charge to refactor the structure of the pages, the logic and the architeture of the website. I was in charge of coding the pages and I also personally designed and coded the flowers animation of the homepage and the 404 page.",
                     "link": "https://148.fr",
                     "stack": [],
                     "next": {"title": "The Salt Factory", "link": "/thesaltfactory"},
                     "gallery": ["148/01.jpg", "148/02.jpg", "148/03.jpg"]
                 },
                 {
                     "number": "03",
                     "title": "The Salt Factory",
                     "description": "A community website full of salt",
                     "details2": {
                         "client": "Imac ingénieur",
                         "date": "march 2017",
                         "jobs": "frontend, graphism"
                     },
                     "preview": {"src":"tsf.jpg", "alt":"Droom main interface"},
                     "summary": "The Salt Factory is reddit-like forum focused in the salt feature. You can create a post about everything and people will rate it with the cool salt button to quantify how salt is the post. This project is written using ReactJS. I was also responsible with a teammate to make the mockups and the graphism of the website. It was a 1-month project made with a team of 8 people. 4 of the team was responsible of the back-end, building the API in PHP.",
                     "link": "null",
                     "stack": [],
                     "next": {"title": "droom", "link": "/droom"},
                     "gallery": ["tsf/01.jpg"]
                 }
             ]
         }
     },
     watch: {
         '$route': 'updateData'
     },
     mounted () {
         this.mountData()
     },
     methods: {
         imagePath (path) {
             return require("../assets/img/projects/" + path)
         },
         mountData () {
             switch (this.$route.params.projectname) {
                 case 'droom':
                     this.data = this.projects[0]
                     break;
                 case '148':
                     this.data = this.projects[1]
                     break;
                 case 'thesaltfactory':
                     this.data = this.projects[2]
                     break;
             }
             TweenLite.to(window, 1.5, {scrollTo:"#work", ease:Expo.easeInOut})
         },
         updateData () {
             this.$refs.work.classList.add('work--switching')

             setTimeout(_ => {
                 switch (this.$route.params.projectname) {
                     case 'droom':
                         this.data = this.projects[0]
                         break;
                     case '148':
                         this.data = this.projects[1]
                         break;
                     case 'thesaltfactory':
                         this.data = this.projects[2]
                         break;
                 }
                 this.$refs.work.classList.remove('work--switching')
             }, 900)

             setTimeout(_ => {TweenLite.to(window, 1.5, {scrollTo:"#work", ease:Expo.easeInOut})}, 400)
         }
     },
 }
</script>

<style lang="scss">
 .fade-enter-active, .fade-leave-active {
     transition: opacity 0.5s;
 }
 .fade-enter, .fade-leave-to {
     opacity: 0;
 }

 .work {
     transition: opacity .5s;
     padding-top: 85px;
     overflow-x: hidden;

     &--switching {
         transition: opacity .5s;
         opacity: 0
     }

     &__header {

         padding: 70px 0;
         text-align: right;
         display: flex;
         justify-content: flex-end;
         align-items: center;

         &__left {
             flex-basis: 50%;

             &__title {
                 font-size: 10em;
                 font-weight: 700;
                 line-height: 1;
                 margin-bottom: 35px;
             }

             &__desc {
                 margin: 0;
                 font-size: 1.5em;
             }
         }

         &__right {
             flex-basis: 50%;
             &__img {
                 margin-right: -35px;
                 width: 100%;
                 height: auto;
             }
         }
     }

     &__main {
         display: flex;
         flex-direction: column;

         &__sum {
             display: flex;
             align-items: center;
             justify-content: center;
             flex-direction: column;

             font-size: 1.3em;
             padding: 100px;

             background: #413c7c;
             color: #ced1f5;

             &__details {
                 display: flex;
                 justify-content: space-between;
                 width: 100%;
                 margin: -35px 0 60px 0;

                 &__text {
                     font-size: 0.8em;
                     font-weight: 700;

                     &__title {
                         display: block;
                         font-weight: 400;
                     }
                 }
             }

             &__text {
                 max-width: 800px;
             }

             &__button {
                 &:hover {
                     cursor: pointer;
                 }

                 font-weight: 700;
                 text-decoration: underline;
             }
         }

         &__gallery {
             width: 1280px;
             margin: 0 auto;

             &__img {
                 margin: 100px 0;
                 width: 100%; height: auto;
             }
         }
     }

     &__footer {
         padding: 100px;
         background: #413c7c;
         color: #ced1f5;

         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         text-align: center;


         &__text {
             font-weight: 400;
             text-decoration: underline;
         }
         &__title {
             margin: 0;
             font-weight: 700;
             font-size: 5em;
         }
     }
 }
</style>
