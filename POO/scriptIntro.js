const pessoa = {nome: 'Fernanda', idade: 29};
console.log(pessoa.nome);

const quadrado = {
    base: 10,
    altura: 20,
    calculaArea: function(){return this.base * this.altura}
};
console.log(quadrado.calculaArea());
