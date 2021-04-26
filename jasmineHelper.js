const JasmineAllureReporter = require("allure-jasmine").JasmineAllureReporter
const reporter = new JasmineAllureReporter({
  resultsDir: "./src/testResults/jasmine/dir"
});

jasmine.getEnv().addReporter(reporter);
const allure = reporter.getInterface();

// allure.writeEnvironmentInfo({
//  its: "a",
//  test: "!"
// });

module.exports.allure = allure