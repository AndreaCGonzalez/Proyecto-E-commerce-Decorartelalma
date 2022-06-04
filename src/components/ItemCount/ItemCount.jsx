import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({inicial, stock, onAdd}) {

const[count, setCount]= useState(inicial);

const sumar= ()=>{
  count < stock ? setCount(count +1) : alert('No puedes agregar mas productos');
}

const restar= ()=>{
  count > inicial? setCount(count -1) : alert ('El item debe tener valor mayor a cero')
}

const reset= ()=>{
  setCount (inicial);
}
  return (
    <>
    <div className='contenedor'>
      <div className='contadorContainer'>
        
        <button className='button btn btn-secondary minusbtn' onClick={restar}>-</button>
        <h1 className='number'> {count} </h1>
        <button className='button btn btn-secondary plusbtn' onClick={sumar}>+</button>
      </div>

        <button className='button btn btn-secondary' onClick={()=> {onAdd(count)}}> Agregar al carrito</button>
      </div>
    </>

  )
}

export default ItemCount