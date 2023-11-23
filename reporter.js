const reporter = require('multiple-cucumber-html-reporter')

var os = require('os');
const options = {
  theme: 'hierarchy',
  jsonFile: 'test-results/cucumber_report.json',
  output: 'test-results/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  reportSuiteAsScenarios: true,
  screenshotsDirectory: "screenshots",
  storeScreenshots: true,
  launchReport: true,
  metadata: {
    Browser: "Chrome",
    Platform: `${os.type()} ${os.release()} ${os.platform()}`,
  },
}

reporter.generate(options)