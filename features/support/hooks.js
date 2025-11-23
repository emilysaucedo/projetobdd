import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser, context, page;

BeforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext() 
    page = await context.newPage()
    global.page = page; //variável global para a página
});

AfterAll(async () => {
    await browser.close();
    //process.exit(0);
});