function olaMundo(){
    console.log(`Olá, Mundo!`);
}

function nome(nome){
    console.log(`Olá, ${nome}`);
}

function numeroDobro(numero){
    let dobro = numero * 2;
    console.log(`O dobro do número é: ${dobro}`);
}

function tresNumeros(numero1, numero2, numero3){
    let media = (numero1 + numero2 + numero3) / 3
    console.log(`A média é ${media}`);
}

function doisNumeros(numero1, numero2){
    if (numero1 > numero2){
        console.log(`O maior número entre os dois é ${numero1}`);
    } else {
        console.log(`O maior número entre os dois é ${numero2}`);
    }
}

function quadrado(numero){
    let quadrado = numero * numero;
    console.log(`O quadrado do número é: ${quadrado}`);
}

function verificarChute(){
    olaMundo();
    nome(`Matheus`);
    numeroDobro(5);
    tresNumeros(6, 8 ,4);
    doisNumeros(16, 10);
    quadrado(11);
}
