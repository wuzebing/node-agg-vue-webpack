<template>
   <div class="header">
      <div class="log"><!-- Echarts换肤系统 --></div>
   </div>
</template>

<script>
import axios from "axios";
  export default {
    data () {
      return {
      }
    },
    methods: {
     
    },
    mounted () {
      axios.get("/api/getChartTypeList").then((res)=>{
        
        debugger;
      })
    },
    components: {}
  }
</script>
<style>
</style>
