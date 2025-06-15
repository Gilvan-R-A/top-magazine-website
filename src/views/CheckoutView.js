import { desenharProdutoNoCarrinhoSimples, catalogo } from "../utils/utilidades.js";
import { CheckoutModel } from "../models/CheckoutModel.js";

export class CheckoutView {
    static renderizarProdutos() {
        const carrinho = CheckoutModel.obterCarrinho();
        for(const idProduto in carrinho) {
            desenharProdutoNoCarrinhoSimples(
                idProduto, 
                "container-produtos-checkout", 
                carrinho[idProduto]
            );
        }
    }

    static renderizarTotal() {
        const carrinho = CheckoutModel.obterCarrinho();
        const total = CheckoutModel.calcularTotal(carrinho);
        document.getElementById("preco-total").innerText = `Total: $ ${total}`;
    }
}


