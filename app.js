let listaDeNumerosSecretos = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumero10();
let tentativas = 1;

mensagemInicial();

function mensagemInicial(){
    exibirTexto(`h1`, `Jogo Secreto`);
    exibirTexto(`p`, `Escolha um número entre 1 e ${numeroMaximo}:`);
}

function exibirTexto(tag, texto) {
    let campoTextual = document.querySelector(tag);
    campoTextual.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.6; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function verificarChute() {
    let chute = document.querySelector(`input`).value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemVencedora = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTexto(`h1`, `Parabéns, você acertou!`);
        exibirTexto(`p`, mensagemVencedora);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);

    } else if (chute > numeroSecreto) {
        exibirTexto(`p`, `O número é menor...`);
        tentativas++;
        limparCampo();
    } else {
        exibirTexto(`p`, `O número é maior!`);
        tentativas++;
        limparCampo();
    }
}

function gerarNumero10(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let elementosDeNumerosSorteados = listaDeNumerosSecretos.length;

    if(elementosDeNumerosSorteados == 5){
        listaDeNumerosSecretos = [];
    }

    if (listaDeNumerosSecretos.includes(numeroEscolhido)){
        return gerarNumero10();
    } else {
        listaDeNumerosSecretos.push(numeroEscolhido);
        console.log(listaDeNumerosSecretos);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
}

function reiniciarJogo(){
    mensagemInicial();
    numeroSecreto = gerarNumero10();
    limparCampo();
    tentativas = 1;
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
}