import { lerLocalStorage } from "../utils/utilidades.js";

export class PedidoModel {
    static obterHistorico() {
        return lerLocalStorage("historico") ?? [];
    }
}


