<template>
    <div class="home">

        <div id='warped'>
            <span class='w0'>S</span><span class='w1'>o</span><span class='w2'>m</span><span class='w3'>e</span><span class='w4'>t</span><span class='w5'>h</span><span class='w6'>i</span><span class='w7'>n</span><span class='w8'>g</span><span class='w9'> </span><span class='w10'>f</span><span class='w11'>u</span><span class='w12'>n</span><span class='w13'>n</span><span class='w14'>y</span><span class='w15'> </span><span class='w16'>h</span><span class='w17'>e</span><span class='w18'>r</span><span class='w19'>e</span>
        </div>

        <Breadcrumbs text="noisiv"></Breadcrumbs>
        <Scroller text="main projects"></Scroller>

        <div class="home__content">
            <div class="home__content__titles">
                <h1 class="home__content__titles__title">noisiv.</h1>
                <h2 class="home__content__titles__sub">▲ Creating neat stuff since 1995</h2>
            </div>
        </div>

        <Projects></Projects>
        <Xtra></Xtra>
        <Me></Me>
    </div>
</template>

<script>
 import Breadcrumbs from '@/components/Breadcrumbs'
 import Scroller from '@/components/Scroller'
 import Projects from '@/components/Projects'
 import Xtra from '@/components/Xtra'
 import Me from '@/components/Me'
 export default {
     name: 'Home',
     components: {
         'Breadcrumbs': Breadcrumbs,
         'Scroller': Scroller,
         'Projects': Projects,
         'Xtra': Xtra,
         'Me': Me
     }
 }
</script>

