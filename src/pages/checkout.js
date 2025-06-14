import {
  apagarDoLocalStorage,
  desenharProdutoNoCarrinhoSimples,
  lerLocalStorage,
  salvarLocalStorage,
  catalogo,
} from "./src/utilidades.js";

export function calcularPrecoCarrinho(carrinho, catalogo) {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;

  for (const idProduto in carrinho) {
    const produto = catalogo.find((p) => p.id === idProduto);
    precoTotalCarrinho += produto.preco * carrinho[idProduto];
  }

  precoCarrinho.innerText = `Total: $ ${precoTotalCarrinho}`;
}

function desenharProdutosCheckout() {
  const carrinho = lerLocalStorage("carrinho") ?? {};
  for (const idProduto in carrinho) {
    desenharProdutoNoCarrinhoSimples(
      idProduto,
      "container-produtos-checkout",
      carrinho[idProduto]
    );
  }
  calcularPrecoCarrinho(carrinho, catalogo);
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
  window.location.href = "./pedidos.html";  
}

desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));
