class QuadradoD{
    constructor(base, altura){
        let cor = 'green';
        this.base = base;
        this.altura = altura;
        this.getCor = () => {return cor;};
        this.setCor = (c) => {cor = c}
    }
}

const quadrado = new QuadradoD(5, 6);
quadrado.setCor('red');
quadrado.cor = 'yellow';
console.log(quadrado.getCor());
console.log(quadrado);


class QuadradoMA{
    constructor(base, altura){
        this._cor = 'green';
        this.base = base;
        this.altura = altura;
    }
    get cor() {return this._cor;};
    set cor(c) {return this._cor = c;}
}

const quadrado2 = new QuadradoMA(3,4);
quadrado2.cor = 'red';
console.log(quadrado2);