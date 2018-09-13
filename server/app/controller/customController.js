//controller代码
'use strict';

const Controller = require('egg').Controller;

class CustomController extends Controller {
  async custonIndex() {
    // let str = await this.ctx.service.customService.show('zc','hh');
    //这里使用await来获取异步方法的返回值详情请自行百度或谷歌
    //以前是使用回调函数
    // this.ctx.body = 'this is my controller'+str;

    this.ctx.body = this.ctx.helper.show();//this.ctx.helper拿到helper这个内置对象也就是进入helper.js这个文件

  }

 
}

module.exports = CustomController;