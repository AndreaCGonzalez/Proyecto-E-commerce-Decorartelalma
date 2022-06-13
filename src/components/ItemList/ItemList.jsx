import React from 'react';
import './ItemList.css';
import Item from '../Item';

function ItemList({resultado}) {

  return (
    <div className='container-fluid' style={{marginTop: '10%'}}>
        {resultado && resultado.map(resultado => <Item key= {resultado.titulo} resultado = {resultado}/>)}
    </div>
  )
}

export default ItemList
