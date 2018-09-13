/*router文件夹下home.js文件*/
module.exports = app => {
    'use strict';
    const {
        homeController //名字必须和controller下的js文件一致
    } = app.controller; //获取controller下home.js
    let root = '/api/home'
    app.get(root, homeController.index);
    app.get(root + '/getOptionsList', homeController.getOptionsList);
}