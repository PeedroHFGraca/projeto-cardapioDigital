/* Main.jsx Pega a estrutura básica de HTML e 
  tudo o que for criado em React é jogado para o index.html
  
  .jsx serve para indicar que o arquivo possuí a
  estrutura do React, que permite escrever códigos em JS
  gerando TAGS(componentes) customizadas, utilizando html
  e css dentro do código de JS
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx' /* Importar função App do App.jsx*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
