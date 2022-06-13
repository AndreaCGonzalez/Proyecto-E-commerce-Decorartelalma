import React from 'react';


function Item({resultado}) {
  const {imagen, alt, titulo, precio} = resultado;
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
      <div className='card shadow mb-1 bg-light rounded mb-5' style={{width: '16rem'}}>                            
        <div className='card-body'>
          <img src= {imagen}  className='card-img-top' alt={alt} width="200" height="260"/>
          <h5 className='card-title'> {titulo} </h5>
          <h5 className='precio'>{precio}</h5>
          <div className='d-grid gap-2'>
            <button className='btn btn-secondary button btnComprar'>Comprar</button>
          </div>               
        </div>               
      </div>
    </div>
    </>
  )
}

export default Item