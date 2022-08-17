import PokeItem from "../componentes/PokeItem";
import '../style/PokeList.css';

function PokeList({todos}){
return(
    <ul>
        {
            !todos?'Cargando...':todos.map((todo,index)=>{
                return(
                   <PokeItem key={`id-${index}`} todo={todo} index={index}/>
                );
            })
        }
    </ul>
);
}
export default PokeList;