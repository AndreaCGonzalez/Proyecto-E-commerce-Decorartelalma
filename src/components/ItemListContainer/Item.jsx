import React from 'react'

function Item({resultado}) {
  const {titulo, descripcion, precio} = resultado;
  return (
    <>
    <div className='card mb-5' style={{width:' 50%', height:'30%'}}>
        <div className='card-body'>
          <h5 className='card-title'> {titulo} </h5>
          <p className='card-text'> {descripcion} </p>
          <h6 className='card-subtitle mb-2 text-muted'>$ {precio}</h6>
          <a href='#' className='card-link'>Mas detalles</a>
        </div>
      </div>
    </>
  )
}

export default Item