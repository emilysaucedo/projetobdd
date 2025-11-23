import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './features', //diretorio das features, onde estão os testes
    timeout: 30000, //tempo de timeout para os testes
    retries: 1, //quantidade de tentativas para os testes
    use: {
        baseUrl: 'https://www.saucedemo.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});