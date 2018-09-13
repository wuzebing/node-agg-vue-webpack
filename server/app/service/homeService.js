'use strict';
const Service = require('egg').Service;
class UserService extends Service {
    async getConfigList() { //异步防阻塞
        const  list = await this.app.mysql.query('select * from chart_config_list')
        return list;
    }
}
module.exports = UserService;

