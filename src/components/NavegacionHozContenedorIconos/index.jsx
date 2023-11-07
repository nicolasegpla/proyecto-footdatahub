import { BotonSearch } from '../BotonSearch'
import { InputSearchHoz } from '../InputSearchHoz'
import './navegacionhozcontenedoriconos.scss'

function NavegacionHozContenedorIconos() {
    return (
        <>
            <div className="div--contenedor--iconos">
                <BotonSearch />
                <InputSearchHoz />
            </div>
        </>
    )
}
export { NavegacionHozContenedorIconos }