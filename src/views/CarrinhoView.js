export class CarrinhoView {
    constructor(carrinhoModel, catalogo, containerId = "produtos-carrinho") {
        this.model = carrinhoModel;
        this.catalogo = catalogo;
        this.container = document.getElementById(containerId);
        this.precoTotal = document.getElementById("preco-total");
    }

    atualizarPreco() {
        let total = 0;
        for(const id in this.model.obterItens()) {
            const produto = this.catalogo.find((p) => p.id === id);
            total += produto.preco * this.model.obterItens()[id];
        }
        this.precoTotal.innerText = `Total: $ ${total}`;
    }

    atualizarQuantidade(id) {
        document.getElementById(`quantidade-${id}`).innerText = this.model.obterItens()[id];
    }

    limparCarrinhoUI() {
        this.container.innerHTML = "";
    }

    desenharProduto(produto, eventos) {
        const artigo = document.createElement("article");
        artigo.classList.add("w-full","flex", "bg-slate-100", "rounded-lg", "p-1", "relative", "mb-2");

        artigo.innerHTML = `
        <button type="button" id="remover-item-${produto.id}" class="absolute top-0 right-2">
            <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
        </button>
        <img src="../../public/assets/img/${produto.imagem}" alt="${produto.nome}" class="h-24 rounded-lg"/>
        <div class="p-2" flex flex-col justify-between>
            <p class="text-slate-900 text-sm">${produto.nome}</p>
            <p class="text-slate-400 text-xs">${produto.marca}</p>
            <p class="text-green-700 text-lg">${produto.preco}</p>
        </div>
        <div class="flex text-slate-950 itens-end absolute bottom-0 right-2 text-lg">
            <button type="button" id="decrementar-produto-${produto.id}">-</button>
            <p id="quantidade-${produto.id}" class="ml-2">${this.model.obterItens()[produto.id]}</p>
            <button type="button" id="incrementar-produto-${produto.id}" class="ml-2">+</button>    
        </div>`

        this.container.appendChild(artigo);

        document.getElementById(`remover-item-${produto.id}`).addEventListener("click", () => eventos.remover(produto.id));
        document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", () => eventos.incrementar(produto.id));
        document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", () => eventos.decrementar(produto.id));
    }

    renderizarTodos(eventos) {
        this.limparCarrinhoUI();
        for(const id in this.model.obterItens()) {
            const produto = this.catalogo.find((p) => p.id === id);
            this.desenharProduto(produto, eventos);
        }
        this.atualizarPreco();
    }
}
