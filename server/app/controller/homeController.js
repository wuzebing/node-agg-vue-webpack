'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async index(){
    this.ctx.body = "index";
  }
  
  async getOptionsList(){
  	console.log(new Date().getTime())
    const  list = await this.ctx.service.homeService.getConfigList();
    this.ctx.body = list;
  }

}

module.exports = HomeController;
