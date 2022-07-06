// componente funcional boton reutilizable
import React from "react";
import '../style/boton.css'

function Boton({texto,sumaOResta,manejoclick}){
    return(
      <button className={sumaOResta?'sumar':'restar'} onClick={manejoclick}>{texto}</button>
    );
}
export default Boton;