exibirTexto(`h1`, `Jogo Secreto`);
exibirTexto(`p`, `Escolha um número entre 1 e 10:`);

let numeroSecreto = gerarNumero10();

function exibirTexto(tag, texto) {
    let campoTextual = document.querySelector(tag);
    campoTextual.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector(`input`).value;
    console.log(chute == numeroSecreto);
}

function gerarNumero10(){
    return parseInt(Math.random() * 10 + 1);
}