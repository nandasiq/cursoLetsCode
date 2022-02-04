import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 title="título do app"/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
