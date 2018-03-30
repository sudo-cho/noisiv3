<template>
    <div @click="$emit('scrollClicked')" class="scroller">
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
     z-index: 99;

     transform: rotate(90deg);

     &:hover{
         cursor: pointer;
         &:before {
             transform: rotate(-90deg) translate(-125px, 95px);
         }
         &:after {
             transform: rotate(90deg) translate(-0.5px, -194px);
         }
     }

     &:before, &:after {
         content: '';
         display: block;
         transition: all 0.3s;
     }

     &:before {
         transform: rotate(-90deg) translate(-125px, 80px);
         width: 4px; height: 190px;
         background: #413c7c;
     }

     &:after {
         content: '▲';
         transform: rotate(90deg) translate(-0.5px, -179px);
         width: 15px;
         height: 15px;
     }
 }
</style>
