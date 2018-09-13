// 'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

'use strict';
const RouteHome = require('./router/homeRouter');

module.exports = app => {
  const { router, controller } = app;
  RouteHome(app);
};