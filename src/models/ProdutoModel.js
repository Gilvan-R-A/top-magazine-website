export class ProdutoModel {
    static listar() {
        return [
             {
    id: "1",
    marca: "Sansung",
    nome: "Tablet Galaxy Tab S9",
    preco: 6999,
    imagem: "Galaxy_Tab_S9.jpeg",
    acessorio: false
  },
  {
    id: "2",
    marca: "Apple",
    nome: "Mouse MacMouse",
    preco: 500,
    imagem: "mouse.jpg",
    acessorio: true
  },
  {
    id: "3",
    marca: "Accer",
    nome: "Notebook Gamer 3000M",
    preco: 4600,
    imagem: "notebookAccer.jpg",
    acessorio: false
  },
  {
    id: "4",
    marca: "Sansung",
    nome: "Smartphone Galaxy S23 Ultra 5G",
    preco: 199,
    imagem: "Galaxy_S23.jpeg",
    acessorio: true
  },
  {
    id: "5",
    marca: "Apple",
    nome: "Notebook MacBook Air",
    preco: 10700,
    imagem: "laptop.jpg",
    acessorio: false
  },
  {
    id: "6",
    marca: "Apple",
    nome: "iPad Z800",
    preco: 3500,
    imagem: "iPad.jpg",
    acessorio: true
  },
  {
    id: "7",
    marca: "Sansung",
    nome: "Smartphone Galaxy Z Flip5 5G",
    preco: 6579,
    imagem: "Galaxy_Z_Flip5.jpeg",
    acessorio: true
  },
  {
    id: "8",
    marca: "Abam",
    nome: "Adaptador M1 para MacBook",
    preco: 237,
    imagem: "Adaptador-M1.jpg",
    acessorio: true
  },
  {
    id: "9",
    marca: "Geonav",
    nome: "Cabo Adaptador USB-C para USB 3.0",
    preco: 590,
    imagem: "Cabo_Adaptador-USB.jpg",
    acessorio: true
  },
  {
    id: "10",
    marca: "Compaq",
    nome: "Notebook Compaq 7000S",
    preco: 2300,
    imagem: "notebookCompaq.jpg",
    acessorio: false
  }, 
  {
    id: "11",
    marca: "Cânon",
    nome: "Camêra Cânon 500",
    preco: 890,
    imagem: "canon.jpg",
    acessorio: true
  },
  {
    id: "12",
    marca: "Sansung",
    nome: "Galaxy Watch 6 Classic LTE",
    preco: 3549,
    imagem: "Galaxy_Watch6_BT.jpeg",
    acessorio: true
  },
  {
    id: "13",
    marca: "Sansung",
    nome: "Galaxy Watch 5",
    preco: 2499,
    imagem: "galaxy_watch5.jpeg",
    acessorio: true
  },
  {
    id: "14",
    marca: "Sansung",
    nome: "Notebook sansung plus",
    preco: 3000,
    imagem: "notebookSansung.jpg",
    acessorio: false
  },
  {
    id: "15",
    marca: "Dell",
    nome: "Notebook gamer D40",
    preco: 5650,
    imagem: "notebookGamer.jpg",
    acessorio: false
  },
        ]
    }

    static buscarPorId(id) {
        return this.listar().find(p => p.id === id);
    }
}


