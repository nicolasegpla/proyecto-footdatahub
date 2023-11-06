import { Logo } from '../Logo'
import { MenuHamburguesa } from '../MenuHamburguesa'
import './navegacionhozcontenedorlogo.scss'



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