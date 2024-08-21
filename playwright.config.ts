import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use:{
    headless: false,
  },
  testMatch: ["login.test.ts"]
});
