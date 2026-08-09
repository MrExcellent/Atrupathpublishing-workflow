'use strict';

describe('index', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env.NODE_ENV = 'test';
    process.env.PORT = '3000';
    process.env.APP_NAME = 'AtruPath';
  });

  it('getWelcomeMessage returns a string containing app name and port', () => {
    const { getWelcomeMessage } = require('../src/index');
    const message = getWelcomeMessage();

    expect(typeof message).toBe('string');
    expect(message).toContain('AtruPath');
    expect(message).toContain('3000');
    expect(message).toContain('test');
  });
});
