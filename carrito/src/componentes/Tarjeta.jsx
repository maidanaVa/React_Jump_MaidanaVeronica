import '../style/Tarjeta.css';
import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";

function Tarjeta(){

   const[producto,setProducto]=useState([]) /* guarda el estado en el que esta mi elemento(producto) */
         
   useEffect(()=>{                                  /* trae lo guardado en el estado  */
      obtenerDatos()
   },[])
 
 const obtenerDatos=async()=>{
 
 const datos= await fetch("json/celulares.json");  /* FETCH LLAMA A LA API  Y AWAIT GENERA UNA ESPERA QUE SE CONVIERTA EN LA PETICION DE LA URL*/
 const producto= await datos.json() /* CONVIERTE LOS DATOS DE LA API EN UN JSON */
 setProducto(producto)
 }
 

    return(
       
            <ul>
               
                     {
                        producto.map(items=>(
                           
                           
                              <li key={items.id}>
                                 <div className="tarjeta">
                                       <img    className='imgTarjeta' src={`imagenes/${items.img}`} alt=""/>
                     
                                 <div className='cajaTextProducto'>
                                       <span><b>{items.name}</b></span>
                                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint porro saepe</p>
                                 </div>
                                 <div className='btnTarjeta'>
                                       <button className="btn"><Link to={`/details/:${items.name}`}>Detalles</Link></button>
                                       <button className="btn" id='carrito'><Link to="/carrito"><span className="iconify" data-icon="akar-icons:cart" data-flip="horizontal"></span></Link></button>
                                 </div> 
                                 </div>
                              </li>
                        
                        
                        ))
                     }
           
          </ul>
          
      
    );
}
export default Tarjeta;