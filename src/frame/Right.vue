<template>
   <div class="right-content">
      <el-menu :default-active="config.activeChartKey">
        <el-submenu  v-for="(item,index) in chartList" :index="index+''" :key="index+''">
          <template slot="title" >
            <span slot="title">{{item.cname}}</span>
          </template>
           <el-menu-item 
           v-for="(child,$index) in item.children" 
           :index="$index+'_'+index" 
           :key="$index+'_'+index"
           @click="changeConfigOptions(child,$index+'_'+index)"
           >{{child.cname}}</el-menu-item>
        </el-submenu>
      </el-menu>

   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from "axios"
  export default {
    data () {
      return {
        chartList:[]
      }
    },
    methods: {
      ...mapActions(['setOptions','setConfigOptions','setActiveChartKey']),
      getChartList(){
        axios.get("/api/home/getChartList").then((res)=>{
          this.chartList = res.data;
          this.setOptions(this.chartList);
          this.setConfigOptions(res.data[0].children[0]);
        })
      },

      changeConfigOptions(obj,index){
        this.setConfigOptions(obj);
        this.setActiveChartKey(index);
      },

    },
    computed: {
      ...mapState({
        config: state => state.Config
      })
    },
    mounted () {
      this.getChartList();
    },
    components: {}
  }
</script>
<style>
</style>
