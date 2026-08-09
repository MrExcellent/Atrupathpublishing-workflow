'use strict';

const config = require('../src/config');

describe('config', () => {
  it('exports appName', () => {
    expect(typeof config.appName).toBe('string');
    expect(config.appName.length).toBeGreaterThan(0);
  });

  it('exports nodeEnv', () => {
    expect(typeof config.nodeEnv).toBe('string');
  });

  it('exports logLevel', () => {
    expect(typeof config.logLevel).toBe('string');
  });
});
