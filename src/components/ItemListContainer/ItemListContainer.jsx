import './ItemListContainer.css';
import ItemList from './ItemList';

// rfce
import React, { useEffect, useState } from 'react';

export default function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //mi lista de productos
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const listadoProd = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { "titulo": "Florero", "descripcion": "A base de botellas de vidrio recicladas" ,"precio": 799 },
          { "titulo": "Vela Artesanal", "descripcion": "A base de cera de soja", "precio": 566},
          { "titulo": "Jabon Artesanal", "descripcion": "A base de aceites vegetales", "precio": 600},
          { "titulo": "Sesion de Reiki", "descripcion": "Duración de 1hs", "precio": 1200},
          { "titulo": "Sesion de Reflexologia", "descripcion": "Duración de 1hs", "precio": 1800},
          { "titulo": "Lectura Carta Natal", "descripcion": "Duración de 2hs", "precio": 2600},
        ]);
        //rej('No hay productos que mostrar');
      }, 2000);
    });

    //Si se resuelve la promesa, me mostras la lista de productos
    listadoProd
      .then((productos) => {
        setResultado(productos);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  
  return (
   <>
     <h1 className='saludo'>{greeting}</h1>
    <ItemList resultado={resultado}/>
   </>
  );
}