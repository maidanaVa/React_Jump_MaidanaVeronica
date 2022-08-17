
import './App.css';
import Boton from './componentes/boton';
import {useState} from 'react';
import Operacion from './componentes/operacion';

function App() {

//hooks--->useState
      //nombreclick   //actualizaclick
      const[manejoclick,setnumeroclick]= useState(0);
     


//interactividad
const sumar=()=>{
setnumeroclick(manejoclick+1);// guarda en setnumeroclick =0+1, despues 1+1; y asi sucesivamente;
}
const restar=()=>{
setnumeroclick(manejoclick-1);
}

  return (
    <div className="App">
       <div className='cajaBotones'>
          <Boton
          texto='sumar'
          sumaOResta='true'
          manejoclick={sumar}
          />
          <Operacion
          manejoclick={manejoclick}
          />
          <Boton
          texto='restar'
          manejoclick={restar}
           />
       </div>
    </div>
  );
}

export default App;
