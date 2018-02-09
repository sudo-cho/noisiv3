<template>
    <div class="app" id="app">
        <div class="app__container">
            <Menu class="app__menu"></Menu>
            <router-view/>
        </div>
    </div>
</template>

<script>
 import Menu from '@/components/Menu'
 export default {
     name: 'App',
     components: {
         'Menu': Menu
     }
 }
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700');

 $lRed: #ced1f5;
 $dRed: #413c7c;

 html, body {
     margin: 0;
 }

 body {
     background: $lRed;
     color: $dRed;
     font-family: 'Noto Sans', sans-serif;
 }

 .app {
     &__container {
         margin: 0 auto;
     }
 }

</style>
