
import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import getFetch from './fil';
import { useParams } from "react-router-dom";


const ItemDetailContainer = (props) => {

const [guardado,setEstado] = useState()
const [loading,setLoading]= useState(true)
const {id} = useParams();


useEffect(()=> { 
  
    getFetch
     .then(respuesta => {
      if(id){
        const itemFiltrado = respuesta.filter((guardado) => guardado.id === parseInt(id))
        setEstado(itemFiltrado)
  
     } else {
       setEstado(respuesta)
     }})
  .catch((err)=> console.log(err))
  .finally(()=> setLoading(false))

}, [id])


return(
  <div>
    <h1>{props.chau}</h1>
    {loading ? <h1>CARGANDO...</h1>: <ItemDetail key={guardado[0].id} destacado={guardado[0]} />}
  </div>
   )
}
export default ItemDetailContainer;