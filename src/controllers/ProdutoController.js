import { catalogo } from "../models/ProdutoModel.js"

export class ProdutoController {
    constructor(produtoView) {
        this.view = produtoView;
        this.view.controller = this;
    }

    incializar() {
        this.view.renderizarCatalogo(catalogo);
        this.view.configurarBotoesFiltro();
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


