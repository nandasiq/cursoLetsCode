function escreva(texto){
    console.log(texto)
}

escreva("meu primeiro parâmetro");

function soma(a, b){

    return a + b;
}

let resultado = soma(1, 2);
console.log(resultado);

//fazer função como const para ter certeza que não será sobrescrita
const soma2 = function(a, b){return a + b;};
console.log(soma2(9, 10));

//fazer função em fleha para simplificar ainda mais
const soma3 = (a, b) => a + b;
console.log(soma3(20, 30));