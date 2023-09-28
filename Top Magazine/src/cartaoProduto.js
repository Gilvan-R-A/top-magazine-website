import { catalogo } from "./utilidades";

export function renderizarCatalago() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-48 m-2" id="card-produto-${produtoCatalogo.id}">
      <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto 1 do Top Magazine" style="height: 300px;">
            <p>${produtoCatalogo.marca}</p>
            <p>${produtoCatalogo.nome}</p>
            <p>${produtoCatalogo.preco}</p>
            <button>Adicionar</button>
      
      </div>`;
        document.getElementById("container-produto").innerHTML += cartaoProduto;
      }
}

