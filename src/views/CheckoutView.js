import { CheckoutModel } from "@models/CheckoutModel.js";
import { ProdutoModel } from "@models/ProdutoModel.js";
import { CarrinhoView } from "./CarrinhoView.js";

export class CheckoutView {
    static renderizarProdutos() {
        const carrinho = CheckoutModel.obterCarrinho();
        const catalogo = ProdutoModel.listar();
        const carrinhoView = new CarrinhoView();

        for(const idProduto in carrinho) {
            const produto = catalogo.find(p => p.id === idProduto);
            if(produto) {
                carrinhoView.desenharProduto(produto, "container-produtos-checkout", carrinho[idProduto]);
            }
        }
    }

    static renderizarTotal() {
        const carrinho = CheckoutModel.obterCarrinho();
        const total = CheckoutModel.calcularTotal(carrinho);
        document.getElementById("preco-total").innerText = `Total: $ ${total}`;
    }
}


