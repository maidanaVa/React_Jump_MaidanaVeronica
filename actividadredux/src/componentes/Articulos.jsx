import {useState,useEffect} from 'react';
import {decre_stock,incre_stock}from '../store/articulos/actions';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
return{
    stock:state.articulosReducer.stock
}
}


function Articulos ({stock,decre_stock,incre_stock}){



    const[articulos,setArticulos]=useState([]); /* aca se van a guardar mis articulos traidos desde la api  */

    useEffect(()=>{ /*  trae lo guardado en el estado   */
    obtenerDatos()
    },[])
    
    
    const obtenerDatos=async()=>{
           
        const datos= await fetch("https://fakestoreapi.com/products?limit=4");  /*  FETCH LLAMA A LA API  Y AWAIT GENERA UNA ESPERA QUE SE CONVIERTA EN LA PETICION DE LA URL */
        const articulos= await datos.json() /*  CONVIERTE LOS DATOS DE LA API EN UN JSON  */
        console.log(articulos)
        setArticulos(articulos) 
     } 




         return(
                <ul className="cajaArticulos">
                        {
                            articulos.map((art)=>(
                                <li key={art.id} className="card">
                                        <span>{art.id}</span>
                                        <h4>{art.title}</h4>
                                        <img src={art.image} alt={art.title}/>
                                        <div className='btnEdicion'> 
                                            <span>${art.price}</span>
                                            <button>Editar</button>
                                        </div>
                                        <p>{art.description}</p>
                                        <div className='btnEdicion '>
                                                    <span>stock:{stock}</span> 
                                                    <div>
                                                                <button className='btnStock' onClick={()=>decre_stock()}>-</button>
                                                                <button className='btnStock' onClick={()=>incre_stock()}>+</button>
                                                    </div>
                                        </div>
                                        <div className='btnsStore'>
                                            <button>Eliminar</button>
                                            <button>Editar</button>
                                        </div>
                                </li>
                            ))
                        }
                </ul>
            
    );
}

export default connect(mapStateToProps,{decre_stock,incre_stock})(Articulos);






