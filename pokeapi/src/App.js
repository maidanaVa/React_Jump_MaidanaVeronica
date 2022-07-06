import './App.css';
import PokeLuces from './assets/img/9b33aadef69b1d2cf37de1dffcd84278.jpg';
import BotonesPoke from './assets/img/BotonesPoke.jpeg';
import {useState,useEffect}from 'react';
import PokeList from './componentes/PokeList'

function App() {

 
const apiPoke="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const [todos,setTodos]=useState();

const fetchApi=async()=>{
  const response= await fetch(apiPoke);
  console.log(response.status);
  const responseJSON=await response.json();
  setTodos(responseJSON.results);

}

useEffect(()=>{
fetchApi();
},[]);


  

  return (
    <div className="App">
     <header>
        <img id='deco1' src={PokeLuces} alt=''/>
      <h1>Poke Api</h1>
      </header>
       <main>
           <PokeList 
              todos={todos}/>
        </main>
        <img id="botonesPoke" src={ BotonesPoke} alt=''/>
    </div>
  );
}

export default App;
