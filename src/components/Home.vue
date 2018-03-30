<template>
    <div class="home">
        <Breadcrumbs text="noisiv"></Breadcrumbs>
        <Scroller @scrollClicked="scrollComponent($refs.projects.$el, true)" text="main projects"></Scroller>

        <Waves></Waves>

        <div ref="homeContent" class="home__content">
            <div class="home__content__titles">
                <h1 class="home__content__titles__title">noisiv.</h1>
                <h2 class="home__content__titles__sub">▲ Creating neat stuff since 1995</h2>
            </div>
        </div>

        <Projects @projectScrollerClicked="scrollComponent($refs.xtra.$el, true)" ref="projects"></Projects>

        <Intersect @enter="scrollComponent2($refs.xtra.$el, false)">
            <Xtra ref="xtra"></Xtra>
        </Intersect>
        <Me></Me>

    </div>
</template>

<script>
 import Breadcrumbs from '@/components/Breadcrumbs'
 import Scroller from '@/components/Scroller'
 import Projects from '@/components/Projects'
 import Xtra from '@/components/Xtra'
 import Me from '@/components/Me'
 import Waves from '@/components/Waves'
 import IntersectArea from '@/components/IntersectArea'

 import Intersect from 'vue-intersect'
 import {TweenLite, Expo} from "gsap";
 import ScrollToPlugin from "gsap/ScrollToPlugin";

 export default {
     name: 'Home',
     components: {
         'Breadcrumbs': Breadcrumbs,
         'Scroller': Scroller,
         'Projects': Projects,
         'Xtra': Xtra,
         'Me': Me,
         'Waves': Waves,
         'Intersect': Intersect,
         'IntersectArea': IntersectArea,
     },
     data () {
         return {
         }
     },
     methods: {
         scrollComponent (component, booleanVal) {
             TweenLite.to(window, 1.5, {scrollTo:component, ease:Expo.easeInOut})

             if (booleanVal) {
                 setTimeout( _ => {document.body.style.overflowY = "scroll"}, 1400)
             }
         },
         scrollComponent2 (component, booleanVal) {
             if(document.body.style.overflowY === "scroll") {
                 document.body.style.overflowY = "hidden"
                 TweenLite.to(window, 1.5, {scrollTo:component, ease:Expo.easeInOut})
                 this.$router.push("/xtra")
                 if (booleanVal) {
                     setTimeout( _ => {document.body.style.overflowY = "scroll"}, 1400)
                 }
             }
         },
         moveWindow (evt) {
             const projectsNode = this.$refs.projects.$el
             const xtraNode = this.$refs.xtra.$el
             const homeNode = this.$refs.homeContent
             const scrollComp = this.scrollComponent

             const topHome = homeNode.getBoundingClientRect().top
             const topXtra = xtraNode.getBoundingClientRect().top
             const bottomXtra = xtraNode.getBoundingClientRect().bottom
             const topProjects = projectsNode.getBoundingClientRect().top
             const vueRouter = this.$router

             window.requestAnimationFrame(function(e) {
                 if(evt.deltaY > 0) {
                     if (topHome === 0) {
                         scrollComp(projectsNode, true)
                         vueRouter.push("projects")
                     }
                 }

                 if(evt.deltaY < 0) {
                     if (topXtra <= 0.23333740234375) {
                         document.body.style.overflowY = "hidden"
                         scrollComp(projectsNode, true)
                         vueRouter.push("projects")
                     }
                     if (topProjects > 0 && document.body.style.overflowY === "scroll") {
                         document.body.style.overflowY = "hidden"
                         scrollComp(homeNode, false)
                         vueRouter.push("/")
                     }
                 }
             })

         }
     },
     beforeDestroy () {
         window.removeEventListener('wheel', this.moveWindow)
     },
     mounted () {
         const homeNode = this.$refs.homeContent

         document.body.style.overflowY = "hidden"
         TweenLite.to(window, 1.5, {scrollTo:homeNode, ease:Expo.easeInOut})

         window.addEventListener('wheel', this.moveWindow)
     }
 }
</script>

<style lang="scss">
 .home {
     &__content {
         position: relative;
         width: 100%;
         height: 100vh;

         &__titles {
             position: absolute;
             right: 50px;
             top: 220px;

             &__title {
                 font-size: 9em;
                 letter-spacing: 45px;
                 margin: 0;
             }

             &__sub {
                 font-size: 1.9em;
                 font-style: italic;
                 font-weight: 400;
                 transform: translateX(105px);
                 margin-top: 0;
                 display: inline-block;
             }
         }
     }

 }
</style>
