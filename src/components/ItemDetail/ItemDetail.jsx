import React from 'react'

function ItemDetail({detalles}) {

  return (
    <>
        {detalles && detalles.map((producto)=>(
            <div>
                <h5> titulo: {producto.titulo} </h5>
                <h6> descripcion: {producto.descripcion} </h6>
                <span> Precio: $ {producto.precio} </span>
            </div>
                
        ))}
    </>
  )
}

export default ItemDetail