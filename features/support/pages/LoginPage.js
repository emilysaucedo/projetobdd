export default class LoginPage {
    constructor(page) { //mapeamento dos elementos da pagina de login
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginButton = '[data-test="login-button"]'
        this.url = 'https://www.saucedemo.com';
    };

    //funções que interagem com os elementos da pagina de login
    async login(username, password) {   
        await this.page.fill(this.username, username);
        await this.page.fill(this.password, password);
        //await this.page.click(this.loginButton);
    };

    async clicaLogin() {
        await this.page.click(this.loginButton);
    };

}