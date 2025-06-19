import { lerLocalStorage } from "@utils/StorageUtil.js";

export class PedidoModel {
    static obterHistorico() {
        return lerLocalStorage("historico") ?? [];
    }
}


