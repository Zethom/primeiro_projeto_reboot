let listaGenerica = [];
let listaLinguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];



function verificarChute(){

    console.log(listaLinguagensDeProgramacao[0]);
    console.log(listaLinguagensDeProgramacao[1]);
    console.log(listaLinguagensDeProgramacao[listaLinguagensDeProgramacao.length - 1]);
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    listaLinguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];

}

function reiniciarJogo() {

    listaLinguagensDeProgramacao.push(`Java`, `Ruby`, `GoLang`);
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);

}
