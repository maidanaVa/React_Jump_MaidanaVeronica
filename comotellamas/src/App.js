
import './App.css';
import {useState} from 'react';

import TuNombre from './componentes/tunombre';



//-----------------------------------------------------------------------------------------------
function App() {
const [state, setState] = 
  useState({
    apellido: '',
    nombres: [ ''  , // primer
               ''    //segundo
             ]
    });

 const nombreX=(event)=>{

if(event.target.id==='1'){

  setState({
    apellido:state.apellido,
    nombres: [ event.target.value, // primer
              state.nombres[1]    //segundo
             ]
            }       
  );

 }else{
  setState({
    apellido:state.apellido,
    nombres: [  
              state.nombres[0], // primer
              event.target.value  //segundo
             ]
            }       
  );
 }

}


  return (
    <div className="App margen" >
     
     <input type='text'placeholder='Apellido' value={state.apellido} onChange={e=>setState({...state,apellido:e.target.value})}></input>
 <input id='1' type='text'placeholder='Primer Nombre' onChange={nombreX}></input>
 <input id='2' type='text'placeholder='Segundo Nombre' onChange={nombreX}></input>

       <p>Mi Nombre es:</p>
       
       <TuNombre
       espacio={state.apellido}/>
      
      <TuNombre
       espacio={state.nombres[0]}/>
       
       <TuNombre
       espacio={state.nombres[1]}/>
    </div>
   
  );
}
export default App;
