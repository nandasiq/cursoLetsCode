const agenda = {
    contatos: [
        {nome: "fer", telefone: "3214-7856", email: "teste@teste.com",},
        {nome: "lu", telefone: "9874-5632", email: "testelu@teste.com",},
        {nome: "bia", telefone: "7894-5624", email: "testebia@teste.com",},
        {nome: "gu", telefone: "1236-5497", email: "testegu@teste.com",}
    ],
    adicionar : function(contato){ this.contatos.push(contato)},
    deletar : function(contato){this.contatos.delete(conato)},
};
console.log(agenda.contatos)