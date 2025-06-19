import { apagarDoLocalStorage, lerLocalStorage, salvarLocalStorage } from "@utils/StorageUtil.js";
import { ProdutoModel } from "@models/ProdutoModel.js";
import { CarrinhoView } from "@views/CarrinhoView.js";

export function calcularPrecoCarrinho(carrinho) {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;

  const catalogo = ProdutoModel.listar();

  for (const idProduto in carrinho) {
    const produto = catalogo.find((p) => p.id === idProduto);
    precoTotalCarrinho += produto.preco * carrinho[idProduto];
  }

  precoCarrinho.innerText = `Total: $ ${precoTotalCarrinho}`;
}

function desenharProdutosCheckout() {
  const carrinho = lerLocalStorage("carrinho") ?? {};
  const catalogo = ProdutoModel.listar();
  const carrinhoView = new CarrinhoView();

  for (const idProduto in carrinho) {
    const produto = catalogo.find(p => p.id === idProduto);
    if(produto) {
      carrinhoView.desenharProduto(produto, "container-produtos-checkout", carrinho[idProduto]);
    }
  }
  calcularPrecoCarrinho(carrinho);
}

function finalizarCompra(evento) {
  evento.preventDefault();
  const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }

  const dataAtual = new Date();
  const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
  };

  const historicoDePedidos = lerLocalStorage("historico") ?? [];
  const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

  salvarLocalStorage("historico", historicoDePedidosAtualizados);
  apagarDoLocalStorage("carrinho");
  window.location.href = "../../pedidos.html";  
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));
