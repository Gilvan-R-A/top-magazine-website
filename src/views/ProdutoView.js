export class ProdutoView {
    constructor(controller, containerId = "container-produto") {
        this.controller = controller;
        this.container = document.getElementById(containerId);
    }

    exibirTodos() {
        const produtos = this.container.querySelectorAll(".hidden");
        produtos.forEach(p => p.classList.remove("hidden"));
    }

    esconderApenas(classeParaEsconder) {
        this.exibirTodos();
        const produtos = this.container.querySelectorAll(`.${classeParaEsconder}`);
        produtos.forEach(p => p.classList.add("hidden"));
    }

    configurarBotoesFiltro() {
        document.getElementById("exibir-todos").addEventListener("click", () => this.controller.filtrar("todos"));
        document.getElementById("exibir-notebooks").addEventListener("click", () => this.controller.filtrar("notebooks"));
        document.getElementById("exibir-acessorios").addEventListener("click", () => this.controller.filtrar("acessorios"));
    }

    renderizarCatalogo(produtos) {
        this.container.innerHTML = "";

        produtos.forEach(produto => {
            const cartao = document.createElement("div");
            cartao.className = 
                `border-solid w-48 m-2 flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produto.acessorio ? "acessorio" : "notebook"}`;
            cartao.id = `card-produto-${produto.id}`;

            cartao.innerHTML = `
                <img src="../../public/assets/img/${produto.imagem}" alt="${produto.nome}" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
                <p class="text-sm">${produto.marca}</p>
                <p class="text-sm">${produto.nome}</p>
                <p class="text-sm">${produto.preco}</p>
                <button id="adicionar-${produto.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>`;

                this.container.appendChild(cartao);

                document
                    .getElementById(`adicionar-${produto.id}`)
                    .addEventListener("click", () => this.controller.adicionarAoCarrinho(produto.id));            
        });
    }   
}


