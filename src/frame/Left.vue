<template>
   <div class="left-content">
      <div class="view-charts">
        <div id="echartDemo" style="height:100%;width:100%;"></div>
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
        myChart:null
      }
    },
    methods: {
      ...mapActions(['setOptions']),
    },
    watch:{
      "$store.state.Config.configOptions": function() {
        let configOptions = this.Config.configOptions;
        let options = JSON.parse(JSON.stringify(this.Config.options));
        for(let i=0;i<configOptions.length;i++){
          let keys = configOptions[i].keys;
          for(let k=0;k<keys.length;k++){
            let key = keys[k].key;
            let keyArr = key.split(".");
            let index = 0,
                obj = options;
            while(obj[keyArr[index]] && keyArr[index]){
              if(index == keyArr.length-1){
                obj[keyArr[index]] = keys[k].defaultValue
              }else{
                obj = obj[keyArr[index]]
              }
              index++;
            }
          }
        }
        console.log(options)
        this.myChart.setOption(options);
        this.setOptions(options);
      },
    },
    computed: {
      ...mapState({
        Config: state => state.Config
      })
    },
    mounted () {
      // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('echartDemo'));

        // 指定图表的配置项和数据

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(options);
        this.setOptions(options);
    },
    components: {}
  }
</script>
<style>
</style>
