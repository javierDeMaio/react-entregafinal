import React, {useState} from 'react';

export default function ItemCount (props){
const [count, setCount] = useState(props.inicial);

const HandleCount = () => {
    if(count < props.stock){
        setCount(count + 1)
     }   
   else {
      console.log('no hay mas productos');
       }
    }

const HandleNoCount = () => {
    if (count > props.inicial){
    setCount(count - 1 )}
    else {
        
    console.log('no puede ser nulo')
}};
function onAdd(count){
    console.log('usted eligio comprar ' + count);
}
return (
<div>
    <h3>selecciona cuantos productos</h3>
    <p>{count}</p>
    <button onClick={HandleNoCount}>Restar</button>
    <button onClick={HandleCount}>Agregar</button>
    <hr/>
    <button disabled={false} onClick={()=> onAdd(count)}>final</button>
    <hr/>
</div>
)}
;