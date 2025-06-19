import { lerLocalStorage } from "@utils/StorageUtil";
import { ProdutoModel } from "@models/ProdutoModel.js";
import { CarrinhoView } from "@views/CarrinhoView.js";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class="text-xl text-bold my-4">${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {
        hour: "2-digit",
        minute:"2-digit",
    })}</p>
    <section id='container-pedidos-${pedidoComData.dataPedido}' class="bg-slate-300 p-3 rounded-md"></section>
    `;   
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementoPedido;

  const catalogo = ProdutoModel.listar();
  const carrinhoView = new CarrinhoView();
  

  for (const idProduto in pedidoComData.pedido) {
    const produto = catalogo.find(p => p.id === idProduto);
    if(produto) {
      carrinhoView.desenharProduto(produto, idContainerPedido, pedidoComData.pedido[idProduto]);
    }
  }
}

function renderizarHistoricoPedidos() {
  const historico = lerLocalStorage("historico");
  for (const pedidoComData of historico) {
    criarPedidoHistorico(pedidoComData);
  }
}

renderizarHistoricoPedidos();
