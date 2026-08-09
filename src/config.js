'use strict';

require('dotenv').config();

const REQUIRED_VARS = ['NODE_ENV', 'PORT', 'APP_NAME'];

/**
 * Validates that all required environment variables are present.
 * Throws an error listing any missing variables.
 */
function validateEnv() {
  const missing = REQUIRED_VARS.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}

validateEnv();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT, 10),
  APP_NAME: process.env.APP_NAME,
};
