'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1527153844432_6087';

  // add your config here
  config.middleware = [];

  return config;
};
