// eslint-disable @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');
const baseConfig = require('../jest.config');

module.exports = {
  ...baseConfig,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
