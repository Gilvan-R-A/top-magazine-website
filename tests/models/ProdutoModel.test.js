import { describe, it, expect } from 'vitest';
import { ProdutoModel } from '../../src/models/ProdutoModel.js';

describe('ProdutoModel', () => {
    it('Deve retornar uma lista de produtos', () => {
        const produtos = ProdutoModel.listar();
        expect(Array.isArray(produtos)).toBe(true);
        expect(produtos.length).toBeGreaterThan(0);
    });

    it('Cada produto deve ter os atributos obrigatórios', () => {
        const produtos = ProdutoModel.listar();
        produtos.forEach(produto => {
            expect(produto).toHaveProperty('id');
            expect(produto).toHaveProperty('marca');
            expect(produto).toHaveProperty('nome');
            expect(produto).toHaveProperty('preco');
            expect(produto).toHaveProperty('imagem');
            expect(produto).toHaveProperty('acessorio');
        });
    });

    it('Deve buscar produto por id existente', () => {
        const produto = ProdutoModel.buscarPorId("1");
        expect(produto).toBeDefined();
        expect(produto.nome).toBe("Tablet Galaxy Tab S9");
    });

    it('Deve retornar undefined se id não existir', () => {
        const produto = ProdutoModel.buscarPorId("999");
        expect(produto).toBeUndefined();
    });
});

