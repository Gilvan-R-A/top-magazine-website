import { CarrinhoController } from "../controllers/CarrinhoController.js";

const carrinho = new CarrinhoController();
carrinho.inicializar();

document.querySelectorAll(".botao-comprar").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        carrinho.adicionar(id);
    });
});