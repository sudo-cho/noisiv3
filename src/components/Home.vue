<template>
    <div id="home">
        <MyHeader></MyHeader>
        <Project v-if="show"></Project>
        <Lab v-else></Lab>
    </div>
</template>

<script>
 import MyHeader from '@/components/MyHeader'
 import Project from '@/components/Project'
 import Lab from '@/components/Lab'
 export default {
     name: 'Home',
     components: {
         'MyHeader': MyHeader,
         'Project': Project,
         'Lab': Lab
     },
     watch: {
         '$route': 'updateComponent'
     },
     methods: {
         updateComponent () {
             this.show = (this.$route.name === "Lab") ? false : true
         }
     },
     data () {
         return {
             show: true
         }
     }
 }
</script>

<style lang='scss'>
 #home {
     display: flex;
     padding: 45px 55px;
     position: relative;
     width: 100%;
     height: 100%;
     justify-content: space-between;
 }
 @media (max-width: 768px) {
     #home {
         display: block;
         height: initial;
         padding: 30px;
     }
 }
 @media (max-width: 480px) {
     #home {
         padding: 10px;
     }
 }
</style>
