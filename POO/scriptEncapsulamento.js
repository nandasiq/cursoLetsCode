function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = "red";
}

const quadrado = new Quadrado(3, 4);
quadrado.cor = 'red';
console.log(quadrado.cor);

function criaQuadrado(base, altura){
    let cor = 'blue';

    return{
        base,
        altura,
        getCor: function(){return cor;}
    };
}
const quadrado2 = criaQuadrado(3, 4);
console.log(quadrado2.getCor());

class QuadradoC{
    constructor(base, altura){
        let cor = 'green';
        this.base = base;
        this.altura = altura;
        this.getCor = () => {return cor;};
    }
}

const quadrado3 = new QuadradoC(3, 4);
console.log(quadrado3.getCor());