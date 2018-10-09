<template>
   <div id="Home" class="height-100">
      <headert></headert>
      <div class="content">
        <el-row :gutter="20" class="item-list">
          <el-col :span="8" class="item" v-for="(item,index) in optionsList" :key="index" v-if="optionsList.length>0">
            <el-card class="box-card">
              <div class="card-name">{{item.cname}}</div>
              <mecharts :id="'charts_'+index" :options="item.options" :height="350"></mecharts>
              <!-- <div class="masking"></div> -->
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
          let data = res.data;
          for(let i=0;i<data.length;i++){
            let optionStr = data[i].chart_options;
            let option ;
            eval(optionStr);
            data[i].options = option;
          }
          debugger;
          this.optionsList = data;
        })
      }
    },
    mounted () {
      this.getOptionsList();
    },
    components: {headert:header, mecharts}
  }
</script>
<style>
</style>
