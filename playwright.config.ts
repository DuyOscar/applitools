import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 1500000,
  testMatch: ["tests/recorder.login.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on"
  },
  reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsonREport.json"
  }],["html",{
    open: "never"
  }]]
};

export default config;
