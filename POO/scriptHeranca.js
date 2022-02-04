class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao("Fer", 29, '548713', '01741568925');
console.log(cidadao);
console.log(cidadao instanceof Pessoa);