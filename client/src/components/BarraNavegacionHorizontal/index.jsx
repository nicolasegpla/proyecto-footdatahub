import React from "react";
import { NavegacionHozContenedorLogo} from '../NavegacionHozContenedorLogo'
import { NavegacionHozContenedorIconos} from '../NavegacionHozContenedorIconos'
import './_barraNavegacionHorizontal.scss'

function BarraNavegacionHorizontal() {
    return(
        <>
            <nav className="nav-h-container">
                <NavegacionHozContenedorLogo />
                <NavegacionHozContenedorIconos />
            </nav>
        </>
    )
}

export { BarraNavegacionHorizontal }