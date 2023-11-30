import { Logo } from '../Logo'
import { MenuHamburguesa } from '../MenuHamburguesa'
import './_navegacionhozcontenedorlogo.scss'



function NavegacionHozContenedorLogo() {
    return (
        <>
            <div className="div--contenedor--logo">
                <MenuHamburguesa />
                <Logo />
            </div>
        </>
    )
}
export { NavegacionHozContenedorLogo }