import React from 'react'
import carrito from '../imagenes/carrito.png';

function CartWidget({items}) {
  return (
    <>
      <img src={carrito} className="carrito" alt="cart icon"/>
      <span>{items}</span>
    </>
  )
}

export default CartWidget