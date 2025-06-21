import { lerLocalStorage } from "@utils/StorageUtil";
import { PedidoView } from "../views/PedidoView.js";

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico") ?? [];
  const view = new PedidoView("main");

  historico.forEach(pedido => view.desenharPedido(pedido));
}

renderizarHistoricoPedidos();


