import React, { useEffect } from 'react';
import './listadoligaspopulares.scss';

function ListadoLigasPopulares ({ img, id }) {
    

    function prueba () {
            fetch(`http://localhost:3040/leagues/${id}`)
            .then(res => res.json())
            .then(response => {
                //En este array estaran almacenadas las ligas populares a renderizar//
                const pruebaliga = response;
                let { data } = pruebaliga;
                
               console.log(data.name);
                })
            .catch((error) => console.log(`tenemos errores de carga ${error}`));
    }
    
    return (
        <>
            <li className='li--contenedor-liga' onClick={() => {prueba()}}>
                <img className='li--contenedor-liga__img' src={img} alt="" />
            </li>
        </>
    )
}

export { ListadoLigasPopulares }