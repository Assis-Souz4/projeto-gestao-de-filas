const form = document.querySelector("form");
const resp = document.querySelector(".resp");
const temp = document.querySelector(".temp");
const clientes = [];

function sumirMsg() {
  setTimeout(() => {
    temp.innerText = "";
  }, 1700);
}
function arrayVazio() {
  if (clientes.length == 0) {
    temp.innerText = "Não existe Clientes!!";
    inNome.focus();
    sumirMsg();
  }
}

function prioridade() {
  arrayVazio();
  clientes.forEach((cliente) => {
    const preferencial = clientes.filter((cliente) => cliente.idade >= 60, "");
    resp.innerText = `Cliente(s) com Prioridade para atendimento:\n ${"-".repeat(
      50
    )}\n`;

    preferencial.forEach((cliente, i) => {
      resp.innerText += `${i + 1} - ${cliente.nome}\n`;
    });
  });
}
function comum() {
  arrayVazio();
  clientes.forEach((cliente) => {
    const comuns = clientes.filter((cliente) => cliente.idade < 60, "");
    resp.innerText = `Cliente(s) para atendimento Comum:\n ${"-".repeat(50)}\n`;
    comuns.forEach((cliente, i) => {
      resp.innerText += `${i + 1} - ${cliente.nome}\n`;
    });
  });
}
function geral() {
  arrayVazio();

  const copia = [...clientes];

  let acc = "";

  copia.forEach((el, i) => {
    acc += `${i + 1 + " - " + el["nome"]}\n`;
  });

  if (acc.length !== 0) {
    resp.innerText = `Cliente(s) para Atendimento\n${"-".repeat(50)}\n${acc}\n`;
    return;
  }
}
function limpar() {
  if (clientes.length == 0){
    temp.innerText = "Tudo Limpo!!";
    sumirMsg();
  }
  resp.innerText = " ";
  form.reset();
  form.inNome.focus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const idade = Number(form.inIdade.value);

  clientes.push({ nome, idade });

  temp.innerText = `Clientes cadastrado(a) com sucesso!!`;

  form.reset();
  form.inNome.focus();

  sumirMsg();
});

form.btnPreferencial.addEventListener("click", prioridade);

form.btnComum.addEventListener("click", comum);

form.btnGeral.addEventListener("click", geral);

form.btnLimpar.addEventListener("click", limpar);
