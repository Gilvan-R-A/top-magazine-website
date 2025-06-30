import { CheckoutController } from "../controllers/CheckoutController.js";
import { CheckoutModel } from "../models/CheckoutModel.js";


document.addEventListener("DOMContentLoaded", () => {
    CheckoutController.inicializar();
    aplicarMascaras();

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const numeroCartao = document.getElementById("numero-cartao").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const dataExpiracao = document.getElementById("data-expiracao").value.trim();
        const cep = document.getElementById("cep").value.trim();
        const endereco = document.getElementById("endereco").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const complemento = document.getElementById("complemento").value.trim();

        const nomeRegex = /^[A-Za-zÀ-ú]{2,}(?:\s[A-Za-zÀ-ú]{2,})+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        const cartaoRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
        const cvvRegex = /^\d{3}$/;
        const dataRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cepRegex = /^\d{5}-\d{3}$/;
        // const numeroRegex = /^\d{1,5}$/;

        if (!nomeRegex.test(nome)) {
            alert("Nome inválido. Digite nome completo.");
        }

        if(!emailRegex.test(email)) {
            alert("Email inválido.");
            return;
        }
        
        if (!telefoneRegex.test(telefone)) {
            alert("Telefone inválido. Use o formato (99) 99999-9999");
            return;
        }
        
        if (!cartaoRegex.test(numeroCartao)) {
            alert("Número do cartão inválido.");
            return;
        }
        
        if (!cvvRegex.test(cvv)) {
            alert("CVV deve ter 3 dígitos.");
            return;
        }
        
        if (!dataRegex.test(dataExpiracao)) {
            alert("Data de expiração inválida. Use MM/AA");
            return;
        }
        
        if (!cepRegex.test(cep)) {
            alert("CEP inválido. Use o formato 99999-999.");
            return;
        }

        if (endereco.length < 5 || !endereco.includes(" ")) {
            alert("Endereço inválido. Informe nome completo da rua.");
            return;
        }

        if (numero && !/^\d+$/.test(numero) && numero.toLowerCase() !== "s/n") {
            alert("Número do endereço inválido. Use apenas números ou 's/n'.");
            return;
        }

        if (complemento.length > 0 && complemento.length < 2) {
            alert("Complemento inválido. Deixe em branco ou preencha corretamente.");
            return;
        }

        const sucesso = CheckoutModel.finalizarPedido();

        if(sucesso) {
            window.location.href = "/top-magazine-website/pedidos.html";
        } else {
            alert("Carrinho vazio. Não pe possível finalizar a compra.");
        }
    });
});

function aplicarMascaras() {
    const telefone = document.getElementById("telefone");
    const numeroCartao = document.getElementById("numero-cartao");
    const cvv = document.getElementById("cvv");
    const dataExpiracao = document.getElementById("data-expiracao");
    const cep = document.getElementById("cep");

    telefone.addEventListener("input", () => {
        let v = telefone.value.replace(/\D/g, "").slice(0, 11);
        telefone.value = v.length <=10
            ? v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
            : v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    });

    numeroCartao.addEventListener("input", () => {
    let v = numeroCartao.value.replace(/\D/g, "").slice(0, 16);
    numeroCartao.value = v.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  });

  cvv.addEventListener("input", () => {
    cvv.value = cvv.value.replace(/\D/g, "").slice(0, 3);
  });

  dataExpiracao.addEventListener("input", () => {
    let v = dataExpiracao.value.replace(/\D/g, "").slice(0, 4);
    dataExpiracao.value = v.length >= 3
      ? v.replace(/(\d{2})(\d{1,2})/, "$1/$2")
      : v;
  });

  cep.addEventListener("input", () => {
    let v = cep.value.replace(/\D/g, "").slice(0, 8);
    cep.value = v.replace(/(\d{5})(\d{1,3})/, "$1-$2");
  });

}