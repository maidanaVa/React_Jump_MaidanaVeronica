import React from 'react'
import { useEffect,useState } from 'react';
import { useParams/* ,useNavigate  */} from 'react-router-dom';
import NavUser from './NavUser';


 function DetalleUser() {

   const {id}= useParams();
   /* const navigate=useNavigate(); */
   

   const[detalleUsu,setDetalleUsu]=useState([]);

   const obtenerDatos=async()=>{
   const datosIndUsu= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);  /* FETCH LLAMA A LA API  Y AWAIT GENERA UNA ESPERA QUE SE CONVIERTA EN LA PETICION DE LA URL*/
   const detalleUsu= await datosIndUsu.json(); /* CONVIERTE LOS DATOS DE LA API EN UN JSON */
   
   setDetalleUsu(detalleUsu);
   }
 
  useEffect(()=>{                                  /* trae lo guardado en el estado  */
       obtenerDatos()
       
    },[])

  
 /* const eliminarId=()=>{
    deleteUser(items.id)
    navigate("/")
 }
 */
  return (
    <>
    <NavUser/>
    <div className='DetalleUser'>
        <h1>Id: {detalleUsu.id}</h1>
        <h2>Nombre: {detalleUsu.name}</h2>
        <h2>Email: {detalleUsu.email}</h2>
        <h2>Usuario: {detalleUsu.username}</h2>

       
    </div>
    </>
  )
}
export default DetalleUser;