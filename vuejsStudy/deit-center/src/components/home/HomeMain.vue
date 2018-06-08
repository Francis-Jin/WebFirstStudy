<template>
    <div class="home">
      <nav-bar v-bind:navbartitle="str" @plus="plusChildData"></nav-bar>
      <banner v-bind:ImageUrl="image"></banner>
      <home-content></home-content>
      <edit></edit>
    </div>
</template>

<script>
import NavBar from 'components/common/navigator/NavMain'
import Banner from 'components/common/banner/bannerMain'
import HomeContent from './HomeContent'
import Edit from 'components/common/edit/EditMain'

export default {
  data () {
    return {
      str: 'HPE创作中心',
      childData: 0,
      image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4255272324,1037803712&fm=200&gp=0.jpg'
    }
  },
  methods: {
    plusChildData () {
      alert('给你点钱')
      this.childData += 10
    }
  },
  components: {
    NavBar,
    Banner,
    HomeContent,
    Edit
  }
}
</script>

<style>
    .home{
      display:flex;
      flex-direction: column;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.02);
      overflow: hidden;
    }
</style>