'use strict';

describe('config', () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
  });

  it('exports valid config when all required variables are set', () => {
    process.env.NODE_ENV = 'test';
    process.env.PORT = '3000';
    process.env.APP_NAME = 'AtruPath';

    const config = require('../src/config');

    expect(config.NODE_ENV).toBe('test');
    expect(config.PORT).toBe(3000);
    expect(config.APP_NAME).toBe('AtruPath');
  });

  it('throws when a required variable is missing', () => {
    delete process.env.APP_NAME;
    process.env.NODE_ENV = 'test';
    process.env.PORT = '3000';

    expect(() => require('../src/config')).toThrow(
      'Missing required environment variables: APP_NAME'
    );
  });

  it('throws listing all missing variables', () => {
    delete process.env.NODE_ENV;
    delete process.env.PORT;
    delete process.env.APP_NAME;

    expect(() => require('../src/config')).toThrow(
      'Missing required environment variables:'
    );
  });
});
