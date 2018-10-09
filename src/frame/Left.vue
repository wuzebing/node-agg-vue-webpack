<template>
   <div class="left-content">
      <div class="view-code">
          <codemirror 
                ref="myCm"
                :value="code" 
                :options="cmOptions"
                @blur="onCmCodeChange">
          </codemirror>
          
          <div class="view-code-button">
            <span v-if="config.errorMessage=='error'"
           :style="{color:'#f56c6c',marginLeft:'10px'}">
              {{'错误的JSON'}}
            </span>
            <el-button type="warning" round size="mini" @click="formatCode()">格式化</el-button>
            <el-button type="success" round size="mini" @click="saveConfigOptions()">保存</el-button>
          </div>
      </div>

      <div class="view-charts">
        <div class="view-charts-content">
            <mecharts :id="'charts_demo'" :options="option" :height="350"></mecharts>
        </div>
        <div class="view-charts-mes">TEADME</div>
      </div>

      <el-dialog
        title="保存配置"
        :visible.sync="dialogVisible"
        width="60%">
          <el-row>
            <el-col>
              图表名称：
              <el-input v-model="cname" placeholder="图表名称" style="width:220px;"></el-input>
            </el-col>
            <el-col style="margin-top:20px;">
              修改类型：
              <el-radio-group v-model="addRadio">
                <el-radio :label="1">新增为新的图表</el-radio>
                <el-radio :label="2">修改原有图表</el-radio>
              </el-radio-group>
            </el-col>
            <el-col style="margin-top:20px;">
              图表类型：
              <el-radio-group v-model="addType">
                <el-radio v-for="(item,index) in config.options" :label="item.type" :key="index">{{item.cname}}</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="doSaveConfig()">确 定</el-button>
        </span>
      </el-dialog>

   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import echarts from 'echarts'
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css';
import mecharts from '@/components/Mecharts'

import {formatJson} from '@/utils/formatAll'
import axios from "axios"

  export default {
    data () {
      return {
        code:'option = {name:"xxx"}',
        option:{},
        cname:"",

        cmOptions: {
          tabSize: 4,
          mode: { name: 'javascript', json: true },
          theme:"eclipse",
          lineNumbers: true,
          line: true,
        },

        dialogVisible:false,
        addRadio:1,
        addType:'line'
      }
    },
    methods: {
      ...mapActions(['setOptions','setConfigOptions','setErrorMessage']),

      saveConfigOptions(){
        if(this.config.errorMessage == 'error'){
          this.$notify({
              title: '提示',
              message: 'json存在错误，请修改json'
            });
        }else{
          this.dialogVisible = true;
        }
      },

      doSaveConfig(){
        let code = this.code;
        let obj = {
          chart_options:code,
          type:this.addType,
          cname:this.cname
        }
        if(this.addRadio == 2){
          obj.id = this.config.configOptions.id;
        }
        axios.post("/api/home/saveConfig",obj).then((res)=>{
          debugger;
          let data = res.data;
          if(data.success){
            this.dialogVisible = false;
            this.$notify({
              title: '成功',
              message: '保存成功',
              type: 'success'
            });
          }else{
            this.$notify.error({
              title: '错误',
              message: data.msg
            });
          }
          
        })
      },  

      onCmCodeChange(code){
        this.code = code.getValue();
        let option ;
        try{
          eval(this.code);
          this.setErrorMessage('');
        }catch(e){
          this.setErrorMessage('error');
        }
        if(option && typeof option == 'object'){
          // this.setConfigOptions(option);
          this.option = option;
          this.setErrorMessage('');
        }else{
          this.setErrorMessage('error');
        }
      },

      initEchatData(){
        let option;
        this.code = this.config.configOptions.chart_options||'';
        eval(this.code);
        this.option = option||{};
        this.cname = this.config.configOptions.cname;
      },

      formatCode(){
        let option;
        eval(this.code);
        this.option = option||{};
        this.code = 'option = ' + formatJson(this.option)
      }

    },
    watch:{
      '$store.state.Config.configOptions'(){
        this.initEchatData();
      }
    },
    computed: {
      ...mapState({
        config: state => state.Config
      }),
    },
    mounted () {  
      this.initEchatData();
    },
    components: {codemirror,mecharts}
  }
</script>
<style>
.vue-codemirror{
    height: 100%;
}
.CodeMirror {
    border: 1px solid #eee;
    height: 100%;
}

</style>
