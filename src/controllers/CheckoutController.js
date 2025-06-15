import { CheckoutModel } from "../models/CheckoutModel.js";
import { CheckoutView } from "../views/CheckoutView.js";

export class CheckoutController {
    static inicializar() {
        CheckoutView.renderizarProdutos();
        CheckoutView.renderizarTotal();

        document.addEventListener("submit", (evento) => {
            evento.preventDefault();
            const sucesso = CheckoutModel.finalizarPedido();
            if(sucesso) {
                window.location.href = "./pedidos.html"
            }
        });
    }
}

