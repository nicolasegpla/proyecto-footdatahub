import './_cerrar.scss';
import React from 'react';
import { DataContext } from "../DataContext/DataContext";
import { IconCerrar } from '../IconCerrar';

function Cerrar () {

    const { cerrarModalInfoLigas } = React.useContext(DataContext);

    return (
        <>
            <div onClick={cerrarModalInfoLigas} className='div--cerrar'><IconCerrar /></div>
        </>
    )
}

export { Cerrar }