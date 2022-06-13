import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

// rfce
import React, { useEffect, useState } from 'react';

export default function ItemListContainer({greeting}) {
  //mi lista de productos
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    fetch ('https://mocki.io/v1/5d4679fb-5b4d-4e2a-83b2-9391ec23e505')
      .then(res => res.json())
      .then(res => setResultado(res))
      .catch(error => console.error("Error", error))
    
      }, []);
 
  return (
   <>
     <h1 className='saludo'>{greeting}</h1>
    <ItemList resultado={resultado}/>
   </>
  );
}