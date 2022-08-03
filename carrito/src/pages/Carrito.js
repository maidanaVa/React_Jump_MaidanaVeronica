import '../style/Carrito.css';
import Formulario from '../componentes/Formulario';
import imagenComprar from '../assets/celular1.png';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Carrito(){
  const[manejoclick,setnumeroclick]= useState(0);
    
  const sumar=()=>{
    setnumeroclick(manejoclick+1);// guarda en setnumeroclick =0+1, despues 1+1; y asi sucesivamente;
    }
    const restar=()=>{
    setnumeroclick(manejoclick-1);
    }
    


    return(
   <div className="Carrito">
      <div className='carritoArriba'>
           <Formulario/>
    
            <div className="cajaDerecha">
            <div className='cajaImgCarrito'>
                <img className='imagenCarrito' src={imagenComprar} alt=""/>
            </div>

            <div className='carritoProductoAgregado'>
                <h4>Samsung A51</h4>
            
                <div className='btnsCantidadCarrito'>
                    <button className='clickContador' onClick={restar}>-</button>
                <div className="operacion"> {manejoclick} </div>
                <button className='clickContador' onClick={sumar}>+</button>
               </div>
            </div>
            <div className='btnsConfirmacion'>
            <button className="btn"><Link to={`/`}>Seguir comprando</Link></button>
            <button className="btn"><Link to={`/`}>Terminar compra</Link></button>
            </div>
            </div>
       </div>
       
   </div>
    );
};
export default Carrito;
