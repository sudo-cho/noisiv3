<template>
    <div id="myheader" class="myheader">
        <div class="myheader__mobile">
            <div class="myheader__mobile__block">
                <h2 class="myheader__mobile__block__nick">Noisiv</h2>
                <h2 class="myheader__mobile__block__sub">Creating neat stuff since 1995</h2>
            </div>
            <div class="myheader__mobile__block">
                <div class="myheader__mobile__block__true">
                    <a target="_blank" rel="noopener" href="mailto:yo@noisiv.fr"><li class="myheader__mobile__block__icon myheader__mobile__block__icon--mail"></li></a>
                    <a target="_blank" rel="noopener" href="http://noisiv.fr/images/noisiv-cv.pdf"><li class="myheader__mobile__block__icon myheader__mobile__block__icon--resume"></li></a>
                    <a target="_blank" rel="noopener" href="https://www.last.fm/fr/user/Capdix"><li class="myheader__mobile__block__icon myheader__mobile__block__icon--lastfm"></li></a>
                    <a target="_blank" rel="noopener" href="https://www.senscritique.com/Noisiv"><li class="myheader__mobile__block__icon myheader__mobile__block__icon--sc"></li></a>
                </div>
                <div class="myheader__mobile__block__false">
                    <a target="_blank" rel="noopener" href="mailto:yo@noisiv.fr"><li class="myheader__mobile__block__item">yo@noisiv.fr</li></a>
                    <a target="_blank" rel="noopener" href="http://noisiv.fr/images/noisiv-cv.pdf"><li class="myheader__mobile__block__item">my résumé</li></a>
                </div>
            </div>
            <div class="myheader__mobile__block__false">
                <a target="_blank" rel="noopener" href="https://www.last.fm/fr/user/Capdix"><li class="myheader__mobile__block__item">lastfm/capdix</li></a>
                <a target="_blank" rel="noopener" href="https://www.senscritique.com/Noisiv"><li class="myheader__mobile__block__item">senscritique/noisiv</li></a>
            </div>
            <div class="myheader__mobile__block">
                <router-link to="/droom">
                    <li class="myheader__mobile__block__item" :class="{'project-active-mobile': checkPath('Droom')}">Droom</li>
                </router-link>
                <router-link to="/thesaltfactory">
                    <li class="myheader__mobile__block__item" :class="{'project-active-mobile': checkPath('The Salt Factory')}">The Salt Factory</li>
                </router-link>
                <router-link to="/148">
                    <li class="myheader__mobile__block__item" :class="{'project-active-mobile': checkPath('Refonte 148')}">Refonte 148</li>
                </router-link>
                <router-link to="/lab">
                    <li class="myheader__mobile__block__item" :class="{'project-active-mobile': checkPath('Lab')}">Lab</li>
                </router-link>
            </div>
        </div>

        <div class="myheader__desktop">
            <div class="myheader__top">
                <h2 class="myheader__top__nick">Noisiv</h2>
                <h2 class="myheader__top__sub">Creating neat stuff since 1995</h2>

                <ul class="myheader__top__list">
                    <a target="_blank" rel="noopener" href="mailto:yo@noisiv.fr"><li class="myheader__top__list__item">yo@noisiv.fr</li></a>
                    <a target="_blank" rel="noopener" href="http://noisiv.fr/images/noisiv-cv.pdf"><li class="myheader__top__list__item">my résumé</li></a>
                    <a target="_blank" rel="noopener" href="https://www.last.fm/fr/user/Capdix"><li class="myheader__top__list__item">lastfm/capdix</li></a>
                    <a target="_blank" rel="noopener" href="https://www.senscritique.com/Noisiv"><li class="myheader__top__list__item">senscritique/noisiv</li></a>
                </ul>
            </div>

            <div class="myheader__mid">
                <h2 class="myheader__mid__title">Selected Projects</h2>
                <ul class="myheader__mid__list">
                    <router-link to="/droom">
                        <li class="myheader__mid__list__item" :class="{'project-active': checkPath('Droom')}">Droom</li>
                    </router-link>
                    <router-link to="/thesaltfactory">
                        <li class="myheader__mid__list__item" :class="{'project-active': checkPath('The Salt Factory')}">The Salt Factory</li>
                    </router-link>
                    <router-link to="/148">
                        <li class="myheader__mid__list__item" :class="{'project-active': checkPath('Refonte 148')}">Refonte 148</li>
                    </router-link>
                    <router-link to="/lab">
                        <li class="myheader__mid__list__item" :class="{'project-active': checkPath('Lab')}">Lab</li>
                    </router-link>
                </ul>
            </div>

            <div class="myheader__bot">
                <p class="myheader__bot__text">Made with love in 2017</p>
                <p class="myheader__bot__text">Design by Lucas Dussouchaud</p>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'MyHeader',
     methods : {
         checkPath (string) {
             return this.$route.name === string
         }
     }
 }
</script>

<style scoped lang='scss'>
 .project-active {
     display: inline-block;
     color: #fefefe;
     background: #070707;
     padding: 5px 20px;
 }
 .project-active-mobile {
     text-decoration: underline;
     font-weight: 700;
 }
 .myheader{
     flex-grow: 1;
     height:100%;
     margin-right: 10%;

     &__mobile {
         font-size: inherit;
         display: none;
         font-weight: inherit;
         &__block {
             &__nick, &__sub {
                 font-size: 1em;
                 font-weight: 400;
             }
             &__true {
                 display: none;
             }
         }
     }

     &__top {
         &__nick, &__sub {
             font-size: 1em;
             font-weight: 400;
         }
         &__list {
             margin: 40px 0 0 0;
             &__item {
                 &:hover {
                     cursor: pointer;
                     text-decoration: underline;
                 }
             }
         }
     }
     &__mid {

             margin: 50px 0 0 0;
         &__list {

             &__item {
                 margin: 5px 0;
                 &:hover {
                     cursor: pointer;
                     text-decoration: underline;
                 }
             }
         }
     }
     &__bot {
         margin-top: 75px;
     }
 }

 @media (max-width: 768px) {
     .myheader {
         margin: 0;
         top: 0;
         left: 0;
         padding-top: 30px;
         position: fixed;
         width: 695px;
         background: #fff;
         z-index: 2;
         padding-left: 30px;
         height: 90px;
         &__mobile {
             display: flex;
             justify-content: space-between;
         }
         &__desktop {
             display: none;
         }
     }
 }
 @media (max-width: 480px) {
     .myheader {
         width: 100%;
         padding: 10px 10px 0px 10px;
         height: 60px;
         &__mobile {
             align-items: center;
             &__block {
                 &__sub, &__false {
                     display: none;
                 }
                 &__true {
                     display: initial;
                 }
                 &__icon {
                     display: inline-block;
                     width: 25px;
                     height: 25px;
                     &--mail {
                         background: no-repeat url('../assets/img/header/mail.svg') center / 100%;
                     }
                     &--resume {
                         background: no-repeat url('../assets/img/header/resume.svg') center / 100%;
                     }
                     &--lastfm {
                         background: no-repeat url('../assets/img/header/lastfm.svg') center / 100%;
                     }
                     &--sc {
                         border: 1px solid;
                     }
                 }
             }
         }
     }
 }
</style>
