function console(item){
    console.log(item);
}

function indiceMassaCorporal(peso, altura){
    let IMC = peso / altura;
    return IMC
}

function fatorial(numero){
    let resultado = numero;

    if(numero == 0 || numero == 1){
        return 1;
    
    } else if (numero < 0){
        return -1
    }

    while(numero > 1){
        numero--;
        resultado = resultado * numero;
    }

    return resultado;
}

function conversao(dollar) {
    let real = dollar * 4.8;
    return real;
}

function retangulo(largura, altura){
    let area = largura * altura;
    let perimetro = largura * 2 + altura * 2;

    alert(`A área é de ${area}Um e um perímetro de ${perimetro}Um`);
}

function circulo(raio){
    let area = 3.14 * raio * raio;
    let perimetro = 3.14 * 2 * raio;

    alert(`A área é de ${area}Um e um perímetro de ${perimetro}Um`);
}

function tabuada(){
    
}