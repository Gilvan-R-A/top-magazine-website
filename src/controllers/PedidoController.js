import { PedidoModel } from "../models/PedidoModel.js";
import { PedidoView } from "../views/PedidoView.js";

export class PedidoController {
    constructor(view) {
        this.view = view;
    }

    inicializar() {
        const historico = PedidoModel.obterHistorico();
        for(const pedido of historico) {
            this.view.desenharPedido(pedido);
        }
    }
}



