import { CheckoutModel } from "@models/CheckoutModel.js";
import { ProdutoModel } from "@models/ProdutoModel.js";
import { CarrinhoView } from "./CarrinhoView.js";
import { CarrinhoModel } from "@models/CarrinhoModel.js";

export class CheckoutView {
    static renderizarProdutos() {
        const carrinhoModel = new CarrinhoModel();
        const catalogo = ProdutoModel.listar();
        const carrinhoView = new CarrinhoView(carrinhoModel, catalogo, "container-produtos-checkout");

        const eventos = {
            remover: (id) => {
                carrinhoModel.remover(id);
                carrinhoView.renderizarTodos(eventos);
                CheckoutView.renderizarTotal();
            },
            incrementar: (id) => {
                carrinhoModel.incrementar(id);
                carrinhoView.renderizarTodos(eventos);
                CheckoutView.renderizarTotal();
            },
            decrementar: (id) => {
                carrinhoModel.decrementar(id);
                carrinhoView.renderizarTodos(eventos);
                CheckoutView.renderizarTotal();
            }
        }

        carrinhoView.renderizarTodos(eventos);
    }

    static renderizarTotal() {
        const carrinho = CheckoutModel.obterCarrinho();
        const total = CheckoutModel.calcularTotal(carrinho);
        document.getElementById("preco-total").innerText = `Total: $ ${total}`;
    }
}


