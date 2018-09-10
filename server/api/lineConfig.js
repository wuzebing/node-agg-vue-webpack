var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');


// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
      res.json({
          code: '1',
          msg: '操作失败'
      });
  } else {
      res.json(ret);
  }
};

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// router.get('/', function(req, res) {
//   res.send('Birds home page');
// });
// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

router.get('/getUser', (req, res) => {
  var params = req.body;
  console.log(params);
  jsonWrite(res, {code:0,msg:'About birds'});
});


router.get('/getChartTypeList', (req, res) => {
    var sql = $sql.chartType.list;
    var params = req.body;
    console.log(params);
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

module.exports = router;