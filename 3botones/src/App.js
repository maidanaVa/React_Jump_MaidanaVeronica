
import './App.css';
import Boton from './components/boton'
import {useState} from 'react';

//componente1-- componente tipo funcion 

function App() {
  
 const[num,setnum]=useState('0-Cero');

const uno=()=>{
  setnum('1-Uno');
}
const dos=()=>{
  setnum('2-dos');
}
const tres=()=>{
  setnum('3-Tres');
}


  return (// que devuelve un elemento html (div app)-los componentes solo devuelven un unico elemento 
    <div className="App">
    <div className='texto'>{num}</div>
   <div className='tresbotones'>
        <Boton
         numero='1'
         nume={uno}
         />
         <Boton
         numero='2'
         nume={dos}
         />
         <Boton
         numero='3'
         nume={tres}
         />
      </div>
    </div>
  );
}
//
export default App;
