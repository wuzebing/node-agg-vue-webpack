<template>
   <div class="right-content">
      <el-collapse>
        <el-collapse-item v-for="(item,index) in configArray" :title="item.title" :name="index" :key="index">
          <div v-for="(item,kindex) in item.keys" class="config-item">
            <div class="config-item-title">{{item.title}}：</div>
            <div class="config-item-value">
              <el-input v-model="item.defaultValue" placeholder="请输入内容" @change="changeDefaultValue"></el-input>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {configArray} from '@/utils/server'
  export default {
    data () {
      return {
        configArray:[]
      }
    },
    methods: {
      ...mapActions(['setConfigOptions']),

      changeDefaultValue(){
        debugger;
        this.setConfigOptions(JSON.parse(JSON.stringify(this.configArray)))
      }
     
    },
    computed: {
      ...mapState({
        Config: state => state.Config
      })
    },
    mounted () {
      this.configArray = configArray
    },
    components: {}
  }
</script>
<style>
</style>
