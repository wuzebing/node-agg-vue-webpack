'use strict';
const Service = require('egg').Service;
class UserService extends Service {
    async show(zc, hh) { //异步防阻塞
        this.ctx.body = this.ctx.helper.show();//this.ctx.helper拿到helper这个内置对象也就是进入helper.js这个文件
        return zc + " and " + hh;
    }
}
module.exports = UserService;

