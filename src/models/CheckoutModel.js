import { 
    lerLocalStorage, 
    salvarLocalStorage, 
    apagarDoLocalStorage, 
    catalogo,

} from "../utils/utilidades.js"

export class CheckoutModel {
    static obterCarrinho() {
        return lerLocalStorage("carrinho") ?? {};
    }

    static calcularTotal(carrinho) {
        let total = 0;
        for(const idProduto in carrinho) {
            const produto = catalogo.find((p) => p.id === idProduto);
            total += produto.preco * carrinho[idProduto];
        }
        return total;
    }

    static finalizarPedido() {
        const carrinho = this.obterCarrinho();
        if(Object.keys(carrinho).length === 0) return false;

        const pedidoFeito = {
            dataPedido: new Date(),
            pedido: carrinho,
        };

        const historico = lerLocalStorage("historico") ?? [];
        salvarLocalStorage("historico", [pedidoFeito, ...historico]);
        apagarDoLocalStorage("carrinho");
        return true;
    }
}


