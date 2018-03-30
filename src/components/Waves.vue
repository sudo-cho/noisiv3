<template>
    <div class="waves" @click="seismicWave">
        <div class="waves__item waves__item--one">
            <canvas id="sineCanvas" class="waves__item__canvas"></canvas>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'waves',
     mounted () {
         this.beginWaves()
     },
     data () {
         return {
             "unit": 350,
             "canvas": null,
             "context": null,
             "canvas2": null,
             "context2": null,
             "height": null,
             "width": null,
             "xAxis": null,
             "yAxis": null,
             "power": 30
         }
     },
     methods: {
         // taken from : https://jsfiddle.net/umaar/fWSUk/
         drawSine (t) {
             var x = t
             var y = Math.sin(x)
             this.context.moveTo(this.yAxis, this.unit * y + this.xAxis)
             for (var i = this.yAxis; i <= this.width; i += 5) {
                 x = t + (-this.yAxis + i) / this.unit
                 y = Math.sin(x) / 6
                 this.context.lineTo(i, this.unit* y + this.xAxis)
             }
         },
         init () {
             this.canvas = document.getElementById("sineCanvas")
             this.canvas.width = 2000
             this.canvas.height = 300
             this.context = this.canvas.getContext("2d")
             this.height = this.canvas.height
             this.width = this.canvas.width
             this.xAxis = Math.floor(this.height/2)
             this.yAxis = Math.floor(this.width/24)
             this.context.save()
             this.draw()
         },
         draw () {
             this.context.clearRect(0, 0, this.width, this.height)
             this.context.beginPath()
             this.context.stroke()
             this.context.save()
             this.context.strokeStyle = '#413c7c'
             this.context.lineWidth = 5
             this.context.beginPath()
             this.drawSine(this.draw.t)
             this.context.stroke()
             this.context.restore()
             this.draw.seconds = this.draw.seconds - .007
             this.draw.t = this.draw.seconds * Math.PI
             setTimeout(this.draw, this.power)
         },
         beginWaves () {
             this.draw.seconds = 0
             this.draw.t = 0
             this.init()
         },

         seismicWave () {
             const animInterval = setInterval(() => {
                 if(this.power === 1) {
                     clearInterval(animInterval)
                     setTimeout(this.seismicWaveBack, 1000)
                 }
                 else {
                     this.power = this.power - 1
                 }
             }, 5)
         },

         seismicWaveBack () {
             const animIntervalBack = setInterval(_ => {
                 this.power === 30 ? clearInterval(animIntervalBack) : this.power = this.power + 1
             }, 50)
         }
     }

 }

</script>

<style lang="scss">
 .waves {
     position: absolute;
     overflow-x: hidden;
     top: 460px; left: -5px;
     z-index: 99;

     &__item {
         transform: rotateY(180deg);

         &__canvas {
             width: 110vw;
             height: 300px;
         }
     }
 }
</style>
