/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  roots: [
    "<rootDir>"
  ],

  testMatch: [
    "<rootDir>/src/tests/restApi/reqRes/*.js"
  ],
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      pageTitle: "Test Report",
      outputPath: "./src/testResults/test-report.html"
    }]
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
};