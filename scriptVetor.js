let vetor = [10, 20, 30, 40, 50];

vetor[2] = "trinta";

console.log(vetor[2]);

for (let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}


let vetor2 = [];
for (let i = 0; i < 10; i++){
    vetor2.push(i);
}

console.log(vetor2);

for (let numero of vetor2){
    console.log(numero);
}
