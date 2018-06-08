<template>
  <div class="cell">
    <div class="cell-left">
      <a href="javascript: void(0);" class="img-wrap">
        <img src="" alt="">
      </a>
      <span>{{cellTitle}}</span>
    </div>
    <div class="cell-right" @touchstart="clickMe">
      <span>{{cellCount}}</span>
      <span class="gt">&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'cellTitle',
    'cellCount'
  ],
  methods: {
    clickMe () {
      alert('什么都没有，你要看什么呢？...')
    }
  }
}
</script>

<style>
  .cell {
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 6px;
    border-bottom: 1px solid rgba(0,0,0,.08);
  }
  .cell:last-child {
    border-bottom: 0;
  }
  .gt {
    display:inline-block;
    transform: scale(1.5) translate(-2px);
  }
  .cell-left {
    color: #666666;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  }
  .cell-left .img-wrap {
    display: inline-block;
    margin-right: 15px;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: lightskyblue;
  }
  .cell-right {
    color:#a2a2a2;
  }

</style>