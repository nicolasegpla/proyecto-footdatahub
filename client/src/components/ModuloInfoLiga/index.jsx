import React from "react";
import { DataContext } from "../DataContext/DataContext";
import { Cerrar } from '../Cerrar'
import './_moduloinfoligas.scss';


function ModuloInfoLigas () {

    const { modalInfoLigas } = React.useContext(DataContext);

    return (
        <>
            <section className={`${!modalInfoLigas ? "section--mil" : "section--mil--close" }`}>
                <Cerrar />
            </section>
        </>
    )
}

export { ModuloInfoLigas }