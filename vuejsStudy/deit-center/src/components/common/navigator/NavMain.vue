<template>
    <div class="navigator">
        <div class="nav-left">&lt;</div>
        <div class="nav-middle" v-on:touchstart="clickMe">
            {{navbartitle}}
        </div>
        <div class="nav-right">...</div>
    </div>
</template>

<script>
export default {
  props: {
    'navbartitle': {
      type: String
    }
  },
  methods: {
    clickMe () {
//      alert('摸我?')
      this.$emit('plus')
    }
  }
}
</script>

<style>
.navigator{
  height: 50px;
  background-color: #a0ddf7;
  color: #fff;
  font-size:18px;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;

}
.nav-left,.nav-right{
  width:36px;
  height:36px;
  font-weight:600;
  text-align:center;
  line-height:36px;
  transform: scaleY(1.2) translateY(-0px);
}
</style>