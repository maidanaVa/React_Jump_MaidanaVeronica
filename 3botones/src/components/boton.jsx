import React from "react";
import '../style/boton.css';

function Boton ({numero,nume}){
return(
    <button onClick={nume} >{numero}</button>
);
};
export default Boton;