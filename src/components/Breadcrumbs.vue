<template>
    <div class="bc">
        <p class="bc__text">_{{text}}</p>
        <p class="bc__text bc__text--2">_{{text}}</p>
        <p class="bc__text bc__text--3">_{{text}}</p>
    </div>
</template>

<script>
 export default {
     name: 'Breadcrumbs',
     props: ['text'],
 }
</script>

<style lang="scss">
 $initValue: 4px;

 .bc {
     position: absolute;
     top: 100px;
     left: 180px;
     letter-spacing: 25px;

     &__text {
         font-weight: 700;
         font-size: 1.5em;
         margin:-15px;

         &--2 {
             transform: translateX($initValue + $initValue);
         }
         &--3 {
             transform: translateX($initValue + $initValue + $initValue + $initValue);
         }
     }
 }
</style>
