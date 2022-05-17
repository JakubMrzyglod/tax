module.exports = {
  testEnvironment: "node",
  verbose: false,
  testRegex: ".rules.test.ts$",
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  roots: ["<rootDir>"],
};
