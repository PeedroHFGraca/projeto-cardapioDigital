/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/*  .jsx serve para indicar que o arquivo possuí a
  estrutura do React, que permite escrever códigos em JS
  gerando TAGS(componentes) customizadas, utilizando html
  e css dentro do código de JS

  App.jsx será o arquivo que reunirá todos os componentes
  Distribuímos o código entre arquívos por questão de organização 
  (main.jsx, app.jsx, cardapio.jsx) 
*/ 


import {useState} from "react"; /* Vai fazer a o conteúdo da página ser alterado */
import "./App.css"; /*Importando o CSS*/
import CardapioDigital from "./assets/restaurante.jpg";
/*Importando a img do restaurante e salvando na VAR CardapioDigital*/
import { Navegacao } from "./Navegacao"; /* Quando não utilizarmos {} quer dizer que É PADRÃO*/
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";


export function App() { /* Exportar função nos outros arquivos*/

  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0); 
  /* userState(0) vai fazer a o conteúdo da página ser alterado
   A página carregará com a página 0 (PRATOS PRINCIPAIS)
   atualizarPaginaSelecionada será minha função */
  


  return  <>  
            <img src={CardapioDigital} alt="" className="capa"/>
            <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}></Navegacao> 

            <div className="menu">
              {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)};
            </div>

          </>
          /*No React para colocar mais de um elemento na tela
           é preciso que estejam abraçados por alguma TAG (div ou apenas <>)
           
           Em arquivo .jsx, quando quiser misturar o html com JS, coloque o src entre {}
           *ClassName em React é a mesma coisa que o Class do html porém  
           
           *MAP = atualização de um determinado conteúdo ex:
            const notasIniciais = [0, 1, 5]
                  notasIniciais.map(nota => nota + 1)
            resultado finali: [1, 2, 6]
           
           // Navegação são os botões para trocar a página, eles vão ter a função atualizarPaginaSelecionada/

            */


}