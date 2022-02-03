console.log("função alerta!");

let numero = -6;

if(numero > 0){
    console.log("positivo");
}

else if(numero < 0){
    console.log("negativo");
}

else{
    console.log("número é zero");
}

let paridade = numero % 2 == 0 ? "número par" : "impar";

console.log(paridade);