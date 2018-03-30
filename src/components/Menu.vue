<template>
    <div class="menu">
        <transition-group name="fade">
            <div key="main-content" v-if="$route.name == 'Home' || $route.name == 'Me'"></div>

            <div key="dynamic" v-else-if="$route.name == 'Projects' || $route.name == 'Xtra'" class="menu__left">
                <p class="menu__left__title">noisiv</p>
                <p class="menu__left__sub">▲ Creating neat stuff since 1995</p>
            </div>

            <div key="dynamic" v-else-if="$route.name !== 'Home' && $route.name !== 'Xtra' && $route.name !== 'Projects'" class="menu__left">
                <router-link to="/" class="no-style">
                    <p class="menu__left__title">noisiv</p>
                </router-link>
                <p class="menu__left__sub"><---- go back home</p>
            </div>
        </transition-group>

        <div class="menu__right">
            <p @click="switchAndMove" class="menu__right__item">_me + contact</p>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'Menu',
     methods: {
         switchAndMove () {
             this.$router.push('/me')
         }
     }
 }
</script>

<style lang="scss">
 .no-style {
     text-decoration: none;
     color: inherit;
 }

 .fade-enter-active, .fade-leave-active {
     transition: all .4s .4s ease-in-out;
 }

 .fade-enter, .fade-leave-to  {
     opacity:0;
     transform: translateY(-10px)
 }

 .menu {
     width: 100%;
     box-sizing: border-box;
     padding: 15px 35px;

     position: fixed;
     z-index: 99;

     display: flex;
     justify-content: space-between;

     background: #ced1f5;

     font-weight: 700;

     &__left, &__right {
         display: flex;
     }

     &__left {
         &__sub {
             font-weight: 400;
             margin-left: 8px;
         }
     }

     &__right {
         justify-content: space-between;

         &__item {

             &:hover {
                 cursor: pointer;
                 text-decoration: underline;
             }
         }
     }
 }

</style>
