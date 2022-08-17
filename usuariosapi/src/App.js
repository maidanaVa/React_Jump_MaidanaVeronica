
import './App.css';
import {useEffect,useState} from 'react';
import{Link}from 'react-router-dom';
import avatarImg from './assets/avatar.png';




function App() {

    

  const[userJson,setUserJson]=useState([]);


  const obtenerDatos=async()=>{
  const datosUsuarios= await fetch("https://jsonplaceholder.typicode.com/users");  /* FETCH LLAMA A LA API  Y AWAIT GENERA UNA ESPERA QUE SE CONVIERTA EN LA PETICION DE LA URL*/
  const userJson= await datosUsuarios.json(); /* CONVIERTE LOS DATOS DE LA API EN UN JSON */
  setUserJson(userJson)
  }

 useEffect(()=>{                                  /* trae lo guardado en el estado  */
      obtenerDatos()
   },[])

   const eliminar4=()=>{
    alert("el usuario se ha restringido");

   }
   


 
  return (
    <div className="App">
      
       <ul>
                {
                  userJson.map((items)=>(

                                        <li key={items.id} >
                                          
                                                <div className='card cajaUser'>
                                                  <img className='avatarImg' src={avatarImg}/>
                                                  <Link to={`/detalles/${items.id}`} onClick={()=>items.id == 4 ? eliminar4() : null}><h2>{items.name}</h2></Link>
                                                  <h3> {items.id}</h3>
                                                   
                                                </div>
                                          
                                          </li>
                  ))
                }
       </ul>
    </div>
  );
}

export default App;


