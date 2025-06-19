import { salvarLocalStorage, lerLocalStorage } from "@utils/StorageUtil.js"

export class CarrinhoModel {
    constructor() {
        this.itens = lerLocalStorage("carrinho") ?? {};
    }

    salvar() {
        salvarLocalStorage("carrinho", this.itens);
    }

    adicionar(id)  {
        if (this.itens[id]) {
            this.itens[id]++;
        } else {
            this.itens[id] = 1;
        }
        this.salvar();
    }

    remover(id) {
        delete this.itens[id];
        this.salvar();
    }

    incrementar(id) {
        this.itens[id]++;
        this.salvar();
    }

    decrementar(id) {
        if (this.itens[id] === 1) {
            this.remover(id);
        } else {
            this.itens[id]--;
            this.salvar();
        }
    }

    obterItens() {
        return this.itens;
    }

    limpar() {
        this.itens = {};
        this.salvar();
    }
}
