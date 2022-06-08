import React from 'react';
import Item from './Item';

function ItemList({resultado}) {

  return (
    <div style={{margin:'5%'}}>
        {resultado && resultado.map(resultado => <Item key= {resultado.titulo} resultado = {resultado}/>)}
    </div>
  )
}

export default ItemList
