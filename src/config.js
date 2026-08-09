'use strict';

require('dotenv').config();

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'Atru Path Publishing Workflow',
  logLevel: process.env.LOG_LEVEL || 'info',
};

module.exports = config;
