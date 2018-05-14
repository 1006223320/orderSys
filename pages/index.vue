<template lang='pug'>
  #home
    .main
      swiper(:list="bannerList" loop auto v-model="bannerIndex" @on-index-change="bannerIndexChange")
    mytabbar(tabIndex = '0')
</template>

<script>
import mytabbar from "../components/tabBar"

export default {
  components: {
    mytabbar
  },
  data () {
    return {
      bannerIndex: 0,
      bannerList: [{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
        title: '送你一次旅行'
      }],
    }
  },
  methods:{
    bannerIndexChange(){

    }
  }
}
</script>

<style>
</style>
