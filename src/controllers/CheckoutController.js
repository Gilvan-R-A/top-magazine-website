import { CheckoutModel } from "@models/CheckoutModel.js";
import { CheckoutView } from "@views/CheckoutView.js";

export class CheckoutController {
    static inicializar() {
        CheckoutView.renderizarProdutos();
        CheckoutView.renderizarTotal();
    }
}

