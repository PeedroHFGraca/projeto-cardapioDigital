/* eslint-disable react/prop-types */
/* Vamos criar um COMPONENTE (Tag) que tenha tanto inteligência 
   quanto a representação visual do elemento

   *Boa prática iniciar um COMPONENTE com Maiúscula.
*/


// import { enroladinhoMignon } from "./cardapio";

export function ItemCardapio(props) {
    return <div className="container-item-cardapio">
        <div>
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="img do prato" />
    </div> 
}/* Retornar as informações do prato
    Props = Descreve um objeto que vai conter as infos que o componente ItemCardapio vai armazenar  
    Quando é uma TAG que criamos e colocamos informações dentro essas infos no React ficam dentro de um
    Object chamado PROPS   
*/