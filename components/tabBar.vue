<template lang="pug">
 tabbar(v-model="tabIndex",)
    tabbar-item( link="/")
        img(slot="icon" src="https://github.com/fluidicon.png")
        span(slot="label") Wechat
    tabbar-item( link="/user")
        img(slot="icon" src="https://github.com/fluidicon.png")
        span(slot="label") Wechat
</template>
<script>
export default {
    name: 'mytabbar',
    props:{
      tabIndex: {
        type: String,
        default: ''
      },
    }
}
</script>

<style lang="stylus">

</style>
