'use strict';

const config = require('./config');

function main() {
  console.log(`${config.appName} started in ${config.nodeEnv} mode`);
}

main();
