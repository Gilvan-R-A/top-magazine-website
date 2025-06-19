import { CarrinhoController } from "@controllers/CarrinhoController.js";
import { ProdutoController } from "@controllers/ProdutoController.js"
import { ProdutoView } from "@views/ProdutoView.js"

const carrinho = new CarrinhoController();
carrinho.inicializar();

const produtoView = new ProdutoView();
const produtoController = new ProdutoController(produtoView);
produtoController.inicializar();