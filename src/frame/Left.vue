<template>
   <div class="left-content">
      <div class="view-charts">
         <el
      </div>
      <div class="view-code"></div>
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { options } from '@/utils/testconfig'
import echarts from 'echarts'
  export default {
    data () {
      return {
      }
    },
    methods: {
      ...mapActions(['setOptions']),
    },
    watch:{
     
    },
    computed: {
      ...mapState({
        Config: state => state.Config
      })
    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
        // this.myChart = echarts.init(document.getElementById('echartDemo'));

        // 指定图表的配置项和数据

        // 使用刚指定的配置项和数据显示图表。
        // this.myChart.setOption(options);
        // this.setOptions(options);
    },
    components: {}
  }
</script>
<style>
</style>
