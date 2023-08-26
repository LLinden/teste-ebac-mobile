class detalheProdutoScreen {

    get adicionaCarrinho() {
        return $(`~Adicionar ao carrinho`)
    }

    get tamanho() {
        return $(`~Size Selecione uma Size`)
    }

    get selecionaTamanho() {
        return $(`~S`)
    }

    get cor() {
        return $(`~Color Selecione uma Color`)
    }

    get selecionaCor() {
        return $(`~Red`)
    }

    async clicaSelecionaCor() {
        await this.selecionaCor.click()
    }

    async clicaCor() {
        await this.cor.click()
    }

    async clicaSelecionaTamanho() {
        await this.selecionaTamanho.click()
    }

    async clicaTamanho() {
        await this.tamanho.click()
    }

    async clicaBotaoAdicionaCarrinho() {
        await this.adicionaCarrinho.click()
    }
}
module.exports = new detalheProdutoScreen();