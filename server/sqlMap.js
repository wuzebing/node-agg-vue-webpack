// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, age) values (0, ?, ?)'
    },

    chartType:{
    	list:'select * from chart_type_list'
    }
}

module.exports = sqlMap;