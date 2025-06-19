import { ProdutoModel } from "@models/ProdutoModel.js"
import { CarrinhoModel } from "@models/CarrinhoModel.js";

export class ProdutoController {
    constructor(produtoView) {
        this.view = produtoView;
        this.view.controller = this;
        this.carrinho = new CarrinhoModel();
    }

    inicializar() {
        const catalogo = ProdutoModel.listar();
        this.view.renderizarCatalogo(catalogo);
        this.view.configurarBotoesFiltro();
    }

    adicionarAoCarrinho(idProduto) {
        this.carrinho.adicionar(idProduto);
    }

    filtrar(tipo) {
        if(tipo === "todos") {
            this.view.exibirTodos();
        }else if(tipo === "notebooks") {
            this.view.esconderApenas("acessorio");
        }else if(tipo === "acessorios") {
            this.view.esconderApenas("notebook");
        }
    }

}


