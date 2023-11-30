import { IconoIdiomas } from '../IconoIdiomas'
import './_botonidiomas.scss';

function BotonIdiomas () {
    return (
        <>
            <div className='div--boton-idiomas'>
                <IconoIdiomas type={'nav'}/>
                <label className='div--boton-idiomas__label'>Idioma</label>
            </div>
        </>
    )
}

export { BotonIdiomas }