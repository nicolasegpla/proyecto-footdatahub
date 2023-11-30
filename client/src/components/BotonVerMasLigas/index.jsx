import React from 'react';
import { IconVerMas } from '../IconVerMas'
import { DataContext } from '../DataContext/DataContext';
import './_botonvermasligas.scss';

function BotonVerMasLigas () {

    const { getAllLeagues } = React.useContext(DataContext);

    return (
        <>
            <button onClick={() => {getAllLeagues()}} className='button-ver-mas'>
                <IconVerMas />
            </button>
        </>
    )
}

export { BotonVerMasLigas }