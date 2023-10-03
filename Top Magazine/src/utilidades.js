
export const catalogo = [
  {
    id: "1",
    marca: "Sansung",
    nome: "Tablet Galaxy Tab S9",
    preco: 6999,
    imagem: "Galaxy_Tab_S9.jpeg"
  },
  {
    id: "2",
    marca: "Apple",
    nome: "mouse MacMouse",
    preco: 500,
    imagem: "mouse.jpg"
  },
  {
    id: "3",
    marca: "Accer",
    nome: "notebook Gamer 3000M",
    preco: 4600,
    imagem: "notebookAccer.jpg"
  },
  {
    id: "4",
    marca: "Sansung",
    nome: "Smartphone Galaxy S23 Ultra 5G",
    preco: 199,
    imagem: "Galaxy_S23.jpeg"
  },
  {
    id: "5",
    marca: "Apple",
    nome: "MacBook Air",
    preco: 10700,
    imagem: "laptop.jpg"
  },
  {
    id: "6",
    marca: "Apple",
    nome: "iPad",
    preco: 3500,
    imagem: "iPad.jpg"
  },
  {
    id: "7",
    marca: "Sansung",
    nome: "Smartphone Galaxy Z Flip5 5G",
    preco: 6579,
    imagem: "Galaxy_Z_Flip5.jpeg"
  },
  {
    id: "8",
    marca: "Abam",
    nome: "Adaptador M1 para MacBook",
    preco: 237,
    imagem: "Adaptador-M1.jpg"
  },
  {
    id: "9",
    marca: "Geonav",
    nome: "Cabo Adaptador USB-C para USB 3.0",
    preco: 590,
    imagem: "Cabo_Adaptador-USB.jpg"
  },
  {
    id: "10",
    marca: "Compaq",
    nome: "notebook Compaq 7000S",
    preco: 2300,
    imagem: "notebookCompaq.jpg"
  }, 
  {
    id: "11",
    marca: "Cânon",
    nome: "camêra Cânon 500",
    preco: 890,
    imagem: "canon.jpg"
  },
  {
    id: "12",
    marca: "Sansung",
    nome: "Galaxy Watch 6 Classic LTE",
    preco: 3549,
    imagem: "Galaxy_Watch6_BT.jpeg"
  },
  {
    id: "13",
    marca: "Sansung",
    nome: "Galaxy Watch 5",
    preco: 2499,
    imagem: "galaxy_watch5.jpeg"
  },
  {
    id: "14",
    marca: "Sansung",
    nome: "notebook sansung plus",
    preco: 3000,
    imagem: "notebookSansung.jpg"
  },
  {
    id: "15",
    marca: "Dell",
    nome: "notebook gamer D40",
    preco: 5650,
    imagem: "notebookGamer.jpg"
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}