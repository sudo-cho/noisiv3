<template>
    <div :class="{enterActive: enterActiveBoolean}" class="project">
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
         },
         enterActive: {
             type: Boolean
         }
     },
     data () {
         return {
             enterActiveBoolean: false,
             triggerActive: true
         }
     },
     watch: {
         'enterActive': function () {
             if (this.triggerActive) {
                 this.enterActiveBoolean = this.enterActive
                 this.triggerActive = false
             }
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
 @keyframes growUp {
     from {opacity: 0; transform: scale(0)}
     to {opacity: 1; transform: scale(1)}
 }

 @keyframes moveRight {
     from {opacity: 0; transform: translate3d(500%, 0, 0)}
     to {opacity: 1; transform: translate3d(0, 0, 0)}
 }

 @keyframes moveLeft {
     from {opacity: 0; transform: translate3d(-500%, 0, 0)}
     to {opacity: 1; transform: translate3d(0, 0, 0)}
 }

 .project.enterActive {
     opacity: 1;
     .project__img {
         animation: growUp 0.3s 0.5s ease forwards;
     }
     .project__nb {
         animation: moveRight 0.3s 0.8s ease forwards;
     }
     .project__content {
         animation: moveLeft 0.3s 0.8s ease forwards;
     }
 }

 .project {
     opacity: 0;
     transition: transform 0.3s;
     display:flex;
     flex-direction: row;
     align-items: flex-end;
     justify-content: center;
     position: relative;
     color: #fff;
     margin: 150px 0;

     &:hover {
         transform: scale(1.1);
         .project__img {
             box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
         }
     }

     &__nb {
         opacity: 0;
         position: absolute;
         right: 5px;
         top: 0px;
         font-size: 8em;
         margin: 0;
         margin-top: -115px;
     }

     &__img {
         opacity: 0;
         width: 100%;
         height: auto;
         transition: all 0.3s;
     }

     &__content {
         opacity: 0;
         position: relative;
         z-index: 2;
         text-align: right;

         &__title {
             margin: 0 -35px 30px 0;
             font-size: 7em;
             font-weight: 700;
             line-height: 1;
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
