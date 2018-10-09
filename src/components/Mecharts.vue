<template>
   <div>
      <div :id="id" :style="{height:height+'px'}"></div>
   </div>
</template>

<script>
import echarts from 'echarts'
import debounce from 'lodash.debounce'

  const listenerContainer = {}
  const resizeListener = debounce(() => {
    Object.values(listenerContainer).forEach((echartsComponent) => {
      echartsComponent._doResize()
    })
  }, 120)
  window.addEventListener('resize', resizeListener, false)

  export default {
    props:{
      id:{
        type:String,
        require:true
      },
      options:{
        type:Object,
        require:true
      },
      height:{
        type:Number,
        require:true
      },
    },
    data () {
      return {
        myChart:null
      }
    },
    watch:{
      'options'(data){
        this.init();
      }
    },
    methods: {
      _doResize(){
        this.myChart.resize();
      },
      init(){
        this.myChart = echarts.init(document.getElementById(this.id));
        this.myChart.clear();
        this.myChart.setOption(this.options);
        listenerContainer[this.id] = this;
      }
    },
    mounted () {
      this.init();
    },
    components: {}
  }
</script>
<style>
</style>
