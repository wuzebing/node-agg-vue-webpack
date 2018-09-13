<template>
   <div id="Home" class="height-100">
      <headert></headert>
      <div class="content">
        <el-row :gutter="30" class="item-list">
          <el-col :span="8" class="item" v-for="(item,index) in optionsList" :key="index">
            <el-card class="box-card">
              <mecharts :id="'charts_'+index" :options="JSON.parse(item.chart_options)" :height="350"></mecharts>
              <div class="masking"></div>
            </el-card>
          </el-col>
        </el-row>
      </div>
   </div>
</template>

<script>
import mecharts from '@/components/Mecharts'
import header from '@/frame/Header'
import axios from "axios"
  export default {
    data () {
      return {
        optionsList:[]
      }
    },
    methods: {
      getOptionsList(){
        axios.get("/api/home/getOptionsList").then((res)=>{
          this.optionsList = res.data;
        })
      }
    },
    mounted () {
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
      this.getOptionsList();
    },
    components: {headert:header, mecharts}
  }
</script>
<style>
</style>
