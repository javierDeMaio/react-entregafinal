import ItemList from '../ItemList';
import autos from '../autos';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'





function ItemListContainer(props){
  const [hola,setAutos] = useState()
  const {idCategoria} = useParams()
  const busqueda = new Promise((res)=>{
      
   setTimeout(()=>{
              res(autos)}
              ,2000); 
    })
    useEffect(() =>{
      if(idCategoria){
        busqueda.then(respuesta =>{
          setAutos(respuesta.filter( res=> res.categoria === idCategoria))})
    
        .catch(error => console.log(error))
      }
      else
      {
        busqueda.then(respuesta =>{
          setAutos(respuesta)})
    
        .catch(error => console.log(error))
      }
     
    },[idCategoria]);

  
    return(
        <div>
        <div>
            <h1>{props.hola}</h1>
            
        </div>
           <ItemList vehiculos={hola}/>
        </div>


    )
}
export default ItemListContainer;