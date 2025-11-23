import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import LoginPage from '../pages/LoginPage.js'; //classe geralmente começa com letra maiúscula
import InventoryPage from '../pages/InventoryPage.js';

let browser, context, page; //variáveis para o playwright
let loginPage, inventoryPage; //variáveis para as páginas

    Given('que estou na pagina de login', async () => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page); //instanciar o objeto loginPage a partir da classe LoginPage
        
        inventoryPage = new InventoryPage(page); //instanciar o objeto inventoryPage a partir da classe InventoryPage
        await page.goto('https://www.saucedemo.com');
    });

    When('preencho o {string} e a {string}', async (usuario, senha) => { //o texto tem que estar exatamente como está no feature
        await loginPage.login(usuario, senha);
    });

    When('clico em Login', async () => {
        await loginPage.clicaLogin();
    });

    Then('vou para a pagina {string} e vejo {string}', async (url, titulo_secao) => {
        await inventoryPage.verifyPageInventory(url, titulo_secao);
        await page.waitForTimeout(2000); //alfinete
        await browser.close();
    });