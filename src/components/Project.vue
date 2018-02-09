<template>
    <div class="project">
        <div class="project__content">
            <h2 class="project__content__title">{{data.title}}</h2>
            <h3 class="project__content__desc">/   {{data.description}}</h3>
            <p class="project__content__details">{{data.details}}</p>
        </div>
        <img class="project__img" :alt="data.preview.alt" :src="imagePath(data.preview.src)"/>
        <h2 class="project__nb">{{data.number}}</h2>
    </div>
</template>

<script>
 export default {
     name: 'Project',
     props: {
         name,
         data: {
             type: Object
         }
     },
     methods: {
         imagePath (path) {
             return require("../assets/img/" + path)
         },
     },
 }
</script>

<style lang="scss">
 .project {
     display:flex;
     flex-direction: row;
     align-items: flex-end;
     justify-content: center;
     position: relative;
     color: #fff;
     margin: 150px 0;

     &__nb {
         position: absolute;
         right: 5px;
         top: 0px;
         font-size: 8em;
         margin: 0;
         margin-top: -115px;
     }

     &__img {
         width: 100%;
         height: auto;
     }

     &__content {
         position: relative;
         z-index: 2;
         text-align: right;



         &__title {
             margin: 0;
             margin-right: -35px;
             font-size: 7em;
             font-weight: 700;
         }

         &__desc {
             margin: -4px 0 0;
             font-size: 1.2em;
             font-weight: 400;
         }

         &__details {
             margin: 5px 0 15px 0;
             font-size: 0.8em;
         }
     }
 }
</style>
