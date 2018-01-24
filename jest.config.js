module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
  moduleDirectories: [
    "node_modules",
    "src",
    "test"
  ],

  // coverage settings
  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "<rootDir>/coverage",

  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupTestFrameworkScriptFile: "<rootDir>/test/setup.js",
  moduleFileExtensions: ["js", "json", "es6"]
}
