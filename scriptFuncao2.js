const subtrair = (a, b) => a-b;
const somar = (a, b) => a+b;
const aplicarOperacao = (a,b, operacao) => operacao(a, b);

let resultado = aplicarOperacao(10, 5, somar);
console.log(resultado);


const somarX = (x) => (y) => x+y;
const somar2 = somarX(2);
console.log(somar2(5));