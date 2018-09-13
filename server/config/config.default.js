'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536561540881_4752';

  // add your config here
  config.middleware = [];

  config.mysql = {
      client: {
          host: '10.16.208.42',
          port: 3306,
          user: 'root',
          password: 'root',
          database: 'wzb_skin'
      },
      app: true,      // 是否加载到app上
      agent: false    // 是否加载到agent上
  }


  return config;
};

