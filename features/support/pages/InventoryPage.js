export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title';
    }
    //Precisa configurar para retornar um erro porque está fora do teste em si
    async verifyPageInventory(url, titulo_secao){
        //await expect(this.page).toHaveURL(url); //verifica se a URL está correta - se quebrar aqui ele não dá o erro correto para sabermos, por isso precisamos de outra abordagem
        //const urlEsperada = `/${url}\.html/`
        //await this.page.waitForURL(urlEsperada);
        //const urlAtual = await this.page.url();

        await this.page.waitForSelector(this.title);
        const titleSection = await this.page.textContent(this.title);

        if(!titleSection.includes(titulo_secao)){ //|| !urlAtual.includes(urlEsperada)){
            throw new Error('Login falhou: não é a página de inventário');
        }
    }
}