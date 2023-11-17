import React from 'react';
import './listadoligaspopulares.scss';
import { DataContext } from '../DataContext/DataContext';

function ListadoLigasPopulares ({ img, id, name }) {
    
    const { getLeagueById } = React.useContext(DataContext);
    
    return (
        <>
            <li className='li--contenedor-liga' onClick={() => (getLeagueById(id))}>
                <img className='li--contenedor-liga__img' src={img} alt={`Logo de la liga ${name}`} />
            </li>
        </>
    )
}

export { ListadoLigasPopulares }