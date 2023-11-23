# playwright-cucumber-js-BDD

This framwork uses BDD feature using cucumber-js and generate reports using multiple-cucumber-html reporter

# Scenarios
    restaurants.feature has two scenarios 
        - Pass scenario 1 => search for the restaurants voucher and if voucher present clicks the first one
        - Fail scenario 2 => Looks for Shopping sub category under Categories tab which is not found and fails the scenario

# Install
    npm install

# Run in command line
     - Chrome => npm run test:chrome
     - Firefox => npm run test:firefox
     - Safari => npm run test:webkit

# Reporting and Error Logs
    Html report is available in the path tests-results/cucumber-report.html. It contains the error log and screenshot attached for failed scenarios.