import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.jsx';


function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [detalles, setDetalles] = useState({});

    useEffect(() => {
        const detallesProd = new Promise((res, rej) => {
        setTimeout(() => {
            res({ "titulo": "Florero", "descripcion": "A base de botellas de vidrio recicladas pintadas a mano" ,"precio": 799 });
            }, 2000);
        });

        detallesProd
        .then((mostrarDetalles) => {
          setDetalles(mostrarDetalles);
        })
        .catch((error) => {
          setError(true);
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return <ItemDetail mostrarDetalles={detalles}/>
    
}

export default ItemDetailContainer