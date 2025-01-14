<h1 align="center">
    Top Magazine
</h1>

**Top Magazine** é um e-commerce desenvolvido com HTML, CSS, JavaScript, Vite e Tailwind CSS. O projeto permite a navegação por categorias de produtos, adição ao carrinho de compras, finalização da compra e visualização de pedidos anteriores. A solução é modular, com diferentes arquivos para funcionalidades específicas como carrinhos de compras, catálogo de produtos, filtros, entre outros.   

## Tecnologias   

- **HTML5**: Estruturação e organização das páginas.
- **CSS3**: Estilização do site, com o uso de Tailwind CSS para facilitar a criação de layouts responsivos.
- **JavaScript**: Funcionalidades dinâmicas como interação com o carrinho de compras, filtros de produtos e armazenamento local.
- **Vite**: Ferramenta de build moderna para otimizar o desenvolvimento e a construção da aplicação.
- **Tailwind CSS**: Framework CSS para estilização rápida e customizável.   

## Estrutura de Diretórios   

O projeto segue a seguinte estrutura de diretórios:   

```   
Top Magazine
│
├── assets/                 # Pasta contendo imagens e recursos estáticos
│   └── img/                # Imagens do site
├── public/                 # Arquivos públicos para produção
│
├── src/                    # Arquivos de código-fonte
│   ├── menuCarrinho.js     # Lógica do carrinho de compras
│   ├── cartaoProduto.js    # Lógica para exibição de produtos no catálogo
│   └── filtrosCatalogo.js  # Lógica para filtros de categorias de produtos
│
├── checkout.html           # Página de checkout de compras
├── pedidos.html            # Página de visualização de pedidos anteriores
├── index.html              # Página inicial com catálogo de produtos
├── main.js                 # Arquivo principal de interação com o catálogo e carrinho
├── pedidos.js              # Lógica para renderizar pedidos anteriores
├── style.css               # Estilos globais do site
├── tailwind.config.js      # Configuração do Tailwind CSS
├── vite.config.js          # Configuração do Vite para build e otimizações
└── package.json            # Dependências e scripts do projeto
   
```   

## Funcionalidades   

- **Carrinho de Compras:**

   - O usuário pode adicionar produtos ao carrinho, visualizar os itens adicionados e o valor total da compra.
   - O carrinho é mantido no **localStorage** para persistir entre as sessões.   

- **Catálogo de Produtos:**

   - Exibição de produtos por categorias como **Notebooks** e **Acessórios.**
   - Filtros para exibir todos os produtos ou apenas as categorias selecionadas.   

- **Finalização de Compra:**

   - O usuário pode finalizar a compra e os dados são salvos no **localStorage**, com os pedidos registrados.
   - Após a compra, o carrinho é esvaziado e o histórico de pedidos é atualizado.   

- **Histórico de Pedidos:**

   - O usuário pode visualizar o histórico de pedidos feitos, com detalhes sobre os produtos comprados e a data do pedido.   

## Instalação   

Para rodar o projeto localmente, siga os passos abaixo:   

1. Clone o repositório:   

```   
git clone https://github.com/Gilvan-R-A/top-magazine-website
cd 'Top Magazine'/
```   

2. Instale as dependências:   

```   
npm install
```

3. Inicie o servidor de desenvolvimento:   

```   
npm run dev
```   

4. Acesse o projeto no navegador:   

- O site estará disponível em **http://localhost:5173**.   

## Scripts   

- **npm run dev**: Inicia o servidor de desenvolvimento com hot-reloading.
- **npm run build**: Gera os arquivos otimizados para produção.
- **npm run preview**: Visualiza a versão otimizada em produção localmente.   


## Personalização   

- O projeto usa o **Tailwind CSS**, então você pode modificar os estilos facilmente editando o arquivo **style.css** ou adicionando novas classes no código HTML.
- Para configurar o Vite para uma nova base ou personalizar ainda mais o processo de build, edite o arquivo **vite.config.js**.   

## Contribuição   

Se você deseja contribuir para o projeto, fique à vontade para criar **issues** ou **pull requests**. Qualquer melhoria ou sugestão será bem-vinda!

