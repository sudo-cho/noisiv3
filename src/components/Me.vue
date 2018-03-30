<template>
    <div ref="me" :class="{'me--active': checkPath()}" class="me">
        <div class="me__menu">
            <p @click="moveBack" class="me__menu__item">back</p>
        </div>
        <Breadcrumbs class="me__bc" text="Lucas"></Breadcrumbs>
        <div class="me__content">
            <div class="me__content__left">
                <div class="me__content__left__description">
                    Yo ! I am Lucas, a french web designer studying in the IMAC engineer school, in Paris.
                    <br/><br/>
                    I love creating stunning and functional contents for people and building marvelous interfaces.
                    <br/><br/>
                    I can design user interfaces but I'm also okay with backend development.
                    <br/><br/>
                    <span class="me__content__left__description__mail">--> yo@noisiv.fr</span>
                </div>
                <div class="me__content__left__socials">
                    <a target="_blank" rel="noopener" href="https://github.com/sudo-cho/"><li class="me__content__left__socials__icon me__content__left__socials__icon--github"></li></a>

                    <a target="_blank" rel="noopener" href="https://www.last.fm/fr/user/Capdix"><li class="me__content__left__socials__icon me__content__left__socials__icon--lastfm"></li></a>

                    <a target="_blank" rel="noopener" href="https://www.senscritique.com/Noisiv"><li class="me__content__left__socials__icon me__content__left__socials__icon--pinterest"></li></a>

                    <a target="_blank" rel="noopener" href="http://noisiv.fr/images/noisiv-cv.pdf"><li class="me__content__left__socials__icon me__content__left__socials__icon--resume"></li></a>
                </div>
            </div>

            <div class="me__content__mid"></div>
            <div class="me__content__right">
                <div class="me__content__right__img"></div>
            </div>
        </div>
    </div>
</template>

<script>
 import Breadcrumbs from '@/components/Breadcrumbs'
 export default {
     name: 'me',
     methods : {
         checkPath () {
             return this.$route.name === "Me" ? true : false
         },
         moveBack () {
             this.$refs.me.classList.remove('me--active')
             this.$refs.me.classList.add('me--unactive')
             setTimeout(_ => {
                 this.$refs.me.classList.remove('me--unactive')
                 this.$router.go(-1)
             }, 1600)
         }
     },
     components: {
         'Breadcrumbs': Breadcrumbs
     }
 }
</script>

<style lang="scss">
 .me {
     visibility: hidden;

     width: 100%; height: 100vh;
     box-sizing: border-box;

     position: fixed;
     z-index: 100;
     top: 0;
     left: 0;
     background: #ced1f5;

     @keyframes showMeComp {
         0% {transform:scale(6) translateX(500px); }
         66% {transform: scale(6) translateX(0); }
         100% {transform: scale(1) translateX(0); }
     }

     @keyframes unshowMeComp {
         0% {transform: scale(1) translateX(0);}
         66% {transform: scale(6) translateX(0); }
         100% {transform:scale(6) translateX(500px); }
     }

     @keyframes fadeIn {
         from {opacity: 0;}
         to {opacity: 1;}
     }

     @keyframes fadeOut {
         from {opacity: 1;}
         to {opacity: 0;}
     }

     &--unactive {
         visibility: visible;
         .me {
             &__menu, &__bc {
                 opacity: 1;
                 animation: fadeOut .3s 1s forwards;
             }
             &__content {
                 &__left, &__right {
                     opacity: 1;
                     animation: fadeOut .3s 1s ease-in-out forwards;
                 }
                 &__mid {
                     animation: unshowMeComp 2s forwards;
                 }
             }
         }

     }

     &--active {
         .me {
             &__menu, &__bc {
                 animation: fadeIn .3s 1s forwards;
             }
             &__content {
                 &__left, &__right {
                     animation: fadeIn .3s 1s ease-in-out forwards;
                 }
                 &__mid {
                     animation: showMeComp 2s;
                 }
             }
         }
         visibility: visible;
     }

     &__menu {
         opacity: 0;
         width: 100%;
         box-sizing: border-box;
         padding: 15px 35px;

         position: fixed;
         z-index: 101;

         display: flex;
         justify-content: flex-end;

         font-weight: 700;

         &__item {
             &:hover {
                 cursor: pointer;
                 text-decoration: underline;
             }
         }
     }

     &__bc {
         opacity: 0;
         left: 80px !important;
     }

     &__scroller {
         bottom: 10px;
         left: 120px;
         transform: rotate(0deg) !important;
         transform: rotateY(180deg) !important;
     }

     &__content {
         height: 100%;
         padding: 0 70px;
         display: flex;

         &__left {
             opacity: 0;
             flex: 2;
             margin-right: 45px;

             &__description {
                 margin-top: 200px;
                 font-size: 1.4em;
                 &__mail {
                     font-weight: 700;
                 }
             }

             &__socials {
                 display: flex;
                 justify-content: space-between;
                 width: 55%;
                 margin-top: 35px;

                 &__icon {
                     width: 40px;
                     height: 40px;
                     list-style-type: none;

                     &--github{
                         background: no-repeat url('../assets/img/socials/github.png') center / 100%;
                     }
                     &--resume {
                         background: no-repeat url('../assets/img/socials/resume.png') center / 100%;
                     }
                     &--lastfm {
                         background: no-repeat url('../assets/img/socials/lastfm.png') center / 100%;
                     }
                     &--pinterest {
                         background: no-repeat url('../assets/img/socials/pinterest.png') center / 100%;
                     }
                 }
             }
         }

         &__mid, &__right {
             flex: 1;
         }

         &__mid {
             z-index: 50;
             position: relative;
             width: 500px;
             background: #413c7c;
         }

         &__right {
             opacity: 0;
             display: flex;
             justify-content: center;
             align-items: center;

             &__img {
                 width: 240px;
                 height: 450px;
                 background: no-repeat url('https://www.ingenieur-imac.fr/images/student/dussouchaud_lucas.jpg');
                 background-size: cover;
             }
         }
     }
 }
</style>
