const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testRegex: '.fn.test.ts$',
  verbose: true,
};
