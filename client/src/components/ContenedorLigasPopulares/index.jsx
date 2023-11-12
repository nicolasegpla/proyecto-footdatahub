import './contenedorligaspopulares.scss';

function ContenedorLigasPopulares ({ children }) {
    return (
        <>
            <ul className='ul--contenedor-ligas'>{ children }</ul>
        </>
    )
}

export { ContenedorLigasPopulares }