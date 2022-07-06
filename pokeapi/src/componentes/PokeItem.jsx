import '../style/PokeItem.css'

function PokeItem({todo,index}){
return(
    <li>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" />
        {todo.name}
    </li>
);
}

export default PokeItem;