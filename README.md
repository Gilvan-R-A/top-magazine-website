<h1 align="center">
    Top Magazine
</h1>

**Top Magazine** é um e-commerce desenvolvido com **HTML**, **CSS (Tailwind CSS)**, **JavaScript**, **Vite** e **LocalStorage**. A aplicação permite a navegação por categorias de produtos, adição ao carrinho de compras, finalização da compra e visualização de pedidos anteriores. O projeto é modular, com arquivos bem organizados por responsabilidade.   

**[Acesse a versão online aqui](https://gilvan-r-a.github.io/top-magazine-website/)**

## Tecnologias Utilizadas  

- **HTML5**: Estruturação e organização das páginas.
- **CSS3** + **Tailwind CSS**: Estilização do site responsiva e baseada em utilitários.
- **JavaScript**: Funcionalidades dinâmicas, interação com o carrinho, filtros e persistência de dados.
- **Vite**: Ferramenta de build para otimizar o desenvolvimento e a construção da aplicação.
- **LocalStorage**: Armazenamento dos dados do carrinho e pedidos.   

## Estrutura de Diretórios   

O projeto segue a seguinte estrutura de diretórios:   

```   
top-magazine-website
│
├── assets/                 # Pasta contendo imagens e recursos estáticos
│   └── img/                # Imagens do site
├── public/                 # Arquivos públicos para produção
│
├── src/                    # Arquivos de código-fonte
│   ├── menuCarrinho.js     # Lógica do carrinho de compras
│   ├── cartaoProduto.js    # Lógica para exibição de produtos no catálogo
│   └── filtrosCatalogo.js  # Lógica para filtros de categorias de produtos
|   |__ utilidades.js       # Funções auxiliares
│
├── checkout.html           # Página de checkout de compras
├── pedidos.html            # Página de visualização de pedidos anteriores
├── index.html              # Página inicial com catálogo de produtos
|
├── main.js                 # Arquivo principal de interação com o catálogo e carrinho
├── pedidos.js              # Lógica para renderizar pedidos anteriores
|
├── style.css               # Estilos globais do site
├── tailwind.config.js      # Configuração do Tailwind CSS
├── vite.config.js          # Configuração do Vite para build e otimizações
|__ README.md               # Documentação do projeto
|__ package-lock.json       # Lockfile do npm
└── package.json            # Dependências e scripts do projeto
   
```   

## Funcionalidades   

- **Catálogo de Produtos:**

   - Exibição de produtos por categorias como **Notebooks** e **Acessórios.**
   - Filtros para exibir todos os produtos ou apenas as categorias selecionadas.   

- **Carrinho de Compras:**

   - O usuário pode adicionar produtos ao carrinho, visualizar os itens adicionados e o valor total da compra.
   - O carrinho é mantido no **localStorage** para persistir entre as sessões.    

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
cd top-magazine-website
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

## Scripts Disponíveis   

- **npm run dev**: Inicia o servidor de desenvolvimento com hot-reloading.
- **npm run build**: Gera os arquivos otimizados para produção.
- **npm run preview**: Visualiza a versão otimizada em produção localmente.   


## Personalização   

- O projeto usa o **Tailwind CSS**, então você pode modificar os estilos facilmente editando o arquivo **style.css** ou adicionando novas classes no código HTML.
- Para configurar o Vite para uma nova base ou personalizar ainda mais o processo de build, edite o arquivo **vite.config.js**.   

## Contribuição   

Se você deseja contribuir para o projeto, fique à vontade para criar **issues** ou **pull requests**. Qualquer melhoria ou sugestão será bem-vinda!

## Link para Produção   

https://gilvan-r-a.github.io/top-magazine-website/

