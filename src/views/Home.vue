<template>
   <div id="Home" class="height-100">
      <headert></headert>
      <div class="content">
        <left></left>
        <right></right>
      </div>
   </div>
</template>

<script>
import header from '@/frame/Header'
import left from '@/frame/Left'
import right from '@/frame/Right'
  export default {
    data () {
      return {
      }
    },
    methods: {
     
    },
    mounted () {
       
    },
    components: {headert: header, left ,right}
  }
</script>
<style>
</style>
