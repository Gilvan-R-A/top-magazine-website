import { desenharProdutoNoCarrinhoSimples } from "../utils/utilidades.js";

export class PedidoView {
    constructor(containerPrincipal) {
        this.container = document.querySelectorAll(containerPrincipal);
    }

    desenharPedido(pedidoComData) {
        const data = new Date(pedidoComData.dataPedido).toLocaleString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

        const idContainerPedido = `container-pedidos-${pedidoComData.dataPedido}`;
        const elementoPedido = `
        <p class="text-xl text-bold my-4">${data}</p>
        <section id="${idContainerPedido}" class="bg-slate-300 p-3 rounded-md"></section>`;
        
        this.container.innerHTML += elementoPedido;

        for(const idProduto in pedidoComData.pedido) {
            desenharProdutoNoCarrinhoSimples(
                idProduto,
                idContainerPedido,
                pedidoComData.pedido[idProduto]
            );
        }
    }
}


