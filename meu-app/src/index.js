import React from 'react';
import ReactDOM from 'react-dom';
import {Ani, Itens} from './components/Aninhados';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Formulario from './components/Formulario';
import { Lista, Lista2, Item } from './components/Lista';
import {Hello, Filha, Funcao} from './components/CompFuncionais';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 title="título do app">
      conteúdo dentro da tag
    </App2>
    <App2 title="título2">
      conteúdo dentro da tag2
    </App2>
    <App3 />
    <App4 />
    <App5 />
    <Lista />
    <Lista2>
      teste de texto
      <Item key={9} id={99} completo={false}>
        teste1
      </Item>
      <Item key={8} id={88} completo={true}>
        teste2
      </Item>
    </Lista2>
    <Ani>
      teste fora do item
      <Itens key={101} id={101} completo={false}>
        Teste item 1 ani
      </Itens>
      <Itens key={102} id={102} completo={true}>
        teste item 2 ani
      </Itens>
    </Ani>
    <Formulario />
    <Hello text="Hello, world">    
    </Hello>
    <Filha>
      <h3>Hello, children</h3>
    </Filha>
    <Funcao text="Hello, função"></Funcao>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
