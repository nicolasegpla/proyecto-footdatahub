import React from 'react';
import './listadoligaspopulares.scss';

function ListadoLigasPopulares ({ img }) {

    return (
        <>
            <li className='li--contenedor-liga'>
                <img className='li--contenedor-liga__img' src={img} alt="" />
            </li>
        </>
    )
}

export { ListadoLigasPopulares }