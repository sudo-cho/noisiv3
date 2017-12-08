<template>
    <div id="home">
        <MyHeader></MyHeader>
        <main class="home">
            <div class="home__left">
                <div class="home__left__titles">
                    <h1 class="home__left__titles__title">{{ title }}</h1>
                    <h2 class="home__left__titles__description">{{ description }}</h2>
                </div>
                <div class="home__left__main">
                    <div v-for="item in paragraph" class="home__left__main__elmt">
                        <div class="home__left__main__elmt__title">{{ item.name }}</div>
                        <ul class="home__left__main__elmt__list">
                            <li v-bind:style="{backgroundColor: coloursName(item, list)}" :class="{ 'round': checkName(item.name) }" v-for="list in item.content" class="home__left__main__elmt__list__item">{{ list }}</li>
                        </ul>
                    </div>
                    <div class="home__left__main__extra">
                        <p class="home__left__main__extra__text">clients : {{ clients }}</p>
                        <p class="home__left__main__extra__text">date : {{ date }}</p>
                    </div>
                    <div class="home__left__main__url">
                        <a :href="url" target="_blank" rel="noopener"><p class="home__left__main__url__text">{{ url }}</p>
                        </a>
                    </div>
                </div>
            </div>

            <div class="home__right">
                <p class="home__right__description">{{ fullDescription }}</p>
                <img class="home__right__picture" :alt="image.alt" :src="image.path" />
            </div>
        </main>
        <div class="number">{{ number }}</div>
    </div>
</template>

<script>
 import MyHeader from '@/components/MyHeader'
 export default {
     methods: {
         checkName (name) {
             return name === 'Layout & colours'
         },
         coloursName (item, list) {
             return this.checkName(item.name) ? list : 'transparent'
         }
     },
     name: 'Home',
     components: {
         'MyHeader': MyHeader
     },
     data () {
         return {
             increment: 0,
             title: 'Droom',
             date: 'may 2017',
             clients: 'Sylvain Cherrier',
             number: '1/4',
             url: 'https://droom-game.github.io/',
             image: {path: require('../assets/img/droom/02.jpg'), alt: 'droom main interface'},
             description: 'A rhythm game playable with MIDI controller directly in your browser',
             fullDescription: 'This project is a rhythm game focused in drums, playable in your browser. You can play it with a keyboard or with a MIDI controller such as an electronic drums. It has been coded in javascript using the framework ReactJS, canvas and the web MIDI API. The back-end is done with the framework SailsJS.',
             paragraph: [
                 {
                     name: 'Layout & colours',
                     content: [
                         '#2e2e2e',
                         '#e1e1e1',
                         '#5b86ae'
                     ]
                 },
                 {
                     name: 'Fonts',
                     content: [
                         'Arial black',
                         'Inconsolata'
                     ]
                 },
                 {
                     name: 'code',
                     content: [
                         'Python 3',
                         'OpenGL 3.2+'
                     ]
                 }
             ]
         }
     }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
 #home {
     display: flex;
     padding: 45px 55px;
     position: relative;
     width: 100%;
     height: 100%;
     justify-content: space-between;
 }

 .round {
     display: inline-block;
     width: 40px; height: 40px;
     border-radius: 50%;
     text-indent: -9999px;
     margin: 0 15px -20px 0;

 }

 .home {
     flex-grow: 2;
     display: flex;
     &__left {
         &__titles {
             font-weight: 700;
             &__title {
                 font-size: 40px;
             }
             &__description {
                 max-width: 350px;
             }
         }
         &__main {
             margin-top: 100px;
             &__elmt {
                 margin: 45px 0;
                 &__list {
                     padding-left: 15px;
                 }
             }
             &__url {
                 &:hover {
                     cursor: pointer !important;
                     text-decoration: underline;
                 }
                 margin-top: 60px;
             }
         }
     }

     &__right {
         &__description {
             max-width: 500px;
         }
         &__picture {
             width: 640px;
             max-width: 100%;
             height: auto;
             margin-top: 90px;
         }
     }
 }
</style>
