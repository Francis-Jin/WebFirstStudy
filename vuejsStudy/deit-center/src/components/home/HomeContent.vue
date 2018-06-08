<template>
  <div>
    <div class="cell-wrapper">
      <cell :cellTitle="'草稿管理'" :cellCount="0"></cell>
      <cell :cellTitle="'我的文章'" :cellCount="0"></cell>
    </div>
    <div class="cell-wrapper">
      <cell :cellTitle="'使用说明'"></cell>
      <cell :cellTitle="'设置'"></cell>
      <cell :cellTitle="'个人中心'"></cell>
    </div>
  </div>
</template>

<script>
import Cell from 'components/common/cell/CellMain'
export default {
  components: {
    Cell
  }
}
</script>

<style>
.cell-wrapper{
  margin-bottom: 10px;
  background: white;
}
</style>