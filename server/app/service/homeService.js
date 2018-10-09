'use strict';
const Service = require('egg').Service;
class UserService extends Service {
    async getConfigList() { //异步防阻塞
        const  list = await this.app.mysql.query('select * from chart_config_list')
        return list;
    }

    async getChartList() { //异步防阻塞
    	const list = [];
        const  configList = await this.app.mysql.query('select * from chart_config_list order by cname');
        const  typeList = await this.app.mysql.query('select * from chart_type_list');

        for(let i=0;i<typeList.length;i++){
        	let obj = typeList[i];
        	for(let j=0;j<configList.length;j++){
        		let config = configList[j];
        		if(config.type == obj.type){
        			if(obj.children){
        				obj.children.push(config)
        			}else{
        				obj.children = [config];
        			}
        		}
        	}
        	list.push(obj);
        }

        return list;
    }


    async getTypeList(){
        const  list = await this.app.mysql.query('select * from chart_type_list')
        return list;
    }

    async saveConfig(obj){
        let list = {}
        try {
            list = await this.app.mysql.insert('chart_config_list',{cname: obj.cname,type: obj.type, chart_options:obj.chart_options})
            list = {
                msg:'',
                success:true
            }
        }catch(err){
            list = {
                msg:err,
                success:false
            }
        }
        return list;
    }

    async modifyConfig(obj){
        let  list = {};
        try {
            list = await this.app.mysql.update('chart_config_list',{id: obj.id,cname: obj.cname,type: obj.type,chart_options: obj.chart_options})
            list = {
                msg:'',
                success:true
            }
        }catch(err){
            list = {
                msg:err,
                success:false
            }
        }
        return list;
    }

}
module.exports = UserService;

