const common = `
    --require setup/hooks.js
    --require steps/*.steps.js
    --format json:test-results/cucumber_report.json
    --format html:test-results/cucumber-report.html
    --format @cucumber/pretty-formatter
`
module.exports = {
    default: `${common} features/**/*.feature`,
}