<template>
    <div class="scroller">
        {{text}}
    </div>
</template>

<script>
 export default {
     name: 'Scroller',
     props: ['text']
 }
</script>

<style lang="scss">
 .scroller {
     position: absolute;
     bottom: 55px;
     left: 95px;

     font-size: 1em;

     transform: rotate(90deg);

     &:before, &:after {
         content: '';
         display: block;
         background: #413c7c;
     }

     &:before {
         transform: rotate(-90deg) translate(-125px, 80px);
         width: 4px; height: 190px;
     }

     &:after {
         transform: rotate(-90deg) translate(0px, 170px);
         width: 15px;
         height: 15px;
         border-radius: 50%;
     }
 }
</style>
