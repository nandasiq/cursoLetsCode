const vetor = [1, 2, 3, 4, 5, 6];

const soma = vetor.reduce((estado, item) => estado + item, 0);
console.log(soma);

const matriz = [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1],
    [6, 1, 5, 2, 3, 7]
];

const somaColuna = (estado, item) => {
    return [estado[0]+item[0]+item[1] , estado[1]+item[2]+item[3] , estado[2]+item[4]+item[5]]
};
const vetor2 = matriz.reduce(somaColuna,[0, 0, 0]);
console.log(vetor2);



let alunos = [
    {nome: 'nome1', nota1: 5, nota2: 4},
    {nome: 'nome2', nota1: 4, nota2: 3},
    {nome: 'nome3', nota1: 7, nota2: 8},
    {nome: 'nome4', nota1: 2, nota2: 7},
    {nome: 'noma5', nota1: 9, nota2: 9},
];

const estadoInicial = {
    somaNota1: 0,
    somaNota2: 0,
    qtdNota1: 0,
    qtdNota2: 0,
};

const resultado = alunos.reduce((estado, valor) => {
    return{
        somaNota1: estado.somaNota1 + valor.nota1,
        somaNota2: estado.somaNota2 + valor.nota2,
        qtdNota1: estado.qtdNota1 + 1,
        qtdNota2: estado.qtdNota2 + 1,
    };
}, estadoInicial);
console.log(resultado);