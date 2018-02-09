<template>
    <div class="menu">
        <div class="menu__left">
            <p class="menu__left__title">noisiv</p>
            <p class="menu__left__sub">▲ Creating neat stuff since 1995</p>
        </div>
        <div class="menu__right">
            <router-link :to="item.src" class="no-style" v-for="item in items" :href="item.src" :key="item.id"><p class="menu__right__item">_{{item.text}}</p></router-link>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'Menu',
     data () {
         return {
             "items": [
                 {"id": 1, "src": "/me", "text": "me + contact"}
             ]
         }
     }
 }
</script>

<style lang="scss">
 .no-style {
     text-decoration: none;
     color: inherit;
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
