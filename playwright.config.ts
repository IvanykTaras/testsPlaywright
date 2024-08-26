import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use:{
    headless: false,
    screenshot: "on",
    video: "off"
  },

  testMatch: ["basicinteraction.test.ts"],
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }],["html", {
    open: "never"
  }]]
});
