import React from 'react';
import { IconoCalendario } from '../IconoCalendario';
import './botonhoy.scss';


function BotonHoy () {

    return (
        <>
            <div className='div--boton-hoy'>
                <div className='div--boton-hoy__active'></div>
                <IconoCalendario type={'nav'} />
                <label className='div--boton-hoy__label'>Hoy</label>
            </div>
        </>
    )
}

export { BotonHoy }