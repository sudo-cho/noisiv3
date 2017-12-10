<template>
    <div id="home">
        <MyHeader></MyHeader>
        <Project></Project>
    </div>
</template>

<script>
 import MyHeader from '@/components/MyHeader'
 import Project from '@/components/Project'
 export default {
     name: 'Home',
     components: {
         'MyHeader': MyHeader,
         'Project': Project
     },
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
</style>
