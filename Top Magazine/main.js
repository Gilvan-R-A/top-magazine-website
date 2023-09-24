const catalogo = [
  {
    id: 1,
    marca: "Laut",
    nome: "Capa para iPhone 7",
    preco: 59,
    imagem: "Capa_Iphone7.jpg",
    feminino: false,
  },
  {
    id: 2,
    marca: "Sansung",
    nome: "Smartphone Galaxy S23 Ultra 5G",
    preco: 199,
    imagem: "Galaxy_S23.jpeg",
    feminino: false,
  },
  {
    id: 3,
    marca: "Sansung",
    nome: "Galaxy Watch 5",
    preco: 2499,
    imagem: "galaxy_watch5.jpeg",
    feminino: false,
  },
  {
    id: 4,
    marca: "Sansung",
    nome: "Galaxy Watch 6 Classic LTE",
    preco: 3549,
    imagem: "Galaxy_Watch6_BT.jpeg",
    feminino: false,
  },
  {
    id: 5,
    marca: "JBL",
    nome: "Caixa de Som Portátil JBL Party Box",
    preco: 1999,
    imagem: "Caixa_Som_PartyBox.jpeg",
    feminino: false,
  },
  {
    id: 6,
    marca: "Sansung",
    nome: "Tablet Galaxy Tab S9",
    preco: 6999,
    imagem: "Galaxy_Tab_S9.jpeg",
    feminino: false,
  },
  {
    id: 7,
    marca: "Sansung",
    nome: "Smartphone Galaxy Z Flip5 5G",
    preco: 6502,
    imagem: "Galaxy_Z_Flip5.jpeg",
    feminino: false,
  },
  {
    id: 8,
    marca: "Top",
    nome: "Leitor de Cartões com Chip e Senha",
    preco: 58.8,
    imagem: "Leitor-Cartoes_Top.jpg",
    feminino: false,
  },
  {
    id: 9,
    marca: "Zara",
    nome: "Adaptador M1 para MacBook",
    preco: 237.29,
    imagem: "Adaptador-M1.jpg",
    feminino: false,
  },
  {
    id: 10,
    marca: "JBL",
    nome: "Cabo Adaptador USB-C para USB 3.0",
    preco: 590.46,
    imagem: "Cabo_Adaptador-USB.jpg",
    feminino: false,
  },
  {
    id: 11,
    marca: "Accer",
    nome: "Carregador para Notebook 65W",
    preco: 382.72,
    imagem: "Carregador-65W.jpg",
    feminino: false,
  },
  {
    id: 12,
    marca: "Electrolux",
    nome: "Panela de Pressão Elétrica",
    preco: 609.9,
    imagem: "Panela-Eletrica-Eletrolux.jpeg",
    feminino: false,
  },
];

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
