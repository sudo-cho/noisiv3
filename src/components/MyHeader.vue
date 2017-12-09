<template>
    <div id="myheader" class="myheader">
        <div class="myheader__top">
            <h2 class="myheader__top__nick">Noisiv</h2>
            <h2 class="myheader__top__sub">Creating neat stuff since 1995</h2>
            <ul class="myheader__top__list">
                <a target="_blank" rel="noopener" href="mailto:yo@noisiv.fr"><li class="myheader__top__list__item">yo@noisiv.fr</li></a>
                <a target="_blank" rel="noopener" href="http://noisiv.fr/images/noisiv-cv.pdf"><li class="myheader__top__list__item">my résumé</li></a>
                <a target="_blank" rel="noopener" href="https://www.last.fm/fr/user/Capdix"><li class="myheader__top__list__item">lastfm/capdix</li></a>
                <a target="_blank" rel="noopener" href="https://www.senscritique.com/Noisiv"><li class="myheader__top__list__item">senscritique/noisiv</li></a>
            </ul>
        </div>

        <div class="myheader__mid">
            <p class="myheader__mid__current">Droom</p>
            <ul class="myheader__mid__list">
                <li class="myheader__mid__list__item">The Salt Factory</li>
                <li class="myheader__mid__list__item">148</li>
                <li class="myheader__mid__list__item">Untitled1</li>
            </ul>
        </div>

        <div class="myheader__bot">
            <p class="myheader__bot__text">Made with love in 2017</p>
            <p class="myheader__bot__text">Design by Lucas Dussouchaud</p>
        </div>

    </div>
</template>

<script>
 export default {
     name: 'MyHeader'
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
 .myheader{
     flex-grow: 1;
     height:100%;
     &__top {
         &__nick, &__sub {
             font-size: 1em;
             font-weight: 400;
         }
         &__list {
             margin-top: 30px 0 0 0;
             &__item {
                 &:hover {
                     cursor: pointer;
                     text-decoration: underline;
                 }
             }
         }
     }
     &__mid {
         &__current {
             display: inline-block;
             color: #fefefe;
             background: #070707;
             padding: 5px 20px;
             margin: 50px 0;
         }
         &__list {
             &__item {
                 &:hover {
                     cursor: pointer;
                     text-decoration: underline;
                 }
             }
         }
     }
     &__bot {
         margin-top: 75px;
     }
 }

</style>
