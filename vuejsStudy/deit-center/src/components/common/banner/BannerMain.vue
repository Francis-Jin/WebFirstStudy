<template>
  <div class="banner-wrapper">
    <div
      ref="swipper"
      class="image-wrap"
      @touchstart="TapStart"
      @touchmove="TapMove"
      @touchend="TapEnd"
    >
      <img :src="ImageUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'ImageUrl'
    ],
    methods: {
      TapStart (ev) {
        this.startX = ev.touches[0].clientX
        console.log(this.startX)
      },
      TapMove (ev) {
//        console.log('正在摸ing...', ev)
        this.X = ev.touches[0].clientX
        this.offset = this.X - this.startX
        this.$refs.swipper.style.transform = 'translate(' + this.offset + 'px)'
        console.log(this.offset)
      },
      TapEnd (ev) {
//        console.log('摸完了...', ev)
        this.endX = ev.changedTouches[0].clientX
        console.log(this.endX)
      }
    }
  }
</script>

<style>
  .banner-wrapper{
    width: 100%;
    overflow: hidden;
  }
  .banner-wrapper img{
    width:100%;
  }
</style>