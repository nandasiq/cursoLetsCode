import React, {useState, useEffect} from 'react';

function Efeitos1(){
    const [nome, setNome] = useState('');

    useEffect(
        () => console.log('Efeito: ', nome), [nome ]
    );

    return(
        <>
        <br />
        Nome: <input type="text" value={nome} onChange={(event) =>setNome(event.target.value)} />
        <br />
        Oiê, {nome}!
        </>
    );
}

function Efeitos2(){
    const [nome, setNome] = useState(undefined);

    useEffect(
        () => {
            if(nome === undefined){
                setNome(sessionStorage.getItem('nome') || '');
            }

            else{
                sessionStorage.setItem('nome', nome);
            }
        }, [nome]
    );
    return (
        <>
        <br />
        Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
        <br />
        Tchau, {nome}.
        </>
    );
}

export {Efeitos1, Efeitos2};