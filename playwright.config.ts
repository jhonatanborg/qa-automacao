import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 1,
  use: {
    baseURL: 'https://reclameaqui-tst.obviostaging.com.br/',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
