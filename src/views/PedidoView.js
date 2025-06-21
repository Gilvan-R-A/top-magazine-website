import { ProdutoModel } from "@models/ProdutoModel.js";
import { CarrinhoView } from "./CarrinhoView.js";

export class PedidoView {
    constructor(containerPrincipal) {
        this.container = document.querySelector(containerPrincipal);
    }

    desenharPedido(pedidoComData) {

        const catalogo = ProdutoModel.listar();
        const carrinhoView = new CarrinhoView();

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
        <section id="${idContainerPedido}" class="bg-slate-300 p-3 rounded-md w-full max-w-xl flex flex-col gap-2"></section>`;
        
        this.container.insertAdjacentHTML("beforeend", elementoPedido);

        for(const idProduto in pedidoComData.pedido) {
            const produto = catalogo.find(p => p.id === idProduto);
            if(produto) {
                carrinhoView.desenharProduto(produto, idContainerPedido, pedidoComData.pedido[idProduto]);
            }
        }
    }
}


