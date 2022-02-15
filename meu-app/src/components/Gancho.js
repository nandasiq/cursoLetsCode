import React, {useState} from 'react';

function Gancho1(){
    const [nome, setNome] = useState('Lulala');
    const onClick = () => setNome('Lula 2022')

    return (
        <h2 onClick={onClick}>{nome}</h2>
    );
}

function Gancho2(){
    const [pessoa, setPessoa] = useState({nome: 'Fernanda', idade: 29});
    const onClick = () => {setPessoa({nome: 'Fadnanre'}); console.log(pessoa);};

    return(
        <h3 onClick={onClick}>{pessoa.nome}</h3>

    );
}

function Gancho3() {
    const [nome, setNome] = useState('');

    return(
        <>
        Nome <input type="text" value={nome} onChange={(event) =>setNome(event.target.value)} />
        <br />
        Olá, {nome}
        </>
    );
}

export {Gancho1, Gancho2, Gancho3};