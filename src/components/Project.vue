<template>
    <div id="project">
        <main class="project">
            <div class="project__left">
                <div class="project__left__titles">
                    <h1 class="project__left__titles__title">{{ datas.title }}</h1>
                    <h2 class="project__left__titles__description">{{ datas.description }}</h2>
                </div>
                <div class="project__left__main">
                    <div v-for="item in datas.paragraph" class="project__left__main__elmt">
                        <div class="project__left__main__elmt__title">{{ item.name }}</div>
                        <ul class="project__left__main__elmt__list">
                            <li v-bind:style="{backgroundColor: coloursName(item, list)}" :class="{ 'round': checkName(item.name) }" v-for="list in item.content" class="project__left__main__elmt__list__item">{{ list }}</li>
                        </ul>
                    </div>
                    <div class="project__left__main__extra">
                        <p class="project__left__main__extra__text">clients : {{ datas.clients }}</p>
                        <p class="project__left__main__extra__text">date : {{ datas.date }}</p>
                    </div>
                    <div class="project__left__main__url">
                        <a :href="datas.url" target="_blank" rel="noopener"><p class="project__left__main__url__text">{{ datas.url }}</p>
                        </a>
                    </div>
                </div>
            </div>

            <div class="project__right">
                <p class="project__right__description">{{ datas.fullDescription }}</p>
                <div class="project__right__arrowscroll">scroll images ---></div>
                <div class="project__right__images">
                    <img v-for="img in datas.images" class="project__right__images__picture" :alt="img.alt" :src="imagePath(img.path)" />
                </div>
            </div>

            <div class="number">{{ datas.number }}</div>
        </main>
    </div>
</template>

<script>
 import jsonData from '../../static/datas.json'
 export default {
     name: 'Project',
     created () {
         this.updateData()
     },
     methods: {
         checkName (name) {
             return name === 'Layout & colours'
         },
         coloursName (item, list) {
             return this.checkName(item.name) ? list : 'transparent'
         },
         checkNameProject (elm) {
             return elm.title === this.$route.name
         },
         imagePath (path) {
             return require("../assets/img/" + path)
         },
         updateData () {
             this.datas = jsonData[jsonData.findIndex(this.checkNameProject)]
         }
     },
     watch: {
         '$route': 'updateData'
     },
     data () {
         return {
             datas: jsonData[jsonData.findIndex(this.checkNameProject)]
         }
     }
 }
</script>

<style lang='scss'>
 #project {
     flex-grow: 2;
 }

 .round {
     display: inline-block;
     width: 40px; height: 40px;
     border-radius: 50%;
     text-indent: -9999px;
     margin: 0 15px -20px 0;
 }

 .project {
     display: flex;
     &__left {
         flex: 1;
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
         flex: 2;
         position: relative;
         &__description {
             max-width: 500px;
         }
         &__arrowscroll {
             position: absolute;
             right: -80px;
             top: 305px;
             transform: rotate(90deg);
             font-family: inherit;
             font-size: inherit;
         }
         &__images {
             margin-top: 90px;
             overflow-y: scroll;
             height: 600px;
             position: relative;
             &__picture {
                 width: 640px;
                 max-width: 100%;
                 height: auto;
                 margin-bottom: 40px;
             }
         }
     }
 }
</style>
