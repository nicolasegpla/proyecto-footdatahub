import { BotonHoy } from '../BotonHoy'
import { BotonIdiomas } from '../BotonIdiomas'
import { BotonSearch } from '../BotonSearch'
import { InputSearchHoz } from '../InputSearchHoz'
import './_navegacionhozcontenedoriconos.scss'

function NavegacionHozContenedorIconos() {
    return (
        <>
            <div className="div--contenedor--iconos">
                <BotonIdiomas />
                <BotonHoy />
                <BotonSearch />
                <InputSearchHoz />
            </div>
        </>
    )
}
export { NavegacionHozContenedorIconos }