'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async index(){
    this.ctx.body = "index";
  }
  
  async getOptionsList(){
    const  list = await this.ctx.service.homeService.getConfigList();
    this.ctx.body = list;
  }

  async getChartList(){
    const  list = await this.ctx.service.homeService.getChartList();
    this.ctx.body = list;
  }

  async getTypeList(){
    const queryObj = this.ctx.query;
    console.log(queryObj);
    const  list = await this.ctx.service.homeService.getTypeList();
    this.ctx.body = list;
  }

  async saveConfig(){
    const obj = {
      id:this.ctx.request.body.id,
      type:this.ctx.request.body.type,
      chart_options:this.ctx.request.body.chart_options,
      cname:this.ctx.request.body.cname
    }
    let list= {};
    if(obj.id != undefined){
      list = await this.ctx.service.homeService.modifyConfig(obj);
    }else{
      list = await this.ctx.service.homeService.saveConfig(obj);
    }

    this.ctx.body = list;
  }

  
}

module.exports = HomeController;
