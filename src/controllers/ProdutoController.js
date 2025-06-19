import { ProdutoModel } from "@models/ProdutoModel.js"
import { CarrinhoModel } from "@models/CarrinhoModel.js";
import { CarrinhoView } from "@views/CarrinhoView.js";

export class ProdutoController {
    constructor(produtoView) {
        this.view = produtoView;
        this.view.controller = this;
        this.carrinho = new CarrinhoModel();
        this.catalogo = ProdutoModel.listar();
        this.carrinhoView = new CarrinhoView(this.carrinho, this.catalogo);
    }

    inicializar() {
        this.view.renderizarCatalogo(this.catalogo);
        this.view.configurarBotoesFiltro();
        this.atualizarCarrinhoView();
    }

    adicionarAoCarrinho(idProduto) {
        this.carrinho.adicionar(idProduto);
        this.atualizarCarrinhoView();
    }

    atualizarCarrinhoView() {
        this.carrinhoView.renderizarTodos({
            remover: (id) => {
                this.carrinho.remover(id);
                this.atualizarCarrinhoView();
            },
            incrementar: (id) => {
                this.carrinho.incrementar(id);
                this.atualizarCarrinhoView();
            },
            decrementar: (id) => {
                this.carrinho.decrementar(id);
                this.atualizarCarrinhoView();
            }
        });
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


