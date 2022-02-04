class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "insira um número"
        this.base = base,
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado(11, 12);
quadrado.cor = 'blue';
console.log(quadrado)