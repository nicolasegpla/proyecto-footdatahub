import { BotonVerMasLigas } from '../BotonVerMasLigas';
import './_contenedorligaspopulares.scss';

function ContenedorLigasPopulares (props) {
    return (
        <>
            <ul className='ul--contenedor-ligas'>{ props.children }</ul>
        </>
    )
}

export { ContenedorLigasPopulares }