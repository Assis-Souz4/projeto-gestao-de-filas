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
    temp.innerText = "Não existe Clientes prioritários(as)!!";
    inNome.focus();
    sumirMsg();
  }
}

function prioridade() {
  arrayVazio();
  clientes.forEach((cliente) => {
    // if (cliente.idade < 60) {
    //   temp.innerText = "Não existe Clientes prioritários(as)!!";
    //   inNome.focus();
    //   sumirMsg();
    // }
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
    // if (cliente.idade > 60) {
    //   temp.innerText = "Não existe Clientes prioritários(as)!!";
    //   inNome.focus();
    //   form.reset();
    //   sumirMsg();
    // }
    const comuns = clientes.filter((cliente) => cliente.idade < 60, "");
    resp.innerText = `Cliente(s) para atendimento:\n ${"-".repeat(50)}\n`;

    comuns.forEach((cliente, i) => {
      resp.innerText += `${i + 1} - ${cliente.nome}\n`;
    });
  });
}
function geral() {
  preferencial();
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
  console.log(clientes);
});

form.btnPreferencial.addEventListener("click", prioridade);

form.btnComum.addEventListener("click", comum);
