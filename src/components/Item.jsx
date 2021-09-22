import { Link } from "react-router-dom";

function Item(props){

return (
    <div key={props.id} className=' card w-50 mt-3'>
        <h2 className='card-header strong'> {props.marca} {props.modelo}</h2>
        <div>
        <img className='card-body' alt='autos' src={props.foto}/>
        </div>
        <p className='card-footer'>{props.precio}</p>
        <Link exact to={`/detalle/${props.id}`}>
        <button>mas info</button>
        </Link>
    </div>
)
}
export default Item;