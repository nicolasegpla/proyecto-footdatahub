import { BotonHoy } from '../BotonHoy'
import { BotonSearch } from '../BotonSearch'
import { IconoIdiomas } from '../IconoIdiomas'
import { InputSearchHoz } from '../InputSearchHoz'
import './navegacionhozcontenedoriconos.scss'

function NavegacionHozContenedorIconos() {
    return (
        <>
            <div className="div--contenedor--iconos">
                <BotonHoy />
                <BotonSearch />
                <InputSearchHoz />
            </div>
        </>
    )
}
export { NavegacionHozContenedorIconos }