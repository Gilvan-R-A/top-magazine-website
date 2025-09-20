import { CheckoutController } from "../controllers/CheckoutController.js";
import { CheckoutModel } from "../models/CheckoutModel.js";

function validarCampo(inputId, condicaoValida, mensagemErro) {
    const input = document.getElementById(inputId);
    const erro = document.getElementById(`erro-${inputId}`);

    if (!condicaoValida) {
        input.classList.remove("border-slate-200");
        input.classList.add("border-red-500");
        erro.textContent = mensagemErro;
        erro.classList.remove("hidden");
        input.focus();
        return false;
    } else {
        input.classList.remove("border-red-500");
        input.classList.add("border-slate-200");
        erro.classList.add("hidden");
        erro.textContent = "";
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    CheckoutController.inicializar();
    aplicarMascaras();

    const form = document.querySelector("form");

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", () => {
            const erro = document.getElementById(`erro-${input.id}`);
            input.classList.remove("border-red-500");
            input.classList.add("border-slate-200");
            if (erro) {
                erro.classList.add("hidden");
                erro.textContent = "";
            }
        });
    });

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
  
        const validoNome = validarCampo("nome", nomeRegex.test(nome), "Nome inválido. Digite seu nome completo.");
        const validoEmail = validarCampo("email", emailRegex.test(email), "Email inválido.");
        const validoTelefone = validarCampo("telefone", telefoneRegex.test(telefone), "Telefone inválido. Use o formato (99) 99999-9999");
        const validoCartao = validarCampo("numero-cartao", cartaoRegex.test(numeroCartao), "Número do cartão inválido");
        const validoCVV = validarCampo("cvv", cvvRegex.test(cvv), "CVV deve ter 3 dígitos.");
        const validoData = validarCampo("data-expiracao", dataRegex.test(dataExpiracao), "Data de expiração inválida. Use MM/AA.");
        const validoCEP = validarCampo("cep", cepRegex.test(cep), "CEP inválido. Use o formato 99999-999");
        const validoEndereco = validarCampo("endereco", endereco.length >= 5 && endereco.includes(" "), "Endereço inválido. Informe nome completo da rua.");
        const validoNumero = validarCampo("numero", numero === "" || /^\d+$/.test(numero) || numero.toLowerCase() === "s/n", "Número inválido. Use apenas números ou 's/n'.");
        const validoComplemento = validarCampo("complemento", complemento.length === 0 || complemento.length >= 2, "Complemento inválido. Deixe em branco ou preencha corretamente.");

        if (
            !validoNome || !validoEmail || !validoTelefone || !validoCartao || !validoCVV || !validoData || !validoCEP || !validoEndereco || !validoNumero || !validoComplemento
        ) {
            return;
        }

        const sucesso = CheckoutModel.finalizarPedido();

        if(sucesso) {
            window.location.href = "./pedidos.html";
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