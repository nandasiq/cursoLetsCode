import React from 'react';

function Hello(props){
    return(
        <h1>{props.text}</h1>
    );
}

function Filha({children}){    
    return(
    <>
        {children}
    </>
    );
}

const Funcao = ({text}) => (<h4>{text}</h4>);

export {Hello, Filha, Funcao};