<style lang="scss">
 #warped {
     color: #fff;
     position: absolute;
     display: block;
     width: 588px;
     height: 440px;
     top: 0;
     left: 0;
     transform: translate(10px, 360px);
 }

 #warped>span[class^=w]:nth-of-type(n+0){display:block; position:absolute;
     -moz-transform-origin:50% 100%; -webkit-transform-origin:50% 100%; -o-transform-origin:50%
     100%; -ms-transform-origin:50% 100%; transform-origin:50% 100%; }

 #warped span{font-size:79px;font-weight:bold;font-style:normal;
     line-height:0.65; white-space:pre; overflow:visible; padding:0px;}

 #warped .w0 {-moz-transform: rotate(3.52rad);-webkit-transform: rotate(3.52rad);-o-transform:
     rotate(3.52rad);-ms-transform: rotate(3.52rad); transform: rotate(3.52rad);
     width: 45px; height: 51px; left: 215.04px; top: 307.97px;}

 #warped .w1 {-moz-transform: rotate(3.86rad);-webkit-transform: rotate(3.86rad);-o-transform:
     rotate(3.86rad);-ms-transform: rotate(3.86rad); transform: rotate(3.86rad);
     width: 47px; height: 51px; left: 170.93px; top: 281.18px;}

 #warped .w2 {-moz-transform: rotate(4.29rad);-webkit-transform: rotate(4.29rad);-o-transform:
     rotate(4.29rad);-ms-transform: rotate(4.29rad); transform: rotate(4.29rad);
     width: 72px; height: 51px; left: 120.72px; top: 229.46px;}

 #warped .w3 {-moz-transform: rotate(4.71rad);-webkit-transform: rotate(4.71rad);-o-transform:
     rotate(4.71rad);-ms-transform: rotate(4.71rad); transform: rotate(4.71rad);
     width: 43px; height: 51px; left: 122.5px; top: 168.73px;}

 #warped .w4 {-moz-transform: rotate(4.99rad);-webkit-transform: rotate(4.99rad);-o-transform:
     rotate(4.99rad);-ms-transform: rotate(4.99rad); transform: rotate(4.99rad);
     width: 31px; height: 51px; left: 134.41px; top: 127.29px;}

 #warped .w5 {-moz-transform: rotate(5.28rad);-webkit-transform: rotate(5.28rad);-o-transform:
     rotate(5.28rad);-ms-transform: rotate(5.28rad); transform: rotate(5.28rad);
     width: 47px; height: 51px; left: 144.62px; top: 87.41px;}

 #warped .w6 {-moz-transform: rotate(5.54rad);-webkit-transform: rotate(5.54rad);-o-transform:
     rotate(5.54rad);-ms-transform: rotate(5.54rad); transform: rotate(5.54rad);
     width: 20px; height: 51px; left: 182.96px; top: 58.13px;}

 #warped .w7 {-moz-transform: rotate(5.8rad);-webkit-transform: rotate(5.8rad);-o-transform:
     rotate(5.8rad);-ms-transform: rotate(5.8rad); transform: rotate(5.8rad);
     width: 47px; height: 51px; left: 200.91px; top: 36.11px;}

 #warped .w8 {-moz-transform: rotate(6.14rad);-webkit-transform: rotate(6.14rad);-o-transform:
     rotate(6.14rad);-ms-transform: rotate(6.14rad); transform: rotate(6.14rad);
     width: 46px; height: 51px; left: 250.2px; top: 20.44px;}

 #warped .w9 {-moz-transform: rotate(6.41rad);-webkit-transform: rotate(6.41rad);-o-transform:
     rotate(6.41rad);-ms-transform: rotate(6.41rad); transform: rotate(6.41rad);
     width: 24px; height: 51px; left: 301.08px; top: 20.21px;}

 #warped .w10 {-moz-transform: rotate(6.61rad);-webkit-transform: rotate(6.61rad);-o-transform:
     rotate(6.61rad);-ms-transform: rotate(6.61rad); transform: rotate(6.61rad);
     width: 28px; height: 51px; left: 329.21px; top: 27.3px;}

 #warped .w11 {-moz-transform: rotate(6.9rad);-webkit-transform: rotate(6.9rad);-o-transform:
     rotate(6.9rad);-ms-transform: rotate(6.9rad); transform: rotate(6.9rad);
     width: 48px; height: 51px; left: 357.27px; top: 47px;}

 #warped .w12 {-moz-transform: rotate(7.25rad);-webkit-transform: rotate(7.25rad);-o-transform:
     rotate(7.25rad);-ms-transform: rotate(7.25rad); transform: rotate(7.25rad);
     width: 47px; height: 51px; left: 394.31px; top: 84.32px;}

 #warped .w13 {-moz-transform: rotate(7.6rad);-webkit-transform: rotate(7.6rad);-o-transform:
     rotate(7.6rad);-ms-transform: rotate(7.6rad); transform: rotate(7.6rad);
     width: 47px; height: 51px; left: 415.71px; top: 131.42px;}

 #warped .w14 {-moz-transform: rotate(7.92rad);-webkit-transform: rotate(7.92rad);-o-transform:
     rotate(7.92rad);-ms-transform: rotate(7.92rad); transform: rotate(7.92rad);
     width: 41px; height: 51px; left: 423.09px; top: 180.01px;}

 #warped .w15 {-moz-transform: rotate(8.17rad);-webkit-transform: rotate(8.17rad);-o-transform:
     rotate(8.17rad);-ms-transform: rotate(8.17rad); transform: rotate(8.17rad);
     width: 24px; height: 51px; left: 424.22px; top: 216.68px;}

 #warped .w16 {-moz-transform: rotate(8.44rad);-webkit-transform: rotate(8.44rad);-o-transform:
     rotate(8.44rad);-ms-transform: rotate(8.44rad); transform: rotate(8.44rad);
     width: 47px; height: 51px; left: 394.84px; top: 252.88px;}

 #warped .w17 {-moz-transform: rotate(8.78rad);-webkit-transform: rotate(8.78rad);-o-transform:
     rotate(8.78rad);-ms-transform: rotate(8.78rad); transform: rotate(8.78rad);
     width: 43px; height: 51px; left: 362.55px; top: 288.95px;}

 #warped .w18 {-moz-transform: rotate(9.06rad);-webkit-transform: rotate(9.06rad);-o-transform:
     rotate(9.06rad);-ms-transform: rotate(9.06rad); transform: rotate(9.06rad);
     width: 32px; height: 51px; left: 330.93px; top: 309.35px;}

 #warped .w19 {-moz-transform: rotate(9.34rad);-webkit-transform: rotate(9.34rad);-o-transform:
     rotate(9.34rad);-ms-transform: rotate(9.34rad); transform: rotate(9.34rad);
     width: 43px; height: 51px; left: 284.08px; top: 318.55px;}

 #warped .w20 {-moz-transform: rotate(-4.81rad);-webkit-transform: rotate(-4.81rad);-o-transform:
     rotate(-4.81rad);-ms-transform: rotate(-4.81rad); transform: rotate(-4.81rad);
     width: 23px; height: 25px; left: 283.46px; top: 215.82px;}

 #warped .w21 {-moz-transform: rotate(-4.94rad);-webkit-transform: rotate(-4.94rad);-o-transform:
     rotate(-4.94rad);-ms-transform: rotate(-4.94rad); transform: rotate(-4.94rad);
     width: 15px; height: 25px; left: 291.34px; top: 240.16px;}

 #warped .w22 {-moz-transform: rotate(-5.13rad);-webkit-transform: rotate(-5.13rad);-o-transform:
     rotate(-5.13rad);-ms-transform: rotate(-5.13rad); transform: rotate(-5.13rad);
     width: 35px; height: 25px; left: 290.41px; top: 268.1px;}

 #warped .w23 {-moz-transform: rotate(-5.33rad);-webkit-transform: rotate(-5.33rad);-o-transform:
     rotate(-5.33rad);-ms-transform: rotate(-5.33rad); transform: rotate(-5.33rad);
     width: 11px; height: 25px; left: 315.89px; top: 292.43px;}

 #warped .w24 {-moz-transform: rotate(-5.45rad);-webkit-transform: rotate(-5.45rad);-o-transform:
     rotate(-5.45rad);-ms-transform: rotate(-5.45rad); transform: rotate(-5.45rad);
     width: 11px; height: 25px; left: 325.92px; top: 305.06px;}

 #warped .w25 {-moz-transform: rotate(-5.63rad);-webkit-transform: rotate(-5.63rad);-o-transform:
     rotate(-5.63rad);-ms-transform: rotate(-5.63rad); transform: rotate(-5.63rad);
     width: 23px; height: 25px; left: 336.08px; top: 320.03px;}

 #warped .w26 {-moz-transform: rotate(-5.82rad);-webkit-transform: rotate(-5.82rad);-o-transform:
     rotate(-5.82rad);-ms-transform: rotate(-5.82rad); transform: rotate(-5.82rad);
     width: 13px; height: 25px; left: 360.45px; top: 332.21px;}

 #warped .w27 {-moz-transform: rotate(-5.96rad);-webkit-transform: rotate(-5.96rad);-o-transform:
     rotate(-5.96rad);-ms-transform: rotate(-5.96rad); transform: rotate(-5.96rad);
     width: 10px; height: 25px; left: 376.94px; top: 338.51px;}

 #warped .w28 {-moz-transform: rotate(-6.12rad);-webkit-transform: rotate(-6.12rad);-o-transform:
     rotate(-6.12rad);-ms-transform: rotate(-6.12rad); transform: rotate(-6.12rad);
     width: 18px; height: 25px; left: 391.5px; top: 343.25px;}

 #warped .w29 {-moz-transform: rotate(-6.31rad);-webkit-transform: rotate(-6.31rad);-o-transform:
     rotate(-6.31rad);-ms-transform: rotate(-6.31rad); transform: rotate(-6.31rad);
     width: 19px; height: 25px; left: 414.54px; top: 344.96px;}

 #warped .w30 {-moz-transform: rotate(-6.48rad);-webkit-transform: rotate(-6.48rad);-o-transform:
     rotate(-6.48rad);-ms-transform: rotate(-6.48rad); transform: rotate(-6.48rad);
     width: 11px; height: 25px; left: 438.25px; top: 342.84px;}

 #warped .w31 {-moz-transform: rotate(-6.61rad);-webkit-transform: rotate(-6.61rad);-o-transform:
     rotate(-6.61rad);-ms-transform: rotate(-6.61rad); transform: rotate(-6.61rad);
     width: 11px; height: 25px; left: 453.82px; top: 338.75px;}

 #warped .w32 {-moz-transform: rotate(-6.85rad);-webkit-transform: rotate(-6.85rad);-o-transform:
     rotate(-6.85rad);-ms-transform: rotate(-6.85rad); transform: rotate(-6.85rad);
     width: 36px; height: 25px; left: 467.28px; top: 326.41px;}

 #warped .w33 {-moz-transform: rotate(-7.13rad);-webkit-transform: rotate(-7.13rad);-o-transform:
     rotate(-7.13rad);-ms-transform: rotate(-7.13rad); transform: rotate(-7.13rad);
     width: 23px; height: 25px; left: 499.63px; top: 304.43px;}

 #warped .w34 {-moz-transform: rotate(-7.32rad);-webkit-transform: rotate(-7.32rad);-o-transform:
     rotate(-7.32rad);-ms-transform: rotate(-7.32rad); transform: rotate(-7.32rad);
     width: 15px; height: 25px; left: 517.86px; top: 285.08px;}

 #warped .w35 {-moz-transform: rotate(-7.48rad);-webkit-transform: rotate(-7.48rad);-o-transform:
     rotate(-7.48rad);-ms-transform: rotate(-7.48rad); transform: rotate(-7.48rad);
     width: 23px; height: 25px; left: 524.39px; top: 263.74px;}

 #warped .w36 {-moz-transform: rotate(-7.62rad);-webkit-transform: rotate(-7.62rad);-o-transform:
     rotate(-7.62rad);-ms-transform: rotate(-7.62rad); transform: rotate(-7.62rad);
     width: 11px; height: 25px; left: 537.18px; top: 242.16px;}

 #warped .w37 {-moz-transform: rotate(-7.71rad);-webkit-transform: rotate(-7.71rad);-o-transform:
     rotate(-7.71rad);-ms-transform: rotate(-7.71rad); transform: rotate(-7.71rad);
     width: 10px; height: 25px; left: 540.69px; top: 226.71px;}

 #warped .w38 {-moz-transform: rotate(-7.79rad);-webkit-transform: rotate(-7.79rad);-o-transform:
     rotate(-7.79rad);-ms-transform: rotate(-7.79rad); transform: rotate(-7.79rad);
     width: 15px; height: 25px; left: 539.99px; top: 210.19px;}



 .home {
     &__content {
         position: relative;
         width: 100%;
         height: 100vh;

         &__titles {
             position: absolute;
             right: 50px;
             top: 220px;

             &__title {
                 font-size: 9em;
                 letter-spacing: 45px;
                 margin: 0;
             }

             &__sub {
                 font-size: 1.9em;
                 font-style: italic;
                 font-weight: 400;
                 transform: translateX(105px);
                 margin-top: 0;
                 display: inline-block;
             }
         }
     }

 }
</style>
