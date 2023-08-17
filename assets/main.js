const form = document.querySelector("form");
const resp = document.querySelector("resp");
const temp = document.querySelector(".temp");
const pessoas = [];
const pessoaPreferencial = 60;

const sumirMsg = setTimeout(() => {
  temp.innerText = "";
}, 1500);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const idade = form.inIdade.value;

  pessoas.push({ nome, idade });

  temp.innerText = `Pessoa cadastrada com sucesso!!`;

  form.reset();
  form.inNome.focus();

  sumirMsg(temp);

  console.log(nome, idade, pessoas, temp);
});

form.btnPreferencial.addEventListener("click", () => {
  if (pessoas.length == 0) {
    temp.innerText = `Não há pessoas preferenciais!`;
    sumirMsg();
    return
  }
});
