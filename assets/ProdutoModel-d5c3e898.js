(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function d(i,e){localStorage.setItem(i,JSON.stringify(e))}function p(i){return JSON.parse(localStorage.getItem(i))}function g(i){localStorage.removeItem(i)}class u{constructor(e,a,r="produtos-carrinho"){this.model=e,this.catalogo=a,this.container=document.getElementById(r),this.precoTotal=document.getElementById("preco-total")}atualizarPreco(){let e=0;for(const a in this.model.obterItens()){const r=this.catalogo.find(t=>t.id===a);e+=r.preco*this.model.obterItens()[a]}this.precoTotal.innerText=`Total: $ ${e}`}atualizarQuantidade(e){document.getElementById(`quantidade-${e}`).innerText=this.model.obterItens()[e]}limparCarrinhoUI(){this.container.innerHTML=""}desenharProduto(e,a,r=null){var l,m;const t=typeof a=="string"?a:this.container.id,o=document.getElementById(t),s=r??((m=(l=this.model)==null?void 0:l.obterItens())==null?void 0:m[e.id])??1,n=typeof a=="object",c=document.createElement("article");c.classList.add("w-full","flex","bg-slate-100","rounded-lg","p-2","relative","mb-2","items-center","gap-2"),c.innerHTML=`
        ${n?`
        <button type="button" id="remover-item-${e.id}" class="absolute top-0 right-2">
            <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
        </button>
        `:""}

        <img src="../../public/assets/img/${e.imagem}" alt="${e.nome}" class="h-24 rounded-lg"/>
        <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-900 text-sm">${e.nome}</p>
            <p class="text-slate-400 text-xs">${e.marca}</p>
            <p class="text-slate-700 text-lg">${e.preco}</p>
        </div>

        ${n?`
            <div class="flex text-slate-950 itens-end absolute bottom-0 right-2 text-lg">
            <button type="button" id="decrementar-produto-${e.id}">-</button>
            <p id="quantidade-${e.id}" class="ml-2">${s}</p>
            <button type="button" id="incrementar-produto-${e.id}" class="ml-2">+</button>
        </div>
            `:`
            <div class="text-slate-950 text-sm items-end absolute bottom-0 right-2">
                <p>Quantidade: ${s}</p>
            </div>
            `}       
        `,o.appendChild(c),n&&(document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>a.remover(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>a.incrementar(e.id)),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>a.decrementar(e.id)))}renderizarTodos(e){this.limparCarrinhoUI();for(const a in this.model.obterItens()){const r=this.catalogo.find(t=>t.id===a);this.desenharProduto(r,e)}this.atualizarPreco()}}class f{static listar(){return[{id:"1",marca:"Sansung",nome:"Tablet Galaxy Tab S9",preco:6999,imagem:"Galaxy_Tab_S9.jpeg",acessorio:!1},{id:"2",marca:"Apple",nome:"Mouse MacMouse",preco:500,imagem:"mouse.jpg",acessorio:!0},{id:"3",marca:"Accer",nome:"Notebook Gamer 3000M",preco:4600,imagem:"notebookAccer.jpg",acessorio:!1},{id:"4",marca:"Sansung",nome:"Smartphone Galaxy S23 Ultra 5G",preco:199,imagem:"Galaxy_S23.jpeg",acessorio:!0},{id:"5",marca:"Apple",nome:"Notebook MacBook Air",preco:10700,imagem:"laptop.jpg",acessorio:!1},{id:"6",marca:"Apple",nome:"iPad Z800",preco:3500,imagem:"iPad.jpg",acessorio:!0},{id:"7",marca:"Sansung",nome:"Smartphone Galaxy Z Flip5 5G",preco:6579,imagem:"Galaxy_Z_Flip5.jpeg",acessorio:!0},{id:"8",marca:"Abam",nome:"Adaptador M1 para MacBook",preco:237,imagem:"Adaptador-M1.jpg",acessorio:!0},{id:"9",marca:"Geonav",nome:"Cabo Adaptador USB-C para USB 3.0",preco:590,imagem:"Cabo_Adaptador-USB.jpg",acessorio:!0},{id:"10",marca:"Compaq",nome:"Notebook Compaq 7000S",preco:2300,imagem:"notebookCompaq.jpg",acessorio:!1},{id:"11",marca:"Cânon",nome:"Camêra Cânon 500",preco:890,imagem:"canon.jpg",acessorio:!0},{id:"12",marca:"Sansung",nome:"Galaxy Watch 6 Classic LTE",preco:3549,imagem:"Galaxy_Watch6_BT.jpeg",acessorio:!0},{id:"13",marca:"Sansung",nome:"Galaxy Watch 5",preco:2499,imagem:"galaxy_watch5.jpeg",acessorio:!0},{id:"14",marca:"Sansung",nome:"Notebook sansung plus",preco:3e3,imagem:"notebookSansung.jpg",acessorio:!1},{id:"15",marca:"Dell",nome:"Notebook gamer D40",preco:5650,imagem:"notebookGamer.jpg",acessorio:!1}]}static buscarPorId(e){return this.listar().find(a=>a.id===e)}}export{u as C,f as P,g as a,p as l,d as s};
