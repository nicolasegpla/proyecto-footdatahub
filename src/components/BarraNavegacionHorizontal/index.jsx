import React from "react";
import { NavegacionHozContenedorLogo} from '../NavegacionHozContenedorLogo'
import './_barraNavegacionHorizontal.scss'

function BarraNavegacionHorizontal() {
    return(
        <>
            <nav className="nav-h-container">
                <NavegacionHozContenedorLogo />
            </nav>
        </>
    )
}

export { BarraNavegacionHorizontal }