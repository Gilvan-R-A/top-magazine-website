const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));
    for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function esconderNotebooks() {
    exibirTodos();
    const notebooks = Array.from(catalogoProdutos.getElementsByClassName("notebook"));
    for (const produto of notebooks) {
        produto.classList.add("hidden");
    }
}

function esconderAcessorios() {
    exibirTodos();
    const acessorios = Array.from(catalogoProdutos.getElementsByClassName("acessorio"));
    for (const produto of acessorios) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-acessorios").addEventListener('click', esconderNotebooks);
    document.getElementById("exibir-notebooks").addEventListener('click', esconderAcessorios);
    document.getElementById("exibir-todos").addEventListener('click', exibirTodos);
}