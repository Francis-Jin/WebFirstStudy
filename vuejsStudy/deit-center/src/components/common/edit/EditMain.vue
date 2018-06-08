<template>
  <div class="edit-wrapper"
     @touchstart="clickMe"
  >
    <button class="edit-click"></button>
  </div>
</template>

<script>
export default {
  methods: {
    clickMe () {
      alert('别摸我，这里还没写东西。。。')
    }
  }
}
</script>

<style>
.edit-wrapper {
  width: 100px;
  height: 100px;
  background:dodgerblue;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: -50px;
  margin-left: -50px;
  text-align: center;
  line-height: 75px;
}
.edit-click {
  width: 36px;
  height: 36px;
  background: white;
  border: none;
  outline: none;
}
</style>