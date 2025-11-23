import report from 'cucumber-html-reporter';

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chromium",
        "Platform": process.platform,
    }
}

report.generate(options);