import React from 'react';

class App extends React.Component {
  render(){
    return(
      <>
        <p>
          um parágrafo e uma pausa de cinco min
        </p>
        <p>
          ainda não saí, mas quero 5 min de pausa
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </>
    )
  }
}

export default App;
