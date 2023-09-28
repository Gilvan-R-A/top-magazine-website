function abrirCarrinho() {
    document.getElementById("carrinho").classList.add('right-[0px]');
    document.getElementById("carrinho").classList.remove('right-[-360px]');
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove('right-[0px]');
    document.getElementById("carrinho").classList.add('right-[-360px]');
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function adicionarAoCarrinho() {
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img src="./assets/img/Galaxy_S23.jpeg" alt="Galaxy S21" class="h-24 rounded-lg">
    <div>
      <p class="text-slate-900 text-sm">Smartphone Galaxy S23</p>
      <p class="text-slate-400 text-xs">Sansung</p>
      <p class="text-green-700 text-lg">$199</p>
    </div>     
  </article>`
    
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}

