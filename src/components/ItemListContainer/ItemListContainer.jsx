import React from 'react';
import './ItemListContainer.css';

// rfce
function ItemListContainer({greeting}) {
  return <h1 className='saludo'> {greeting} </h1>
}

export default ItemListContainer