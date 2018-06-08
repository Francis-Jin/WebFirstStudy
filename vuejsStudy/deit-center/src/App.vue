<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from 'components/home/HomeMain'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  position:relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
