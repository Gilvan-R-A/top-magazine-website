import { CarrinhoModel } from "@models/CarrinhoModel.js";
import { CarrinhoView } from "@views/CarrinhoView.js";
import { ProdutoModel } from "@models/ProdutoModel.js"


export class CarrinhoController {
    constructor() {
        this.model = new CarrinhoModel();
        this.view = new CarrinhoView(this.model, ProdutoModel.listar());
    }

    inicializar() {
        this.view.renderizarTodos(this);
        this.ativarBotaoFinalizarCompra();

        document.getElementById("abrir-carrinho").addEventListener("click", () => {
            document.getElementById("carrinho").classList.replace("right-[-360px]", "right-[0px]");          
        });

        document.getElementById("fechar-carrinho").addEventListener("click", () => {
            document.getElementById("carrinho").classList.replace("right-[0px]", "right-[-360px]");        
        });
    }

    adicionar(id) {
        this.model.adicionar(id);
        const produto = ProdutoModel.listar().find((p) => p.id === id);
        this.view.desenharProduto(produto, this);
        this.view.atualizarPreco();
        this.ativarBotaoFinalizarCompra();
    }
     remover(id) {
        this.model.remover(id);
        this.view.renderizarTodos(this);
        this.ativarBotaoFinalizarCompra();
     }

     incrementar(id) {
        this.model.incrementar(id);
        this.view.atualizarQuantidade(id);
        this.view.atualizarPreco();
     }

     decrementar(id) {
        this.model.decrementar(id);
        this.view.renderizarTodos(this);
        this.ativarBotaoFinalizarCompra();
     }

     ativarBotaoFinalizarCompra() {
        const btn = document.getElementById("finalizar-compra");
        if(btn) {
            btn.onclick = () => {

                const itensAtualizados = new CarrinhoModel().obterItens();

                if (Object.keys(itensAtualizados).length > 0) {
                    window.location.href = "/top-magazine-website/checkout.html";
                } else {
                    alert("Seu carrinho está vazio!");
                }
            };
        }
     }

}

