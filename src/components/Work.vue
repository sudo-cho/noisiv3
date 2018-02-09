<template>
    <div class="work">
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
                <a href="https://droom-game.github.io" class="no-style"><p class="work__main__sum__button">Try it by yourself</p></a>
            </div>

            <div class="work__main__gallery">
                <img v-for="item in data.gallery" class="work__main__gallery__img" :alt="data.preview.alt" :src="imagePath(item)"/>
            </div>

        </main>

        <footer class="work__footer">
            <h2 class="work__footer__text">Next project</h2>
            <h2 class="work__footer__title">droom</h2>
        </footer>
    </div>
</template>

<script>
 export default {
     name: 'Work',
     data () {
         return {
             "data": {
                 "number": "01",
                 "title": "droom",
                 "description": "A rhythm game playable with midi controller",
                 "details": "2017 - Sylvain Cherrier - react.firebase",
                 "details2": {
                     "client": "Sylvain Cherrier",
                     "date": "may 2017",
                     "jobs": "frontend, backend"
                 },
                 "preview": {"src":"projects/droom.jpg", "alt":"Droom main interface"},
                 "summary": "This project is a rhythm game focused in drums, playable in your browser. You can play it with a keyboard or with a MIDI controller such as an electronic drums. It has been coded in javascript using the framework ReactJS, canvas and the web MIDI API. The back-end is done with the framework SailsJS.",
                 "colors": [],
                 "fonts": [],
                 "stack": [],
                 "gallery": ["projects/droom.jpg", "projects/droom.jpg", "projects/droom.jpg"]
             }
         }
     },
     methods: {
         imagePath (path) {
             return require("../assets/img/" + path)
         },
     },
 }
</script>

<style lang="scss">
 .work {
     padding-top: 85px;
     overflow-x: hidden;

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
