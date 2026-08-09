'use strict';

const config = require('./config');

/**
 * Returns a greeting message for the Atru Path Publishing platform.
 * @returns {string}
 */
function getWelcomeMessage() {
  return `${config.APP_NAME} is running in ${config.NODE_ENV} mode on port ${config.PORT}.`;
}

module.exports = { getWelcomeMessage };

if (require.main === module) {
  console.log(getWelcomeMessage());
}
