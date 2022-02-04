class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Luana", 30);
pessoa1.idade = 31;
console.log(pessoa1.idade);

const pessoa = new Pessoa("Einsten", 110)
console.log(pessoa);