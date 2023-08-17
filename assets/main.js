const form = document.querySelector('form');
const resp = document.querySelector('resp');
const temp = document.querySelector('temp');
const pessoas = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.inNome.value;
    const idade = form.inIdade.value;

    pessoas.push({idade, nome});

    temp.innerText = `Pessoa cadastrada com sucesso!!`

    console.log(nome, idade, pessoas);
});