import ItemCount, {  } from "../../components/NabVar/ItemCount";
function ItemDetail(props){
  
    return(
         <div className='card w-50 mt-3'>
        <h2 className='card-header strong'> {props.destacado.marca} {props.destacado.modelo}</h2>
        <div>
        <img className='card-body' alt='autos' src={props.destacado.foto}/>
        </div>
        <p className='card-footer'>{props.destacado.estado}</p>
        <div>
        <ItemCount stock={5} inicial={1} onAdd/>
        </div>
        <button >agregar</button>
        
        </div> 
         )
    }
    export default ItemDetail;
