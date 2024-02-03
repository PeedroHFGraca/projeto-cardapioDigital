/* eslint-disable react/prop-types */
/* Vamos criar um COMPONENTE (Tag) que tenha tanto inteligência 
   quanto a representação visual do elemento

   *Boa prática iniciar um COMPONENTE com Maiúscula.
*/

export function Navegacao(props) {
    return <div className="navegacao">
            <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
            <label htmlFor="pagina-0">Pratos principais</label>
            <input type="radio" name="opcao-pagina" id="pagina-1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
            <label htmlFor="pagina-1">Sobremesas</label>
            <input type="radio" name="opcao-pagina" id="pagina-2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
            <label htmlFor="pagina-2">Bebidas</label>
        </div>
}
/*  defaultChecked = checked (carregar a pág com essa opção)
    htmlFor="" e label (associando um rótulo a um elemento)

    () => onClick{props.atualizarPaginaSelecionada(0)}
    Chamar uma função para executar outra função
*/