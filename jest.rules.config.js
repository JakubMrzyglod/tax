const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  testRegex: '.rules.test.ts$',
};
